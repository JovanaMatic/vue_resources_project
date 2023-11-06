<template>
  <p v-if="resources.length <= 0">No resources to show</p>
  <base-card v-for="res in resources" :key="res.id">
    <div class="container">
    <base-button @click="deleteResource(res)">Delete</base-button>
    <h1>{{ res.title }}</h1>
    <p>{{ res.text }}</p>
    <a :href="res.link">View Resource</a>
  </div>
  </base-card>
</template>

<script>
  export default {
    props: ['resources'],
    emits: ['delete-resource'],
    methods: {
      deleteResource(res) {
        this.$emit('delete-resource', res)
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px;
    border: 1px solid grey;
    margin: 10px;
  }

  button {
    float: right
  }
</style>