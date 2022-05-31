<script>
  import CartList from "./Cart/List.svelte";
  import ProductList from "./Product/List.svelte";

  let showProduct = true;
</script>

<main>
  <CartList />
  <hr />

  <button
    on:click={() => {
      showProduct = !showProduct;
    }}
    >Toggle show product
  </button>
  {#if showProduct}
    <ProductList />
  {/if}
</main>

<style>
</style>
