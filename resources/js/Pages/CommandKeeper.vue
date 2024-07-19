<template>
    <div>
      <header-component class="header"></header-component>
      <command-form-component :title="selectedCommand.title" :command="selectedCommand.command"></command-form-component>
      <search-bar @search="handleSearch"></search-bar>
      <results-component :commands="commands" @select-command="handleSelectCommand"></results-component>
    </div>
  </template>

  <script>
  export default {
    props: {
      commands: Array,
    },
    data() {
      return {
        selectedCommand: {
          title: '',
          command: '',
        },
      };
    },
    methods: {
      handleSearch(query) {
        // Handle the search logic here, e.g., filtering commands
        console.log('Search query:', query);
      },
      handleSelectCommand(command) {
        this.selectedCommand = { ...command };
        this.scrollToTop();
      },
      scrollToTop() {
        const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({ top: headerHeight, behavior: 'smooth' });
    },
    },
  };
  </script>

  <style scoped>
  /* Your styles here */
  </style>
