<script>
  import MyButton from "@/components/UI/MyButton.vue";

  export default {
    components: {MyButton},
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<template>
  <div class="post">
    <div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div>
      <my-button style="margin-left: 15px;" @click="$emit('remove', post)">
        Удалить
      </my-button>
    </div>
  </div>
</template>

<style scoped>
  .post {
    display: flex;
    margin-top: 15px;
    padding: 15px;
    border: 2px solid teal;
    align-items: center;
    justify-content: space-between;
  }
  .post__btns {
    padding: 10px 15px;
    background: none;
    border: 2px solid teal;
    align-self: flex-end;
  }

  .post__btns:hover {
    background: teal;
    color: white;
  }
</style>