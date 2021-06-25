<template>
  <div class="main">
    <div class="postfield p-card p-component">
      <div class="p-card-body">
        <div class="p-card-title">
          Whats on your mind?
        </div>
        <div class="p-card-content" style="display: flex; flex-direction: column; align-items: center;">
          <span class="p-float-label" style="width: 60%;">
            <InputText id="title" class="input-title" v-model="title" type="text"/>
            <label for="title">Title</label>
          </span>
          <span class="p-float-label" style="width: 60%;">
          <InputText id="author" class="input-author" v-model="author" type="text" />
            <label for="author">Author</label>
          </span>
          <span class="p-float-label" style="width: 60%;">
          <TextArea id="message" class="textarea" v-model="msg" name="postfield" :autoResize="false"
            rows="6" cols="50" />
            <label for="message">Whats on your mind...</label>
          </span>
          <Button label="Post" class="post-btn p-button-raised" icon="pi pi-send" iconPos="right"
            type="button" @click="addPost()"/>
          <Toast position="top-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import TextArea from 'primevue/textarea';
import Toast from 'primevue/toast';
import { useAddPost } from '@/use/use-post';
import { useToast } from 'primevue/usetoast';

export default defineComponent({
  name: 'PostField',
  components: {
    InputText,
    Button,
    TextArea,
    Toast,
  },
  setup() {
    const title = ref('');
    const author = ref('');
    const msg = ref('');

    const toast = useToast();
    const add_post = useAddPost(title, author, msg);

    function addPost() {
      if (title.value && author.value && msg.value !== '') {
        add_post.addPost();
        toast.add({
          severity: 'success',
          summary: 'Success!',
          detail: 'Message Posted!',
          life: 3000,
        });
      } else {
        toast.add({
          severity: 'error',
          summary: 'Missing Details!',
          detail: 'Please complete the form and try again.',
          life: 3000,
        });
      }
    }

    return {
      addPost,
      title,
      author,
      msg,
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  display: flex;
  align-content: center;
  justify-content: center;
}
.postfield {
  width: 800px;
  min-width: auto;
  min-height: 300px;
  border-radius: 10px;
}
.textarea {
  min-width: 40%;
  width: 100%;
  border-color: lightgray;
}
.input-title {
  min-width: 40%;
  width: 100%;
  margin-bottom: 10px;
  border-color: lightgray;
}
.input-author {
  min-width: 40%;
  width: 100%;
  margin-bottom: 10px;
  border-color: lightgray;
}
.post-btn {
  min-width: auto;
  padding-right: 15%;
  padding-left: 15%;
  margin-top: 10px;
  border-radius: 10px;
}
</style>
