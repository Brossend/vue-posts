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
      <my-button @click="$router.push('/posts')" style="margin-right: 15px;">Посты</my-button>
      <my-button @click="$router.push('/store')" style="margin-right: 15px;">Store</my-button>
      <my-button @click="$router.push('/compositionApi')" style="margin-right: 15px;">Composition Api</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<style scoped>
  .navbar {
    height: 50px;
    background-color: transparent;
    border-bottom: 2px solid teal;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .navbar__btn {
    margin-left: auto;
  }
</style>