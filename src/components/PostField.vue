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
          <Button label="Post" class="post-btn p-button-raised" icon="pi pi-send" iconPos="right" type="button" @click="addPost()"/>
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
// import { posts } from '@/data/db.json';

export default defineComponent({
  name: 'PostField',
  components: {
    InputText,
    Button,
    TextArea,
  },
  setup() {


    // const title = ref("");
    // const author = ref("");
    // const msg = ref("");

    // function addPost() {
    //   console.warn("function called", title.value, author.value, msg.value);
    //   const post = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       title: title.value,
    //       author: author.value,
    //       msg: msg.value,
    //     }),
    //   };
    //   if (msg.value !== "") {
    //     fetch("http://localhost:3000/posts", post)
    //     .then(response => response.json())
    //     window.location.reload(true);
    //   }
    // }
    // return {
    //   title,
    //   author,
    //   msg,
    //   addPost
    // }
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
  width: 800px;
  height: 355px;
  border-radius: 10px;
}
.textarea {
  width: 60%;
  margin-bottom: 10px;
  border-color: lightgray;
}
.input {
  width: 60%;
  margin-bottom: 10px;
  border-color: lightgray;
}
.post-btn {
  width: auto;
  width: auto;
  padding-right: 15%;
  padding-left: 15%;
  border-radius: 10px;
}
.p-inputtext:enabled:hover {
    border-color: gray;
}
</style>
