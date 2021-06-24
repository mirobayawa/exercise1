import { IPost } from '@/interfaces/post';
import { computed, ref } from 'vue';
import { posts } from '@/data/db.json';

export default function useLoadNewsFeed() {
  const postsList = ref<IPost[]>(posts);
  const reversePostsList = computed(() => postsList.value.slice(0).reverse());

  return {
    postsList,
    reversePostsList,
  };
}
