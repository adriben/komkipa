<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="formData.title" name="title">
      </div>
      <div>
        <label for="command">Command:</label>
        <textarea id="command" v-model="formData.command" name="command" rows="4" cols="50"></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </template>

  <script>
  export default {
    data() {
      return {
        formData: {
          title: '',
          command: ''
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post(this.route('/commandKeeper'), this.formData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },
      route(name) {
        const routes = {
          commandKeeper: '/commandKeeper'
        };
        return routes[name];
      }
    }
  };
  </script>

  <style scoped>
  /* Add your custom styles here */
  </style>
