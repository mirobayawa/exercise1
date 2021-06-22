import { IPost } from '@/interfaces/post';
import { Ref } from 'vue';

export default function useEditPost(post: IPost, displayModal: Ref<boolean>) {
  const savePost = (newTitle: string, newMessage: string) => {
    if (newTitle === '') {
      newTitle = post.title;
    } else if (newMessage === '') {
      newMessage = post.msg;
    }
    post.title = newTitle;
    post.msg = newMessage;

    displayModal.value = false;
  };
  return {
    savePost,
  };
}
