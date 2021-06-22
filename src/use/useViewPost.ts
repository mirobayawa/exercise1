/* eslint eqeqeq: "off" */
import { IPost } from '@/interfaces/post';
import { ref } from 'vue';
import { posts } from '@/data/db.json';

export default function useViewPost(id: number | undefined) {
  const postsList = ref<IPost[]>(posts);
  const post: IPost = postsList.value.find((item) => item.id == id) as IPost;

  return {
    post,
    postsList,
  };
}
