<template>
  <div class="main">
    <div class="view p-card p-component">
      <div v-for="post in postDetails" :key="post.id" class="p-card-body">
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
          <Button class="edit-post p-button-raised p-button-primary" icon="pi pi-pencil" iconPos="right" label="Edit" @click="openModal"/>
          <Dialog class="modal p-fluid" header="Edit Post" v-model:visible="displayModal" :breakpoints="{'960px': '75vw'}"
           :style="{width: '50vw'}" :modal="true">
            <div class="dialog">
              <InputText class="input" v-model="title" :value="post.title" type="text" placeholder="Title" style="width"/>
              <br>
              <TextArea class="textarea" id="edit-field" v-model="msg" :value="post.msg" name="edit-field" :autoResize="true"
                rows="5" wrap="physical" cols="30"/>
            </div>
            <template #footer>
              <Button label="Save" icon="pi pi-check" iconPos="right" @click="savePost(title, msg)" autofocus />
              <Button label="Cancel" icon="pi pi-times" iconPos="right" @click="closeModal" class="p-button-text"/>
            </template>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IPost } from '@/interfaces/post';
import { posts } from '@/data/db.json';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import TextArea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import useEditPost from '@/use/useEditPost';
// import useViewPost from '@/use/useViewPost';

export default defineComponent({
  name: 'post-content',
  components: {
    Button,
    Dialog,
    TextArea,
    InputText
  },
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  setup(props) {
    const displayModal = ref(false);
    const title = ('');
    const msg = ('');

    let postsList = ref<IPost[]>(posts);
    const postDetails = postsList.value.filter(item => {
      return item.id == props.id
    })

    const savePost = useEditPost(postDetails, displayModal);

    const openModal = () => {
      displayModal.value = true;
    };
    const closeModal = () => {
      displayModal.value = false;
    };

    return {
      postDetails,
      displayModal,
      title,
      msg,
      openModal,
      closeModal,
      savePost: savePost.savePost,
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
