<template>
  <div class="main">
    <div v-if="posts" class="post-content p-card p-component">
      <div class="title-content p-card-title">
        {{ posts.title }}
      </div>
      <div class="title-content p-card-subtitle">
        <Avatar icon="pi pi-user" class="p-mr-2" size="small" shape="circle" style="margin-right: 6px;"/>
        {{ posts.author }}
      </div>
      <div class="body p-card-body" style="text-align:left">
        <p>{{ posts.msg }}</p>
      </div>
      <div style="margin-top:30px">
        <Button class="delete-post p-button-raised p-button-danger" icon="pi pi-trash" iconPos="right"
          label="Remove" @click="confirm_delete"/>
        <Button class="view-post p-button-raised p-button-info" icon="pi pi-folder-open" iconPos="right"
          label="View" @click="viewPost(posts.id)"/>
        <ConfirmPopup group="popup"></ConfirmPopup>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Button from 'primevue/button';
import { IPost } from '@/interfaces/post';
import router from '@/router';
import RouteNames from '@/enums/route-names';
import ConfirmPopup from 'primevue/confirmpopup';
import { useDeletePost } from '@/use/use-post';
import Avatar from 'primevue/avatar';
import { useConfirm } from 'primevue/useconfirm';

export default defineComponent({
  name: 'PostsComponent',
  components: {
    Button,
    ConfirmPopup,
    Avatar,
  },
  props: {
    posts: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  setup(props) {
    const confirm = useConfirm();

    const deletePost = useDeletePost(props.posts['id']);

    const confirm_delete = (event: any) => confirm.require({
      target: event.currentTarget,
      group: 'popup',
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      acceptClass: 'p-button-danger',
      accept: () => {
        deletePost.deletePost();
      },
    });

    function viewPost(id: number) {
      return router.push({name: RouteNames.ViewPost, params: {id: id}});
    }
    return {
      viewPost,
      confirm_delete,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  display: flex;
  align-content: center;
  justify-content: center;
}
.post-content {
  width: 800px;
  min-width: auto;
  min-height: 300px;
  border-radius: 10px;
  padding: 25px 5px 0px 10px;
}
.view-post {
  margin-bottom: 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
  float: right;
  padding-left: 5%;
  padding-right: 5%;
}
.delete-post {
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
.title-content {
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  margin-left: 15px;
  align-items: center;
}
</style>
