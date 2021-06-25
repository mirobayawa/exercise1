<template>
  <Button class="edit-post p-button-raised p-button-primary" icon="pi pi-pencil" iconPos="right" label="Edit" @click="openModal"/>
  <Dialog class="modal p-fluid" header="Edit Post" v-model:visible="displayModal" :breakpoints="{'960px': '75vw'}"
    :style="{width: '50vw'}" :modal="true">
    <div class="dialog">
      <InputText class="input" v-model="title" :value="post.title" type="text" placeholder="Title" style="width"/>
      <br>
      <TextArea class="textarea" id="edit-field" v-model="msg" :value="post.msg" name="edit-field" :autoResize="true"
        rows="5" wrap="physical" cols="30" />
    </div>
    <template #footer>
      <Button label="Save" icon="pi pi-check" iconPos="right" @click="savePost(title, msg)" autofocus />
      <Button label="Cancel" icon="pi pi-times" iconPos="right" @click="closeModal" class="p-button-text"/>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useEditPost } from '@/use/use-post';
import { useViewPost } from '@/use/use-post';
import { useToast } from "primevue/usetoast";
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import TextArea from 'primevue/textarea';
import Button from 'primevue/button';
import PageNotFound from '@/views/page-not-found.vue';
import Toast from 'primevue/toast';

export default defineComponent ({
  name: 'EditPost',
  components: {
    InputText,
    Button,
    Dialog,
    TextArea,
    PageNotFound,
    Toast,
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
    const toast = useToast();

    const viewPost = useViewPost(props.id);
    const save_post = useEditPost(viewPost.post, displayModal);

    function savePost(title: string, msg: string) {
      save_post.savePost(title, msg);
      toast.add({
        severity: 'success',
        summary: 'Success!',
        detail: 'Message Edited!',
        life: 3000,
      });
    }

    const openModal = () => {
      displayModal.value = true;
    }
    const closeModal = () => {
      displayModal.value = false;
    }

    return {
      displayModal,
      title,
      msg,
      post: viewPost.post,
      savePost,
      openModal,
      closeModal,
    };
  }
});
</script>

<style scoped lang="scss">
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