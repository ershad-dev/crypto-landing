<template>
  <section class="bitcoin-section">
    <div class="max-w-[1000px] mx-auto px-6">
      <div class="text-left">
        <h2 class="bitcoin-title">What is Bitcoin?</h2>
        
        <div class="bitcoin-content mt-8">
          <p class="content-subtitle">What is Bitcoin (BTC)?</p>
          
          <p class="text-desc inline">
            Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin continues to be the top cryptocurrency by market capitalization<span v-show="!isExpanded" class="font-bold">...</span>
          </p>

          <div class="expandable-content" :class="{ 'is-expanded': isExpanded }">
            <p class="text-desc inline">
              Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. Bitcoin recorded a new all-time high of $111,970 in May 2025, pushing the crypto market capitalization to an impressive $3.5 trillion.
            </p>
            <p class="text-desc mt-4 block">
              As the world's first cryptocurrency, Bitcoin has come a long way in terms of its value. Bitcoin crossed $108K, reaching an all-time high in December 2024.
            </p>
          </div>
        </div>

        <div class="mt-4 text-left">
          <button @click="isExpanded = !isExpanded" class="show-more-btn">
            {{ isExpanded ? 'Show Less' : 'Show More' }}
            <i :class="['fa-solid ml-1 text-[10px]', isExpanded ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// مدیریت وضعیت باز و بسته بودن در تمام دیوایس‌ها
const isExpanded = ref(false)
</script>

<style scoped>
/* سازگاری کامل با تم لایت و دارک */
.bitcoin-section {
  @apply py-16 md:py-24 transition-colors duration-500;
  background-color: var(--bg-color);
}

.bitcoin-title {
  @apply text-3xl md:text-4xl font-bold;
  color: var(--text-color);
}

.content-subtitle {
  @apply font-bold mb-4;
  color: var(--text-color);
}

.text-desc {
  @apply text-[15px] md:text-[16px] leading-[1.8] font-normal;
  color: var(--secondary-text);
}

.show-more-btn {
  @apply text-[#f0b90b] font-bold text-sm transition-all hover:opacity-80 flex items-center cursor-pointer;
  background: none;
  border: none;
  padding: 0;
}

/* بخش تاشو */
.expandable-content {
  @apply overflow-hidden transition-all duration-500 max-h-0 opacity-0;
}

/* وقتی کلاس is-expanded اضافه می‌شود، محتوا باز می‌شود */
.expandable-content.is-expanded {
  @apply max-h-[1000px] opacity-100 mt-2;
  /* اضافه کردن یک انیمیشن نرم برای ورود متن */
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* حذف تنظیمات قبلی که در دسکتاپ همیشه نمایش می‌داد */
@media (min-width: 1024px) {
  /* دیگر نیازی به نمایش اجباری در دسکتاپ نیست چون دکمه فعال است */
}
</style>