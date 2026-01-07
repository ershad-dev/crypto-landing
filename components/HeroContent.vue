<template>
  <div class="hero-content-root">
    
    <h1 class="hero-title">
      <span class="block md:hidden">
        Buy, Trade & Earn <br>
        Bitcoin and 100+ <br>
        Cryptocurrencies
      </span>

      <span class="hidden md:block">
        Buy, Trade & Earn Bitcoin <br>
        and 100+ <br>
        Cryptocurrencies
      </span>
    </h1>
    
    <p class="hero-subtitle">
      Secure platform to trade Bitcoin, Ethereum and altcoins with low fees
    </p>
    
    <div class="form-container">
      <div class="flex flex-col lg:flex-row gap-3">
        
        <input 
          type="email" 
          placeholder="Email address" 
          class="hero-input w-full lg:w-auto lg:flex-1"
        >

        <button class="btn-yellow btn-hero-cta w-full lg:w-auto">
          Join & Earn $25 Bonus
        </button>

        <button class="google-signup-btn w-full lg:w-auto lg:px-6 whitespace-nowrap">
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" class="w-5" alt="Google">
          <span class="lg:hidden xl:inline">Sign Up with Google</span>
          <span class="hidden lg:inline xl:hidden">Google</span>
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.hero-content-root {  
  @apply lg:text-left pt-0 md:-mt-20 leading-tight; 
  animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-title {
  @apply text-2xl md:text-3xl lg:text-4xl font-[700] leading-tight mb-5 transition-colors duration-500;
  /* هماهنگی با متن اصلی تم */
  color: var(--text-color);
}

.hero-subtitle {
  @apply text-lg md:text-xl mb-10 max-w-2xl mx-auto md:mx-0 transition-colors duration-500;
  /* هماهنگی با متن ثانویه تم */
  color: var(--secondary-text);
}

.form-container {
  @apply max-w-2xl mx-auto lg:mx-0 w-full;
}

/* استایل اینپوت با پشتیبانی از تم */
.hero-input {
  @apply flex-1 px-4 py-3.5 rounded-lg border outline-none transition-all;
  background-color: var(--input-bg, var(--bg-color));
  border-color: var(--border-color);
  color: var(--text-color);
}

.hero-input:focus {
  /* استفاده از رنگ زرد برند برای فوکوس */
  border-color: #f0b90b;
}

.btn-hero-cta {
  @apply whitespace-nowrap shadow-lg hover:scale-[1.02] active:scale-95 transition-all font-bold px-8;
  /* سایه دکمه را در حالت دارک کمی ملایم‌تر نگه می‌داریم */
  box-shadow: 0 10px 15px -3px rgba(240, 185, 11, 0.2);
  background-color: #f0b90b;
  color: #000;
}

/* دکمه گوگل */
.google-signup-btn {
  @apply flex items-center justify-center gap-3 py-3 rounded-lg border font-semibold transition-all;
  background-color: transparent;
  border-color: var(--border-color);
  color: var(--text-color);
  @apply lg:min-w-fit;
}

.google-signup-btn:hover {
  /* استفاده از رنگ پس‌زمینه هوور تم */
  background-color: var(--hover-bg, rgba(0,0,0,0.05));
}

@keyframes heroReveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>