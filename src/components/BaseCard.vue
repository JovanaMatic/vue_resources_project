<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style scoped>
  .card {
     border: 1px solid rgba(48, 121, 174, 0.25);
     box-shadow: 5px 5px 5px rgba(33, 81, 115, 0.25);
     min-width: 600px;
     min-height: 100px;
     margin: 10px;
     border-radius: 5px;
  }
</style>