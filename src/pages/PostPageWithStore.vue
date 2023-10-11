<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск..."
    />
    <div class="app__btn">
      <my-button
          style="margin-top: 15px;"
          @click="showDialog"
      >
        Создать пост
      </my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :option="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        v-if="!isPostLoading"
        @remove="removePost"
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
          @click="changePage(pageNum)"
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
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
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
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
    showDialog() {
      this.dialogVisible = true;
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
  },
  watch: {
    page() {
      this.fetchPosts();
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