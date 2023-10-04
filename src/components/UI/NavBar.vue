<script>

import {defineComponent} from "vue";
import MyButton from "@/components/UI/MyButton.vue";

export default defineComponent({
  components: {MyButton}
})
</script>

<template>
  <div class="navbar">
    <div style="cursor: pointer" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btn">
      <my-button @click="$router.push('/users')" style="margin-right: 15px;">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<style scoped>
  .navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .navbar__btn {
    margin-left: auto;
  }
</style>