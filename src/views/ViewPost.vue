<template>
  <div class="main">
    <div class="view p-card p-component">
      <div v-for="post in filter()" :key="post.id" class="p-card-body">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IPost } from '@/interfaces/post';
import { posts } from '@/data/db.json';

export default defineComponent({
  name: 'post-content',
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  setup(props) {
    let posts_list = ref<IPost[]>(posts);

    function filter() {
      return posts_list.value.filter(item => {
        return item.id == props.id
      })
    }
    return {
      posts_list,
      filter
    };
  }
});
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
.view {
  margin: auto;
  width: 800px;
  min-height: 250px;
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
