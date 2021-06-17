import { IPost } from '@/interfaces/post';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { posts } from '@/data/db.json';

export default function useAddPost() {
  const title = ref('');
  const author = ref('');
  const msg = ref('');
  const toast = useToast();

  const postsList = ref<IPost[]>(posts);

  function addPost() {
    if (title.value && author.value && msg.value !== '') {
      postsList.value.push(
        {
          id: posts.length + 1,
          title: title.value,
          author: author.value,
          msg: msg.value,
        },
      );
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
    console.log('id:', posts.length, 'title:', title.value,
      'author:', author.value, 'msg:', msg.value);
  }
  return {
    title,
    author,
    msg,
    postsList,
    addPost,
  };
}
