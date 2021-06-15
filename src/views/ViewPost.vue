<template>
  <div v-if="post" class="view p-card p-component">
    <div class="p-card-body">
      <div class="p-card-title">
        {{ post.title }}
      </div>
      <div class="p-card-subtitle">
        {{ post.author }}
      </div>
      <div class="p-card-content">
        {{ post.msg }}
      </div>
    </div>
  </div>
  <div v-else>
    <h3>Loading posts...</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { IPost } from '@/interfaces/post';

export default defineComponent({
  name: 'post-content',
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  setup(props) {
    const post = ref<IPost>();

    const getPost = async () => {
      post.value = await fetch('http://localhost:3000/posts/' + props.id)
      .then((response) => response.json())
      .then(data => post.value = data)
      .catch(error => console.log(error.message))
    }
    onMounted(() => {
      getPost();
    });
    return {
      post,
      getPost
    };
  }
});
</script>

<style scoped lang="scss">
.view {
  margin: auto;
  width: 800px;
  height: 250px;
  border-radius: 10px;
  padding: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
h4 {
  float: left;
  margin-left: 10px;
}
p {
  margin: 15px;
  margin-top: 25px;
  text-align: left;
}
h3 {
  justify-content: center;
}
</style>
