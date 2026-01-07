<template>
  <div class="trust-section-root">
    <h2 class="trust-header">Why Millions Trust US?</h2>
    
    <swiper
      :modules="[SwiperPagination]"
      :slides-per-view="1" 
      :space-between="0"
      :centered-slides="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '1024': {
          slidesPerView: 4,
          spaceBetween: 24,
          centeredSlides: false,
          allowTouchMove: false
        }
      }"
      class="trust-swiper"
    >
      <swiper-slide v-for="(stat, index) in stats" :key="index">
        <div class="px-4 md:px-0 h-full">
          <div class="trust-card">
            <div class="icon-box">
              <div v-if="stat.isSpecial" class="secure-logo-circle">
                <div class="diamond-shape"></div>
              </div>
              <i v-else :class="stat.icon" class="stat-icon-font"></i>
            </div>

            <h3 class="trust-h3">{{ stat.title }}</h3>
            <p class="trust-p">{{ stat.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { readonly } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperPagination = Pagination;

const stats = readonly([
  { icon: 'fa-solid fa-medal', title: '24/7', desc: 'Customer Support in 40 languages' },
  { isSpecial: true, title: 'Secure and Stable', desc: 'Advanced protection for your assets' },
  { icon: 'fa-solid fa-calendar-check', title: '6 years with you', desc: 'Reliable service since the beginning' },
  { icon: 'fa-solid fa-bolt', title: 'Trade Fast', desc: 'High-performance matching engine' }
]);
</script>

<style scoped>
.trust-section-root {
  @apply w-full max-w-[1200px] mx-auto mt-10 mb-32 transition-colors duration-500;
}

.trust-header {
  @apply text-2xl md:text-3xl font-bold mb-10 text-center -mt-[150px];
  color: var(--text-color);
}

/* کارت‌ها */
.trust-card {
  @apply flex flex-col items-center text-center p-10 rounded-[32px] transition-all duration-500 justify-center h-[260px];
  /* در موبایل پس‌زمینه دارد، در دسکتاپ شفاف می‌شود */
  background-color: var(--card-bg); 
}

.icon-box {
  @apply mb-4 text-5xl flex items-center justify-center;
  color: var(--secondary-text);
}

.trust-h3 {
  @apply text-xl font-bold mb-2;
  color: var(--text-color);
}

.trust-p {
  @apply text-sm leading-relaxed max-w-[200px] mx-auto;
  color: var(--secondary-text);
}

/* استایل آیکون خاص */
.secure-logo-circle {
  @apply w-14 h-14 rounded-full flex items-center justify-center;
  background-color: var(--secondary-text);
}

.diamond-shape {
  @apply w-3.5 h-3.5 bg-white dark:bg-gray-900 rotate-45;
}

/* استایل Pagination */
.trust-swiper {
  @apply pb-14 overflow-visible;
}

:deep(.swiper-pagination) {
  @apply flex justify-center items-center gap-2;
  bottom: 10px !important;
}

:deep(.swiper-pagination-bullet) {
  @apply w-[18px] h-[4px] rounded-full opacity-100 transition-all duration-300 mx-0 !important;
  background-color: var(--border-color) !important;
}

:deep(.swiper-pagination-bullet-active) {
  @apply w-[36px] !important;
  background-color: var(--text-color) !important;
}

/* تنظیمات حالت دسکتاپ */
@media (min-width: 1024px) {
  .trust-card {
    background-color: transparent !important; /* حذف پس‌زمینه در دسکتاپ مطابق طرح شما */
    height: auto;
    @apply p-0;
  }

  .trust-swiper :deep(.swiper-wrapper) {
    @apply grid grid-cols-4 gap-6 transform-none !important;
    display: grid;
  }
  
  .trust-swiper :deep(.swiper-pagination) {
    @apply hidden !important;
  }
}
</style>