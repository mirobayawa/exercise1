import { IPost } from '@/interfaces/post';
import { Ref } from 'vue';
import { useToast } from 'primevue/usetoast';

export default function useEditPost(post: IPost, displayModal: Ref<boolean>) {
  const toast = useToast();
  const savePost = (newTitle: string, newMessage: string) => {
    if (newTitle === '') {
      newTitle = post.title;
    }
    if (newMessage === '') {
      newMessage = post.msg;
    }
    post.title = newTitle;
    post.msg = newMessage;

    displayModal.value = false;

    toast.add({
      severity: 'success',
      summary: 'Success!',
      detail: 'Message Edited!',
      life: 3000,
    });
  };
  return {
    savePost,
  };
}
