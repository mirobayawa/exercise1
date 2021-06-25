import { computed, Ref, ref } from 'vue';
import { posts } from '@/data/db.json';
import { IPost } from '@/interfaces/post';

export function useAddPost(title: Ref<string>, author: Ref<string>, msg: Ref<string>) {
  const postsList = ref<IPost[]>(posts);

  function addPost() {
    postsList.value.push({
      id: posts.length + 1,
      title: title.value,
      author: author.value,
      msg: msg.value,
    });
    console.log('id:', posts.length, 'title:', title.value,
      'author:', author.value, 'msg:', msg.value);
  }
  return {
    title,
    author,
    msg,
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
  const postsList = ref<IPost[]>(posts);

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

export function useLoadNewsFeed() {
  const postsList = ref<IPost[]>(posts);
  const reversePostsList = computed(() => postsList.value.slice(0).reverse());

  return {
    postsList,
    reversePostsList,
  };
}

export function useViewPost(id: number | undefined) {
  const postsList = ref<IPost[]>(posts);
  const post: IPost = postsList.value.find((item) => item.id === Number(id)) as IPost;

  return {
    post,
    postsList,
  };
}
