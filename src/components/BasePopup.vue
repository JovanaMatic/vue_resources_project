<template>
  <div class="overlay">
    <dialog open>
    <div class="popup-container">
      <div class="popup">
        <slot></slot>
      </div>
    </div>
  </dialog>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}
</style>