<template>
    <button class="btn-comp">
      <slot></slot>  
    </button>
</template>

<script>

</script>

<style>
  .btn-comp {
    border: none;
    background-color: rgb(44, 157, 223);
    border-radius: 5px;
    height: 50px;
    min-width: 100px;
    padding: 10px;
    margin: 20px;
    color: white;
    font-size: 18px;
  }
</style>