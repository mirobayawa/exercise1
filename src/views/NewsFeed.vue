<template>
  <div class="news-feed">
    <PostField/>
    <br>
    <div>
      <ul>
        <li v-for="post in posts" v-bind:key="post.id" class="post">
            <PostsComponent :posts= "post"/>
            <br>
        </li>
      </ul>
    </div>
    <br>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import PostField from '@/components/PostField.vue'; // @ is an alias to /src
import PostsComponent from '@/components/PostsComponent.vue';
import { IPost } from '@/interfaces/post';

export default defineComponent({
  name: 'Home',
  components: {
    PostField,
    PostsComponent,
  },
  setup() {
    let posts = ref<IPost[]>([]);

    const getPosts = async () => {
      posts.value = await fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then(data => posts.value = data)
      .catch(error => console.log(error.message))
    };
    onMounted(() => {
      getPosts();
    });
    return {
      posts,
      getPosts
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
</style>
