<template>
  <div class="main">
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
      <ConfirmPopup></ConfirmPopup>
      <div style="margin-top:30px">
        <Button class="delete-post p-button-raised p-button-danger" label="Delete" @click="confirm2"/>
        <Button class="view-post p-button-raised p-button-secondary" label="View" @click="viewPost(posts.id)"/>
        <ConfirmPopup group="popup"></ConfirmPopup>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import Button from 'primevue/button';
import { IPost } from '@/interfaces/post';
import { posts } from '@/data/db.json';
import router from '@/router';
import routeNames from '@/enums/route_names';
import ConfirmPopup from 'primevue/confirmpopup';
import { useConfirm } from "primevue/useconfirm";

export default defineComponent({
  name: 'PostsComponent',
  components: {
    Button,
    ConfirmPopup,
  },
  props: {
    posts: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  setup(props) {
    const confirm = useConfirm();

    let posts_list = ref<IPost[]>(posts);

    function viewPost(id: number) {
      return router.push({name: routeNames.viewPost, params: {id: id}});
    }
    const confirm2 = (event: any) => {
      confirm.require({
        target: event.currentTarget,
        group: 'popup',
        message: 'Do you want to delete this record?',
        icon: 'pi pi-exclamation-triangle',
        acceptClass: 'p-button-danger',
        accept: () => {
          posts_list.value.splice(props.posts.id - 1, 1);
        },
        reject: () => {

        }
      });
    };
    return {
      viewPost,
      confirm2,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
.post-content {
  // margin: auto;
  flex-flow: column wrap;
  width: 800px;
  min-height: 300px;
  border-radius: 10px;
  padding: 5px;
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
.title-content {
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  align-content: flex-start;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
