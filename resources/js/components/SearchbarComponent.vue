<template>
    <div class="relative w-full max-w-md mx-auto">
      <input
        type="text"
        class="w-full px-4 py-2 text-gray-900 bg-white border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search..."
        v-model="query"
      />
      <button
        class="absolute top-0 right-0 px-4 py-2 text-white bg-green-500 rounded-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        @click="search"
      >
        <i class="fas fa-search"></i>
      </button>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        query: '',
      };
    },
    methods: {
      search() {
        this.$emit('search', this.query);
      },
    },
  };
  </script>
