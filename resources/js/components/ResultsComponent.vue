<template>
    <div class="mt-4">
      <h2 class="text-lg font-semibold text-center">Commands List</h2>
      <ul class="list-none">
        <li
          v-for="command in commands"
          :key="command.id"
          class="p-4 my-2 bg-gray-100 border rounded-lg cursor-pointer hover:bg-gray-200"
          @click="selectCommand(command)"
        >
          <div class="text-center">
            <p class="font-bold">{{ command.title }}</p>
            <p>{{ command.command }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    name: 'ResultsComponent',
    props: {
      commands: {
        type: Array,
        required: true,
      },
    },
    methods: {
      selectCommand(command) {
        this.$emit('select-command', command);
      },
    },
  };
  </script>

  <style scoped>
  /* Add any additional styling here */
  </style>
