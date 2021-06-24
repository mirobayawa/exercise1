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
          <br>
          <Button label="Post" class="post-btn p-button-raised" icon="pi pi-send" iconPos="right"
            type="button" @click="addPost()"/>
          <Toast position="top-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import TextArea from 'primevue/textarea';
import Toast from 'primevue/toast';
import useAddPost from '@/use/useAddPost';

export default defineComponent({
  name: 'PostField',
  components: {
    InputText,
    Button,
    TextArea,
    Toast,
  },
  setup() {
    const addPost = useAddPost();

    return {
      addPost: addPost.addPost,
      title: addPost.title,
      author: addPost.author,
      msg: addPost.msg,
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
  margin-top: 2%;
  border-radius: 10px;
}
</style>
