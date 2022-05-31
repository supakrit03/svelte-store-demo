<script>
  import cartStore from "../Cart/stroe";

  export let id;
  export let title;
  export let price;
  export let descpription;

  function addToCart() {
    cartStore.addItem({
      id,
      title,
      price,
      descpription,
    });
  }
</script>

<div class="card">
  <div>
    <h3>{title}</h3>
    <div>{price}</div>
    <div>{descpription}</div>
  </div>
  <div>
    <button on:click={() => addToCart()}>Add to cart</button>
  </div>
</div>

<style>
  .card {
    border: 1px solid #ccc;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
</style>
