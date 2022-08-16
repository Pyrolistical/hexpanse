export type $State<T> = {
  (): T;
  (next?: T): void;
};
export type $Reactive<T> = {
  [K in keyof T as K extends string ? `$${K}` : never]: $State<T[K]>;
};

type Listener = () => void;

const values = new WeakMap<$State<any>, any>();
const listeners = new WeakMap<$State<any>, Listener[]>();

const Update = <T>(state: $State<T>, value: T) => {
  if (values.has(state) && values.get(state) === value) {
    // prevents pointless updates and some infinite loops
    return;
  }
  values.set(state, value);
  if (!listeners.has(state)) {
    return;
  }
  for (const listener of listeners.get(state)!) {
    setTimeout(listener, 0);
  }
};

type States<T extends any[]> = T extends [infer HEAD, ...infer TAIL]
  ? [
      HEAD extends $State<infer U>
        ? U
        : HEAD extends $State<infer V>[]
        ? V[]
        : never,
      ...States<TAIL>
    ]
  : [];

type Effect<T extends any[]> = (...params: T) => void;

const Listener = <T extends ($State<any> | $State<any>[])[]>(
  states: T,
  effect: Effect<States<T>>
): Listener => {
  const listener = () => {
    const data = [];
    for (const mixedState of states) {
      if (mixedState instanceof Array) {
        const arrayData = [];
        for (const state of mixedState) {
          if (!values.has(state)) {
            return;
          }
          arrayData.push(values.get(state));
        }
        data.push(arrayData);
      } else {
        const state = mixedState;
        if (!values.has(state)) {
          return;
        }
        data.push(values.get(state));
      }
    }
    return effect(...(data as States<T>));
  };
  listener.toString = () =>
    `Listener(${states.map(String).join(", ")}, ${effect})`;
  return listener;
};

export type $Dispose = () => void;

const Dispose = <T extends ($State<any> | $State<any>[])[]>(
  states: T,
  listener: Listener
): $Dispose => {
  const dispose = () => {
    for (const mixedState of states) {
      if (mixedState instanceof Array) {
        Dispose(mixedState, listener);
      } else {
        const state = mixedState;
        if (!listeners.has(state)) {
          continue;
        }
        const updatedListeners = listeners
          .get(state)!
          .filter((existingListener) => existingListener !== listener);
        listeners.set(state, updatedListeners);
      }
    }
  };
  dispose.toString = () => `Dispose(${listener})`;
  return dispose;
};

export const $State = <T>(
  initialValue: T | undefined,
  name = ""
): $State<T> => {
  const state: $State<T> = function (next?: T): T | void {
    if (arguments.length === 0) {
      return values.get(state);
    }
    Update<T>(state, next!);
  } as $State<T>;
  state.toString = () => `\$${name}`;
  state(initialValue);
  return state;
};

export const $On = <T extends ($State<any> | $State<any>[])[]>(
  ...statesEffect: readonly [...T, Effect<States<T>>]
): $Dispose => {
  const states = statesEffect.slice(0, -1) as T;
  const effect = statesEffect[statesEffect.length - 1] as Effect<States<T>>;

  const listener = Listener(states, effect);

  for (const mixedState of states) {
    if (mixedState instanceof Array) {
      for (const state of mixedState) {
        if (listeners.has(state)) {
          listeners.get(state)!.push(listener);
        } else {
          listeners.set(state, [listener]);
        }
      }
    } else {
      const state = mixedState;
      if (listeners.has(state)) {
        listeners.get(state)!.push(listener);
      } else {
        listeners.set(state, [listener]);
      }
    }
  }
  setTimeout(listener, 0);

  return () => {
    Dispose(states, listener);
  };
};
