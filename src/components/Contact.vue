<template>
  <section id="contact" class="px-4 sm:px-6 md:px-8 py-10 sm:py-12 max-w-lg md:max-w-3xl md:mx-auto text-center sm:text-left">
    <div class="max-w-6xl text-left">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl font-bold  mb-3 py-6">Get In Touch</h2>
      <p class="text-gray-600 text-sm sm:text-base max-w-2xl mb-10">
        Whether you’re launching a product, scaling a startup, or need a reliable developer to bring ideas to life. I’m here to help. I partner with teams and founders to build clean, scalable, and thoughtful solutions.

If you feel we could create something impactful together, drop a message below. I’d love to hear from you.
      </p>
      <!-- Toast Notification -->
<div
  v-if="toast.show"
  :class="[
    'fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white shadow-lg z-50 transition-all duration-300',
    toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
  ]"
>
  {{ toast.message }}
</div>

      <!-- Contact Form -->
      <form
        action="https://formspree.io/f/xrbkolqy"
        method="POST"
        @submit.prevent="handleSubmit"
        class="space-y-6 max-w-3xl mx-auto"
      >
        <div class="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Email Address"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Your message here..."
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
        ></textarea>

        <!-- Optional Redirect 
        <input type="hidden" name="_redirect" value="https://yourportfolio.com/thank-you" />
        -->

        <!-- Send Button -->
        <!-- Send Button -->
<button
  type="submit"
  :disabled="loading"
  class="relative flex items-center justify-center gap-2 text-gray-800 w-full py-4 rounded-xl
         bg-[url('/herobg.png')] bg-cover bg-center shadow-lg
         hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100"
>

  <!-- Spinner (visible only when loading) -->
  <svg
    v-if="loading"
    class="animate-spin h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none" viewBox="0 0 24 24"
  >
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
  </svg>

  <!-- Button text (hide while loading if you like) -->
  <span v-if="!loading">Send&nbsp;Message</span>
  <CheckCircleIcon v-else class="w-5 h-5 text-white hidden"/> <!-- keeps height consistent -->
</button>

      </form>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { CheckCircleIcon } from '@heroicons/vue/24/solid';

const toast = ref({ show: false, message: '', type: 'success' });
const loading = ref(false);                      // NEW
const successSound = new Audio('/sounds/success-chime.mp3'); // NEW

function showToast(msg, type = 'success') {
  toast.value = { show: true, message: msg, type };
  if (type === 'success') successSound.play();   // play the chime
  setTimeout(() => (toast.value.show = false), 4000);
}

async function handleSubmit(e) {
  const form = e.target;
  const formData = new FormData(form);
  loading.value = true;                          // start spinner

  try {
    const res = await fetch('https://formspree.io/f/xrbkolqy', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    });

    if (res.ok) {
      showToast('Message sent successfully!', 'success');
      form.reset();
    } else {
      showToast('Something went wrong. Please try again.', 'error');
    }
  } catch {
    showToast('Failed to connect. Please check your internet.', 'error');
  } finally {
    loading.value = false;                       // stop spinner
  }
}
</script>
