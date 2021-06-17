<template>
  <div class="main">
    <div class="postfield p-card p-component">
      <div class="p-card-body">
        <div class="p-card-title">
          Whats on your mind?
        </div>
        <div class="p-card-content">
          <InputText class="input" v-model="title" type="text" placeholder="Title" style="width"/>
          <InputText class="input" v-model="author" type="text" placeholder="Author" style="width"/>
          <TextArea class="textarea" v-model="msg" id="postfield" name="postfield" :autoResize="true"
            rows="5" cols="30" placeholder="Whats on your mind..."/>
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
import { defineComponent, ref } from 'vue';
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
h1 {
  font-size: 40pt;
}
h3 {
  margin: 40px 0 0;
}
.main {
  display: flex;
  align-content: center;
  justify-content: center;
}
.postfield {
  // margin: auto;
  width: 800px;
  min-height: 370px;
  border-radius: 10px;
  padding: 5px;
}
.textarea {
  min-width: 60%;
  border-color: lightgray;
}
.input {
  min-width: 60%;
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
