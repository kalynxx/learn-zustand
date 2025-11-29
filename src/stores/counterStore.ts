import { create } from "zustand";

/*
 * In Typescript, create a type for each entity you want to store
 * inside of your global state.
 * It contains its data shape aswell as its empty reducer functions.
 * there is no predefined shape, just go wild how you design your stores.
 * You can also put the reducer functions into a little object because why not.
 */
type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementAsync: () => Promise<void>;
  decrementAsync: () => Promise<void>;
  resetAsync: () => Promise<void>;
};

// Implement a new store hook and implement both the initial state,
// aswell as the reducer functions.
const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  reset: () => {
    set((state) => ({ count: (state.count = 0) }));
  },
  /*
   * For these async reducer functions, i spoofed an async call by
   * creating a promise for a Timeout of half a second to run out.
   * Usually this would contain some api call.
   */
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    set((state) => ({ count: state.count + 1 }));
  },
  decrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    set((state) => ({ count: state.count - 1 }));
  },
  resetAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    set((state) => ({ count: (state.count = 0) }));
  },
}));

export default useCounterStore;
