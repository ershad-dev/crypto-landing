<template>
  <div class="faq-item" :class="{ 'is-active': isOpen }">
    <div 
      class="flex justify-between items-center py-3.5 px-4 md:py-6 md:px-6 cursor-pointer select-none" 
      @click="$emit('toggle')"
    >
      <span class="question-text">{{ question }}</span>
      
      <div class="icon-box">
        <i 
          class="fa-solid transition-all duration-300 text-[10px]"
          :class="isOpen ? 'fa-minus' : 'fa-plus'"
        ></i>
      </div>
    </div>

    <transition name="accordion">
      <div v-show="isOpen" class="content-wrapper">
        <div class="px-4 md:px-6 pb-5 answer-text">
          {{ answer }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineProps({
  question: String,
  answer: String,
  isOpen: Boolean
})
defineEmits(['toggle'])
</script>

<style scoped>
/* سازگاری کامل با متغیرهای تم */
.faq-item {
  @apply w-full border rounded-[12px] md:rounded-[16px] transition-all duration-300 mb-2;
  background-color: var(--card-bg); /* تغییر خودکار در دارک مود */
  border-color: var(--border-color);
}

.faq-item.is-active {
  border-color: #D7A81C;
  @apply shadow-sm;
}

.question-text {
  @apply text-[15px] md:text-[17px] font-bold pr-2 leading-tight;
  color: var(--text-color);
}

.answer-text {
  @apply text-[14px] md:text-base leading-relaxed;
  color: var(--secondary-text);
}

.icon-box {
  @apply w-6 h-6 md:w-7 md:h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300;
  border-color: var(--border-color);
  color: var(--secondary-text);
}

/* حذف !important و استفاده از specificity برای تغییر رنگ آیکون در حالت فعال */
.faq-item.is-active .icon-box {
  background-color: #D7A81C;
  border-color: #D7A81C;
  color: #ffffff;
}

/* انیمیشن آکاردئونی تمیز بدون جاوا اسکریپت اضافه */
.content-wrapper {
  @apply overflow-hidden transition-all duration-500 ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px; /* یک مقدار امن برای باز شدن */
  opacity: 1;
}
</style>