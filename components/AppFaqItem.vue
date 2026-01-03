<template>
  <div class="faq-item group" :class="{ 'is-active': isOpen }">
    <div 
      class="flex justify-between items-center p-6 md:p-8 cursor-pointer select-none" 
      @click="$emit('toggle')"
    >
      <span class="question-text">{{ question }}</span>
      
      <div class="icon-circle">
        <i 
          class="fa-solid fa-chevron-down text-[10px] transition-transform duration-500"
          :class="{ 'rotate-180 text-black': isOpen }"
        ></i>
      </div>
    </div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isOpen" class="content-wrapper">
        <div class="px-6 md:px-8 pb-8 answer-text">
          {{ answer }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
/*
  دریافت پروپ‌ها و رویدادها
 */
defineProps({
  question: String,
  answer: String,
  isOpen: Boolean
})
defineEmits(['toggle'])


const beforeEnter = (el) => { el.style.height = '0'; el.style.opacity = '0'; }
const enter = (el) => { 
  el.style.height = el.scrollHeight + 'px'; 
  el.style.opacity = '1';
}
const beforeLeave = (el) => { el.style.height = el.scrollHeight + 'px'; el.style.opacity = '1'; }
const leave = (el) => { el.style.height = '0'; el.style.opacity = '0'; }
</script>

<style scoped>
.faq-item {
  @apply border border-[var(--border-color)] rounded-[24px] transition-all duration-300;
  background-color: var(--card-bg);
}

/* استایل حالت فعال */
.faq-item.is-active {
  @apply shadow-xl;
  border-color: var(--accent-hover);
  box-shadow: 0 10px 25px -10px rgba(240, 185, 11, 0.15);
}

.question-text {
  @apply text-base md:text-lg font-bold pr-4 transition-colors duration-300;
  color: var(--text-color);
}

.faq-item:hover .question-text {
  color: var(--accent-hover);
}

.answer-text {
  @apply text-sm md:text-base leading-relaxed;
  color: var(--secondary-text);
}

/* نگهدارنده انیمیشن */
.content-wrapper {
  @apply overflow-hidden transition-[height,opacity] duration-300 ease-in-out;
}

/* دایره آیکون کناری */
.icon-circle {
  @apply w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300;
  background-color: var(--table-hover);
  color: var(--secondary-text);
}

.faq-item:hover .icon-circle,
.faq-item.is-active .icon-circle {
  background-color: var(--accent-color);
  color: #000;
}
</style>