<template>
  <base-card>
    <div class="add-res-cont">
    <form @submit.prevent="submitResource">
      <h1>Add resource</h1>
      <label for="title">Title</label>
      <input type="text" v-model="title"/>

      <label for="text">Text</label>
      <textarea v-model="text"></textarea>

      <label for="link">Link</label>
      <input type="text" v-model="link"/>

      <base-button :disabled="!title.length || !text.length || !link.length" :class="{ disabledBtn: !title.length || !text.length || !link.length }"
      >Add resource</base-button>
    </form>
  </div>
  </base-card>
  <teleport to="body">
    <base-popup v-if="showDialog">
      <display-popup :text="text" :title="title" :link="link" @confirm-data="confirmData" @keep-editing="keepEditing"></display-popup>
    </base-popup>
  </teleport>
</template>

<script>
import DisplayPopup from './DisplayPopup.vue'

  export default {
    components: {
      DisplayPopup
    },
    emits: ['submit-resource', 'confirm-data'],
    data() {
      return {
        title: '',
        text: '',
        link: '',
        id: '',
        showDialog: false
      }
    },
    methods: {
      submitResource() {
        const res = {
          title: this.title,
          text: this.text,
          link: this.link,
          id: new Date()
        }
        this.showDialog = true
        this.$emit('submit-resource', res)
      },
      confirmData() {
        this.$emit('confirm-data')
      },
      keepEditing() {
        this.showDialog = false
      }
    }
  }
</script>

<style scoped>
  .add-res-cont {
    padding: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input, textarea {
    padding: 10px;
    margin-bottom: 5px;
  }

  label {
    margin-bottom: 5px;
  }

  .disabledBtn {
    background-color: rgba(125, 33, 48, 0.25);
  } 
</style>