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
        <Button class="edit-post p-button-raised p-button-primary" icon="pi pi-pencil" iconPos="right"
          label="Edit"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IPost } from '@/interfaces/post';
import { posts } from '@/data/db.json';
import Button from 'primevue/button';

export default defineComponent({
  name: 'post-content',
  components: {
    Button,
  },
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  setup(props) {
    let postsList = ref<IPost[]>(posts);

    function filter() {
      return postsList.value.filter(item => {
        return item.id == props.id
      })
    }
    return {
      postsList,
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
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
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
.edit-post {
  cursor: pointer;
  border-radius: 10px;
  float: right;
  padding-left: 5%;
  padding-right: 5%;
}
</style>
