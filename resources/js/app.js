import './bootstrap';
import '../css/app.css';
import '@fortawesome/fontawesome-free/css/all.css';

import autoResize from './Directives/autoResize';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

import commandFormComponent from './Components/CommandFormComponent.vue';
import headerComponent from './Components/HeaderComponent.vue';
import searchbarComponent from './Components/SearchbarComponent.vue';
import resultsComponent from './Components/ResultsComponent.vue';
import authenticatedLayout from './Layouts/AuthenticatedLayout.vue';

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
        vueApp.component('searchbar-component', searchbarComponent);
        vueApp.component('results-component', resultsComponent);
        vueApp.component('authenticate-layout', authenticatedLayout);

        // Register any custom directives
        vueApp.directive('auto-resize', autoResize);

        // Mount the Vue app
        vueApp.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

