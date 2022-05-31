<script>
  import { onDestroy } from "svelte";
  import timer from "../timer-store";

  import productsStore from "./store";
  import ProductItem from "./Item.svelte";

  let products = [];
  const unsubscribe = productsStore.subscribe((p) => (products = p));

  onDestroy(() => {
    unsubscribe && unsubscribe();
  });
</script>

<h1>Products :</h1>
{#each products as product (product.id)}
  <ProductItem
    id={product.id}
    title={product.title}
    price={product.price}
    descpription={product.descpription}
  />
{/each}

<p>Timer : {$timer}</p>

<style>
</style>
