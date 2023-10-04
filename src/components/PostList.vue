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
  <transition name="posts">
    <div v-if="posts.length > 0">
      <h3 style="margin-top: 15px;">Список постов</h3>
      <transition-group name="posts">
        <post-item
            :post="post"
            @remove="$emit('remove', post)"
            v-for="post in posts"
            :key="post.id"/>
      </transition-group>
    </div>
    <h2 style="margin-top: 15px;" v-else>Список постов пуст</h2>
  </transition>
</template>

<style scoped>
  .posts-item {
    display: inline-block;
    margin-right: 10px;
  }
  .posts-move {
    transition: transform 0.8s ease;
  }
  .posts-enter-active,
  .posts-leave-active {
    transition: all 0.4s ease;
  }
  .posts-enter-from,
  .posts-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }
</style>