import './bootstrap';
import { createApp } from 'vue';
import autoResize from './directives/autoResize';
/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import commandFormComponent from './components/commandFormComponent.vue';
app.component('command-form-component', commandFormComponent);
app.directive('auto-resize', autoResize);


app.mount('#app');
