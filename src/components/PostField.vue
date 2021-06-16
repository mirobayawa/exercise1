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
          <Button label="Post" class="post-btn p-button-raised" icon="pi pi-send" iconPos="right" type="button" @click="addPost()"></Button>
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
import { IPost } from '@/interfaces/post';
import { posts } from '@/data/db.json';
import { useToast } from "primevue/usetoast";

export default defineComponent({
  name: 'PostField',
  components: {
    InputText,
    Button,
    TextArea,
    Toast,
  },
  setup() {
    const title = ref("");
    const author = ref("");
    const msg = ref("");
    const toast = useToast();

    let posts_list = ref<IPost[]>(posts);

    function addPost() {
      if (title.value && author.value && msg.value !== "") {
          posts_list.value.push(
          {
            id: posts.length + 1, title: title.value,
            author: author.value, msg: msg.value
          }
        );
        toast.add({severity:'success', summary: 'Success!', detail:'Message Posted!', life: 3000});
      } else {
        toast.add({severity:'error', summary: 'Missing Details!', detail:'Please complete the form and try again.', life: 3000});
      }
      console.log("id:", posts.length, "title:", title.value,
        "author:", author.value, "msg:", msg.value);
    }
    return {
      title,
      author,
      msg,
      posts_list,
      addPost
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
