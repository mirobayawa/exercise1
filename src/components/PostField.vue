<template>
  <div class="main">
    <div class="postfield p-card p-component">
      <div class="p-card-body">
        <div class="p-card-title">
          Whats on your mind?
        </div>
        <div class="p-card-content">
          <InputText class="input-title" v-model="title" type="text" placeholder="Title" style="width"/>
          <InputText class="input-author" v-model="author" type="text" placeholder="Author" style="width"/>
          <TextArea class="textarea" v-model="msg" id="postfield" name="postfield" :autoResize="false"
            rows="6" cols="50" placeholder="Whats on your mind..."/>
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
  width: 60%;
  border-color: lightgray;
}
.input-title {
  min-width: 40%;
  width: 60%;
  margin-bottom: 10px;
  border-color: lightgray;
}
.input-author {
  min-width: 30%;
  width: 60%;
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
.p-inputtext:enabled:hover {
  border-color: gray;
}
</style>
