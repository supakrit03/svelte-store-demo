import { readable } from "svelte/store";

let count = 0;

const timer = readable(count, (set) => {
  const interval = setInterval(() => {
    count++;
    set(count);
  }, 2000);

  return () => {
    console.log("timer unsubscribe");
    count = 0;
    clearInterval(interval);
  };
});

export default timer;
