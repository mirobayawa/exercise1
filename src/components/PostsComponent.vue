<template>
  <div>
    <div v-if="posts" class="post-content p-card p-component">
      <div class="title-content">
        <div class="title p-card-title">
          {{ posts.title }}
        </div>
        <div class="sub-title p-card-subtitle">
          {{ posts.author }}
        </div>
      </div>
      <div class="body p-card-body" style="text-align:left">
        {{ posts.msg }}
      </div>
      <div style="margin-top:30px">
        <Button class="delete-post p-button-danger" label="Delete" @click="deletePost()"/>
        <router-link class-active="active" :to="viewPost(posts.id)">
          <Button class="view-post p-button-secondary" label="View"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import axios from 'axios';
import { IPost } from '@/interfaces/post';
import Button from 'primevue/button';

export default defineComponent({
  name: 'PostsComponent',
  components: {
    Button,
  },
  setup(props) {
    function deletePost() {
      axios.delete("http://localhost:3000/posts/" + props.posts['id']
      ).then((response) => {
        console.log(response);
        window.location.reload(true);
      })
      .catch(function (error) {
        console.log(error)
      })
    }
    function viewPost(id: number) {
      return {
        name: 'ViewPost', params: {id: id}
      }
    }
    return {
      deletePost,
      viewPost,
    }
  },
  props: {
    posts: {
      type: Object as PropType<IPost>,
      required: true,
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post-content {
  margin: auto;
  width: 800px;
  height: 300px;
  border-radius: 10px;
  padding: 5px;
}
.view-post {
  // padding: 10px 30px;
  margin-bottom: 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
  float: right;
  padding-left: 5%;
  padding-right: 5%;
}
.delete-post {
  // padding: 10px 30px;
  margin-bottom: 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
  float: right;
  padding-left: 5%;
  padding-right: 5%;
}
.sub-title {
  margin: auto;
}
body {
  align-content: left;
  margin: auto;
}
.title-content {
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  align-content: flex-start;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
