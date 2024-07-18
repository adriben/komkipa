// resources/js/autoResize.js
export default {
    beforeMount(el) {
      el.style.overflow = 'hidden';
      el.style.resize = 'none';
      el.addEventListener('input', autoResize);

      function autoResize() {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
      }
    },
    unmounted(el) {
      el.removeEventListener('input', autoResize);
    }
  };
