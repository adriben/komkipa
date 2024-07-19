export default {
    beforeMount(el) {
      // Ensure the initial height is calculated correctly
      requestAnimationFrame(() => {
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight + 2}px`; // Add a small buffer to avoid initial small height
      });

      el.addEventListener('input', () => {
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight + 2}px`; // Adjust height dynamically
      });
    },
    updated(el) {
      // Ensure the height is recalculated after updates
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight + 2}px`; // Add a small buffer
    },
  };
