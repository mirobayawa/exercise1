<template>
  <div v-if="post" class="main">
    <div class="view p-card p-component">
      <div class="p-card-body">
        <div class="title p-card-title">
          {{ post.title }}
        </div>
        <div class="title p-card-subtitle">
          {{ post.author }}
        </div>
        <div class="p-card-content">
          {{ post.msg }}
        </div>
        <div class="footer">
          <EditPost :id="$props.id"></EditPost>
        </div>
        <Toast position="top-right" />
      </div>
    </div>
  </div>
  <div v-else>
    <PageNotFound></PageNotFound>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import TextArea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import { useViewPost } from '@/use/use-post';
import PageNotFound from '@/views/page-not-found.vue';
import Toast from 'primevue/toast';
import EditPost from '@/components/edit-post.vue';

export default defineComponent({
  name: 'post-content',
  components: {
    Button,
    Dialog,
    TextArea,
    InputText,
    PageNotFound,
    Toast,
    EditPost,
},
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  setup(props) {
    const viewPost = useViewPost(props.id);

    return {
      post: viewPost.post,
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
  justify-content: flex-start;
  max-width: 800px;
  min-height: 250px;
  border-radius: 10px;
  padding: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.edit-post {
  cursor: pointer;
  border-radius: 10px;
  float: right;
  padding-left: 5%;
  padding-right: 5%;
}
.dialog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
