<template>
  <div class="hero-content-root">
    
    <h1 class="hero-title">
      Buy, Trade & Earn Bitcoin <br class="hidden md:block"> 
      and 100+ <span class="text-accent">Cryptocurrencies</span>
    </h1>
    
    <p class="hero-subtitle">
      Secure platform to trade Bitcoin, Ethereum and altcoins with low fees
    </p>
    
    <div class="form-container">
      <div class="flex flex-col sm:flex-row gap-3 mb-4">
        <input 
          type="email" 
          placeholder="Email address" 
          class="hero-input"
        >
        <button class="btn-yellow btn-hero-cta">
          Join & Earn $25
        </button>
      </div>

      <div class="hero-divider">
        <div class="divider-line"></div>
        <span class="divider-text">or</span>
        <div class="divider-line"></div>
      </div>

      <button class="google-signup-btn">
        <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" class="w-5" alt="Google">
        Sign Up with Google
      </button>
    </div>

  </div>
</template>

<style scoped>
/* انیمیشن بهینه شده برای شروع صفحه */
.hero-content-root {
  @apply text-center lg:text-left;
  animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 transition-colors duration-500;
  color: var(--text-color);
}

.text-accent {
  color: var(--accent-hover);
}

.hero-subtitle {
  @apply text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 transition-colors duration-500;
  color: var(--secondary-text);
}

.form-container {
  @apply max-w-2xl mx-auto lg:mx-0;
}

/* استایل اینپوت  */
.hero-input {
  @apply flex-1 px-4 py-3.5 rounded-lg border outline-none transition-all;
  background-color: var(--input-bg);
  border-color: var(--border-color);
  color: var(--text-color);
}

.hero-input:focus {
  border-color: var(--accent-hover);
}

.btn-hero-cta {
  @apply whitespace-nowrap shadow-lg hover:scale-[1.02] active:scale-95 transition-all font-bold px-8;
  box-shadow: 0 10px 15px -3px rgba(240, 185, 11, 0.2);
}

.hero-divider {
  @apply relative flex items-center justify-center my-6;
}

.divider-line {
  @apply flex-grow border-t;
  border-color: var(--border-color);
}

.divider-text {
  @apply flex-shrink mx-4 text-sm;
  color: var(--secondary-text);
}

/* دکمه گوگل */
.google-signup-btn {
  @apply w-full flex items-center justify-center gap-3 py-3 rounded-lg border font-semibold transition-all;
  background-color: transparent;
  border-color: var(--border-color);
  color: var(--text-color);
}

.google-signup-btn:hover {
  background-color: var(--border-color);
}

@keyframes heroReveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>