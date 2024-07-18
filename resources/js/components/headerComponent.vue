<template>
    <header class="bg-blue-600 text-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo or Branding -->
        <div class="flex items-center">
            <img src="assets/images/logo.png" alt="Command Keeper Logo"  class="w-32 h-auto">
          <h1 class="text-xl font-bold">komkipa</h1>
        </div>

        <!-- Navigation Links -->
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-white hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-200">Services</a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-200">Contact</a>
            </li>
          </ul>
        </nav>

        <!-- User Actions or Account -->
        <div class="flex items-center space-x-4">
          <button class="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-100 focus:outline-none">Sign In</button>
          <button class="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-700 focus:outline-none">Sign Up</button>
        </div>
      </div>
    </header>
  </template>

  <script>
  export default {
    // Add any logic or data properties as needed
  };
  </script>

  <style scoped>
  /* Add scoped styles for specific header component styles */
  </style>
