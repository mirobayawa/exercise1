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
      postsList.value.splice(id - 1, 1); // change to composable
    },
  });
  return {
    confirm2,
  };
}
