<template>
    <div class="container mx-auto p-4">
      <div
        v-if="message"
        :class="messageType === 'success' ? 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative' : 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'"
        role="alert"
      >
        <strong class="font-bold">{{ messageType === 'success' ? 'Success' : 'Error' }}!</strong>
        <span class="block sm:inline">{{ message }}</span>
      </div>
      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded-md p-8">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input
            type="text"
            id="title"
            v-model="formData.title"
            name="title"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
        </div>
        <div class="mb-4">
          <label for="command" class="block text-gray-700 text-sm font-bold mb-2">Command:</label>
          <textarea
            id="command"
            v-model="formData.command"
            name="command"
            rows="4"
            v-auto-resize
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style="resize: vertical;"
          ></textarea>
        </div>
        <div class="flex items-center justify-center">
          <button
            type="submit"
            class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </template>

  <script>
  import axios from "axios";

  export default {
    name: "CommandFormComponent",
    props: {
      title: String,
      command: String,
    },
    data() {
      return {
        formData: {
          title: this.title || "",
          command: this.command || "",
        },
        message: "",
        messageType: "",
      };
    },
    watch: {
      title(newTitle) {
        this.formData.title = newTitle;
      },
      command(newCommand) {
        this.formData.command = newCommand;
      },
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post(
            this.route("commandKeeper"),
            this.formData
          );
          this.message = "Form submitted successfully!";
          this.messageType = "success";
          this.resetForm();
        } catch (error) {
          this.message = "Failed to submit the form.";
          this.messageType = "error";
        }
      },
      route(name) {
        const routes = {
          commandKeeper: "/commandKeeper",
        };
        return routes[name];
      },
      resetForm() {
        this.formData.title = "";
        this.formData.command = "";
      },
    },
  };
  </script>

  <style scoped>
  /* Add any additional custom styles here if needed */
  </style>
