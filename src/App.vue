<template>
  <the-header></the-header>
  <div class="main">
    <base-card>
      <base-button @click="openResources('displayRes')">See resources</base-button>
      <base-button @click="openResources('addRes')">Add resources</base-button>
    </base-card>
      <display-resources :resources="resources" v-if="showTile === 'displayRes'" @delete-resource="deleteResource"></display-resources>
      <add-resources @confirm-data="confirmData" v-else @submit-resource="submitRes"></add-resources>
  </div>
</template>

<script>

import DisplayResources from './components/DisplayResources.vue'
import AddResources from './components/AddResources.vue'


export default {
  name: 'App',
  components: {
    DisplayResources,
    AddResources
  },
  data() {
    return {
      showTile: 'displayRes',
      resources: [
        
      ]
    }
  },
  methods: {
    openResources(resource) {
      this.showTile = resource
    },
    submitRes(resource) {
      this.resources.push(resource)
    },
    deleteResource(res) {
     this.resources = this.resources.filter(item => item.id !== res.id)
    },
    confirmData() {
      this.showTile = 'displayRes'
    }
  }
}
</script>

<style>

html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.main {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
