import './bootstrap';
import '../css/app.css';
import autoResize from './directives/autoResize';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

import commandFormComponent from './components/commandFormComponent.vue';
import headerComponent from './components/headerComponent.vue';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
// Create Inertia app
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) });

        vueApp.use(plugin);
        vueApp.use(ZiggyVue);

        // Register your custom components
        vueApp.component('command-form-component', commandFormComponent);
        vueApp.component('header-component', headerComponent);

        // Register any custom directives
        vueApp.directive('auto-resize', autoResize);

        // Mount the Vue app
        vueApp.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
const bladeApp = createApp({});
bladeApp.component('command-form-component', commandFormComponent);
bladeApp.component('header-component', headerComponent);
bladeApp.mount('#app');
