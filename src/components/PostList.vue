<script>
  import PostItem from "@/components/PostItem.vue";

  export default {
    components: {PostItem},
    props: {
      posts: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<template>
  <div v-if="posts.length > 0">
    <h3 >Список постов</h3>
    <post-item
        :post="post"
        @remove="$emit('remove', post)"
        v-for="post in posts"
        :key="post.id"/>
  </div>
  <h2 style="margin-top: 15px;" v-else>Список постов пуст</h2>
</template>

<style scoped>

</style>