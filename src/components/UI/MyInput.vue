<script>
  export default {
    name: 'my-input',
    props: {
     modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>

<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<style scoped>
  .input {
    margin-top: 15px;
    padding: 10px 15px;
    border: 2px solid teal;
  }
</style>