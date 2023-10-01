<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btn">
      <my-button
          style="margin-top: 15px;"
          @click="showDialog"
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
          @create="createPost"
      />
    </my-dialog>
    <post-list
        v-if="!isPostLoading"
        @remove="removePost"
        :posts="posts"
    />
    <div class="loading" v-else>Идет загрузка...</div>
  </div>
</template>

<script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import MyDialog from "@/components/UI/MyDialog.vue";
  import MyButton from "@/components/UI/MyButton.vue";
  import axios from "axios";
  import MySelect from "@/components/UI/MySelect.vue";
    export default {
      components: {
        MySelect,
        MyButton,
        MyDialog,
        PostForm, PostList
      },
      data() {
        return {
          posts: [],
          dialogVisible: false,
          isPostLoading: false,
          selectedSort: '',
          sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержанию'}
          ]
        }
      },
      methods: {
        createPost(post) {
          this.posts.push(post);
          this.dialogVisible = false;
        },
        removePost(post) {
          this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
          this.dialogVisible = true;
        },
        async fetchPosts() {
          try {
            this.isPostLoading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1?_limit=10');
            this.posts = response.data;
          } catch (e) {
            alert('Ошибка');
          } finally {
            this.isPostLoading = false;
          }
        },
      },
      mounted() {
        this.fetchPosts();
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }

  .app__btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .loading {
    margin-top: 15px;
  }

</style>