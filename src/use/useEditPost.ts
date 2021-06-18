import { IPost } from '@/interfaces/post';
import { Ref } from 'vue';

export default function useEditPost(postDetails: Array<IPost>, displayModal: Ref<boolean>) {
  const savePost = (newTitle: string, newMessage: string) => {
    postDetails.forEach((detail) => {
      if (newTitle === '') {
        newTitle = detail.title;
      } else if (newMessage === '') {
        newMessage = detail.msg;
      }
      detail.title = newTitle;
      detail.msg = newMessage;
    });
    displayModal.value = false;
  };
  return {
    savePost,
  };
}
