<template>
    <div>
      <header-component class="header"></header-component>
      <command-form-component :title="selectedCommand.title" :command="selectedCommand.command"></command-form-component>
      <searchbar-component @search="handleSearch"></searchbar-component>
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
        query : "",
        formData: {
        query: this.query || "",
        },
      };
    },
    methods: {
      async handleSearch(query) {
        this.query = query
        try {
            console.log(this.route("commandKeeperSearch"));
          await axios.post(
            this.route("commandKeeperSearch"),
            this.formData
          );
        } catch (error) {

          console.log(error)
        }
      },
      route(name) {
        const routes = {
          commandKeeperSearch: "/commandKeeper/search",
        };
        return routes[name];
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
