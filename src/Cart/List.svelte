<script>
  import cartsStore from "./stroe";

  function removeFromCart(id) {
    cartsStore.removeItem(id);
  }
</script>

<div>
  <h1>Carts :</h1>
  <!-- `$` shorthand to subscribe and unsubscribe without declare state -->
  {#if $cartsStore.length}
    <ul>
      {#each $cartsStore as cart (cart.id)}
        <li>
          <span>{cart.title} </span>
          <button on:click={() => removeFromCart(cart.id)}>x</button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
