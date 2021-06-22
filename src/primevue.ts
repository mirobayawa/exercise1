import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import 'primevue/resources/themes/saga-green/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons

import { App } from 'vue';

export default {
  install: (app: App):void => {
    app.use(PrimeVue);
    app.use(ToastService);
    app.use(ConfirmationService);
  },
};
