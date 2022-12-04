import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/base.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeftLong, faArrowRightLong, faMapLocationDot, faCalendarDays, faNewspaper, faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faArrowLeftLong, faArrowRightLong, faMapLocationDot, faCalendarDays, faNewspaper, faEnvelope)

const app = createApp(App);

app.use(router);

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
