<template>
  <header>
    <nav>
      <h1>My Resources</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>

header {
  background-color: rgb(44, 157, 223);
  color: white;
  height: 80px;
}
  h1 {
    font-size: 40px;
    margin: 0;
    padding: 0;
    margin-left: 20px;
  }

  nav {
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    width: 80%;
    justify-content: end;
  }

  li {
    font-size: 20px;
    padding: 10px;
  }
</style>