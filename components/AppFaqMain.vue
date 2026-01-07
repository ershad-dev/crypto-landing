<template>
  <section id="faq" class="faq-section">
    <div class="faq-container">
      
      <h2 class="faq-main-title">
        Frequently Asked Questions About Bitcoin
      </h2>
      
      <AppFaqData v-slot="{ faqs }">
        <div class="faq-list">
          <AppFaqItem 
            v-for="(faq, index) in faqs" 
            :key="index"
            :question="faq.question"
            :answer="faq.answer"
            :is-open="activeIndex === index"
            @toggle="toggleFaq(index)"
          />
        </div>
      </AppFaqData>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.faq-section {
  /* استفاده از متغیر تم برای پس‌زمینه */
  @apply w-full py-16 md:py-24 transition-colors duration-500;
  background-color: var(--bg-color);
}

.faq-container {
  /* مدیریت عرض کانتینر در یک کلاس واحد */
  @apply w-full px-4 md:px-10 lg:px-16 mx-auto;
}

.faq-main-title {
  @apply text-2xl md:text-3xl font-bold text-left mb-10 tracking-tight;
  color: var(--text-color);
}

.faq-list {
  /* تنظیم فاصله بین آیتم‌ها مطابق تصویر */
  @apply flex flex-col gap-2 md:gap-4 w-full;
}

/* ریسپانسیو کردن تیتر برای موبایل‌های کوچک بدون استفاده از important */
@media (max-width: 480px) {
  .faq-main-title {
    @apply text-xl mb-6;
  }
}
</style>