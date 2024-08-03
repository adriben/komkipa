<template>
    <div>
     <authenticate-layout class="header">
      <command-form-component :title="selectedCommand.title" :command="selectedCommand.command"></command-form-component>
      <searchbar-component @search="handleSearch"></searchbar-component>
      <results-component :commands="localCommands" @select-command="handleSelectCommand"></results-component>
    </authenticate-layout>
    </div>
  </template>

  <script>
  import axios from 'axios';

  export default {
    props: {
      commands: Array,
    },
    data() {
      return {
        selectedCommand: {
          title: "",
          command: "",
        },
        query: "",
        formData: {
          query: "",
        },
        localCommands: this.commands, // Create a local copy of commands
      };
    },
    watch: {
      commands(newCommands) {
        this.localCommands = newCommands;
      }
    },
    methods: {
      async handleSearch(query) {
        this.query = query;
        this.formData.query = query;
        console.log(this.formData);

        await axios.post(this.route("commandKeeperSearch"), this.formData)
          .then((response) => {
            if (Array.isArray(response.data)) {
              this.localCommands = response.data;
            } else {
              console.error('Unexpected response data format:', response.data);
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
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
        const headerHeight = document.querySelector('.border-b').offsetHeight;
        window.scrollTo({ top: headerHeight, behavior: 'smooth' });
      },
    },
  };
  </script>

  <style scoped>
  /* Your styles here */
  </style>
