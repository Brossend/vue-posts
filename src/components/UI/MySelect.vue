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
      @change="changeOption"
      :value="modelValue"
  >
    <option disabled value="">Выбирите из списка</option>
    <option
        v-for="options in option"
        :key="options.value"
        :value="options">
      {{options.name}}
    </option>
  </select>
</template>

<style scoped>

</style>