<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />
    <div class="app__btn">
      <my-button
          style="margin-top: 15px;"
      >
        Создать пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :option="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>
    <post-list
        v-if="!isPostsLoading"
        :posts="sortedAndSearchedPosts"
    />
    <div class="loading" v-else>Идет загрузка...</div>
    <div class="page__wrapper">
      <div
          class="page"
          :class="{
            'current-page': page === pageNum
          }"
          v-for="pageNum in totalPages"
          :key="pageNum"
      >
        {{pageNum}}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearched from "@/hooks/useSortedAndSearched";
export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostForm, PostList
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'}
      ]
    }
  },
  setup() {
    const {posts, isPostsLoading, totalPages} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearched(sortedPosts);

    return {
      posts,
      isPostsLoading,
      totalPages,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style scoped>
.app__btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.loading {
  margin-top: 15px;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
}

.page {
  border: 2px solid gray;
  padding: 10px;
  margin-right: 2px;
}

.current-page {
  border: 2px solid teal;
}
</style>