<script>
  export default {
    name: 'my-button',
  }
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
  .btn {
    padding: 10px 15px;
    background: none;
    border: 2px solid teal;
  }

  .btn:hover {
    background: teal;
    color: white;
  }
</style>