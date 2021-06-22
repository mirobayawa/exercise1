<template>
  <div class="newsfeed">
    <PostField/>
    <br>
    <div>
      <ul>
        <li v-for="post in reversePostsList" v-bind:key="post.id" class="post">
            <PostsComponent :posts= "post"/>
            <br>
        </li>
      </ul>
    </div>
    <br>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostField from '@/components/PostField.vue'; // @ is an alias to /src
import PostsComponent from '@/components/PostsComponent.vue';
import useLoadNewsFeed from '@/use/useLoadNewsFeed';

export default defineComponent({
  name: 'Home',
  components: {
    PostField,
    PostsComponent,
  },
  setup() {
    let loadNewsFeed = useLoadNewsFeed();

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
}
</style>
