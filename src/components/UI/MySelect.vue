<script>
  export default {
    name: 'my-select',
    props: {
      modelValue: {
        type: String,
      },
      option: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>

<template>
  <select
      class="select"
      @change="changeOption"
      :value="modelValue"
  >
    <option disabled value="">Выбирите из списка</option>
    <option
        v-for="options in option"
        :key="options.value"
        :value="options.value">
      {{options.name}}
    </option>
  </select>
</template>

<style scoped>
  .select {
    max-height: 44px;
    border: 2px solid teal
  }
</style>