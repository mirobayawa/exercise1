import { computed, Ref } from 'vue';
import { IPost } from '@/interfaces/post';
import useStore from '@/use/use-store';

export function useLoadNewsFeed() {
  const { postsList } = useStore();
  const reversePostsList = computed(() => postsList.value.slice(0).reverse());

  return {
    reversePostsList,
  };
}

export function useViewPost(id: number | undefined) {
  const { postsList } = useStore();
  const post: IPost = postsList.value.find((item) => item.id === Number(id)) as IPost;

  return {
    post,
  };
}

export function useAddPost(title: Ref<string>, author: Ref<string>, msg: Ref<string>) {
  const { postsList } = useStore();

  function addPost() {
    postsList.value.push({
      id: postsList.value.length + 1,
      title: title.value,
      author: author.value,
      msg: msg.value,
    });
  }

  return {
    addPost,
  };
}

export function useEditPost(post: IPost, displayModal: Ref<boolean>) {
  function savePost(newTitle: string, newMessage: string) {
    if (newTitle === '') {
      newTitle = post.title;
    }
    if (newMessage === '') {
      newMessage = post.msg;
    }
    post.title = newTitle;
    post.msg = newMessage;

    displayModal.value = false;
  }

  return {
    savePost,
  };
}

export function useDeletePost(id: number) {
  const { postsList } = useStore();

  function deletePost() {
    postsList.value.forEach((post) => {
      if (post.id === id) {
        postsList.value.splice(postsList.value.indexOf(post), 1);
      }
    });
  }

  return {
    deletePost,
  };
}
