import { writable } from "svelte/store";

const products = writable([
  {
    id: "p1",
    title: "A Book",
    price: 9.99,
    descpription: "A great book !",
  },
  {
    id: "p2",
    title: "A Carpet",
    price: 9.99,
    descpription: "Red and green.",
  },
]);

export default products;
