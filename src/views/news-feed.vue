<template>
  <div class="newsfeed">
    <PostField/>
    <br>
    <div>
      <ul>
        <li v-for="post in reversePostsList" :key="post.id" class="post">
            <PostsComponent :posts="post"/>
            <br>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostField from '@/components/post-field.vue'; // @ is an alias to /src
import PostsComponent from '@/components/posts-component.vue';
import { useLoadNewsFeed } from '@/use/use-post';

export default defineComponent({
  name: 'Home',
  components: {
    PostField,
    PostsComponent,
  },
  setup() {
    const loadNewsFeed = useLoadNewsFeed();

    return {
      reversePostsList: loadNewsFeed.reversePostsList,
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
.newsfeed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px;
}
</style>
