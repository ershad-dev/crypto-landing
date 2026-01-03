<template>
  <section id="faq" class="faq-section">
    <div class="max-w-[900px] mx-auto px-6">
      
      <h2 class="faq-main-title">
        Frequently Asked <span class="text-accent">Questions</span>
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

const activeIndex = ref(null)

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.faq-section {
  @apply py-20 md:py-32 transition-colors duration-300;
  background-color: var(--bg-color);
}

.faq-main-title {
  @apply text-3xl md:text-5xl font-[900] text-center mb-16 tracking-tight;
  color: var(--text-color);
}

.text-accent {
  color: var(--accent-hover);
}

.faq-list {
  @apply flex flex-col gap-4;
}

/* بهینه‌سازی برای موبایل‌های بسیار کوچک */
@media (max-width: 375px) {
  .faq-main-title {
    @apply text-2xl;
  }
}
</style>