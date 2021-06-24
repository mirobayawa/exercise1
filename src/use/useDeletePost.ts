import { ref } from 'vue';
import { IPost } from '@/interfaces/post';
import { useConfirm } from 'primevue/useconfirm';
import { posts } from '@/data/db.json';

export default function useDeletePost(id: number) {
  const confirm = useConfirm();

  const postsList = ref<IPost[]>(posts);

  const confirm2 = (event: any) => confirm.require({
    target: event.currentTarget,
    group: 'popup',
    message: 'Do you want to delete this record?',
    icon: 'pi pi-exclamation-triangle',
    acceptClass: 'p-button-danger',
    accept: () => {
      postsList.value.forEach((post) => {
        if (post.id === Number(id)) {
          postsList.value.splice(postsList.value.indexOf(post), 1);
        }
      });
      // change to composable
      console.log(postsList.value);
    },
  });
  return {
    confirm2,
  };
}
