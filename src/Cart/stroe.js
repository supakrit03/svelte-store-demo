import { writable } from "svelte/store";

const carts = writable([
  {
    id: "c1",
    title: "Test",
    price: 9.99,
  },
  {
    id: "c2",
    title: "Test",
    price: 9.99,
  },
]);

const createStore = {
  // declare subscribe method for use `$`
  subscribe: carts.subscribe,
  addItem: (product = {}) => {
    carts.update((items) => {
      return [...items, product];
    });
  },
  removeItem: (id) => {
    carts.update((items) => items.filter((item) => item.id !== id));
  },
};

export default createStore;
