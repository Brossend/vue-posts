<script>
  import MyInput from "@/components/UI/MyInput.vue";
  import MyButton from "@/components/UI/MyButton.vue";

  export default {
    components: {MyButton, MyInput},
      data() {
        return {
          post: {
            title: '',
            body: '',
          }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();

        this.$emit('create', this.post);

        this.post = {
          title: '',
          body: '',
        }
      }
    }
  }
</script>

<template>
  <form @submit.prevent>
    <h4 style="margin-top: 0;">Создание поста</h4>

    <my-input
        v-model="this.post.title"
        type="text"
        placeholder="Название"
    />
    <my-input
        v-model="this.post.body"
        type="text"
        placeholder="Описание"
    />
    <my-button class="btn" @click="createPost">
      Создать
    </my-button>
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  .btn {
    margin-top: 15px;
    align-self: flex-end;
  }
</style>