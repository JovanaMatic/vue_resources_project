<template>
    <div class="popup">
        <h3>Following info will be added:</h3>
        <p>Title: {{ title }}</p>
        <p>Text: {{ text }}</p>
        <p>Link: {{ link }}</p>
        <base-button @click="confirmData">Ok</base-button>
    </div>
</template>

<script>
    export default {
        props: ['title', 'text', 'link'],
        emits:['confirm-data', 'keep-editing'],
        methods: {
            confirmData() {
                this.$emit('confirm-data')
            },
            keepEditing() {
                this.$emit('keep-editing')
            }
        }
    }
</script>

<style scoped>
    .popup {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>