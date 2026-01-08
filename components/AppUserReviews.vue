<template>
  <div class="reviews-wrapper mb-32">
    <h2 class="reviews-header text-center">
      What do users tell about us?
    </h2>
    
    <swiper
      :modules="[Pagination]"
      :slides-per-view="1.1"
      :space-between="16"
      :centered-slides="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: false,
          allowTouchMove: false,
          enabled: false 
        }
      }"
      class="reviews-swiper"
    >
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <div class="review-card-container">
          <div class="review-card">
            <div class="flex items-center gap-3 mb-4">
              <div class="user-avatar">
                <i class="fa-solid fa-user"></i>
              </div>
              <span class="user-name">{{ review.name }}</span>
            </div>

            <p class="review-text">
              {{ review.comment }}
            </p>
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

const reviews = readonly([
  {
    name: 'Tony Marshall',
    comment: 'Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.'
  },
  {
    name: 'Tony Marshall',
    comment: 'Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.'
  },
  {
    name: 'Tony Marshall',
    comment: 'Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.'
  }
])
</script>

<style scoped>
.reviews-wrapper {
  @apply mt-20 md:mt-32 max-w-[1200px] mx-auto px-4;
}

.reviews-header {
  @apply text-2xl md:text-3xl font-bold mb-12;
  color: var(--text-color);
}

.review-card-container {
  @apply h-full py-2;
}

.review-card {
  @apply p-8 md:p-10 rounded-[32px] text-left transition-all duration-300 flex flex-col;
  background-color: var(--card-bg); 
  min-height: 240px;
  border: 1px solid transparent;
}

.review-card:hover {
  border-color: var(--border-color);
  transform: translateY(-5px);
}

.user-avatar {
  @apply w-10 h-10 rounded-full flex items-center justify-center bg-gray-400 text-white text-sm;
}

.user-name {
  @apply font-bold text-base;
  color: var(--text-color);
}

.review-text {
  @apply text-[15px] font-medium leading-relaxed;
  color: var(--secondary-text); 
}

/* استایل Pagination */
.reviews-swiper {
  @apply pb-16;
}

:deep(.swiper-pagination-bullet) {
  @apply w-4 h-1 rounded-full opacity-30 transition-all duration-300 !important;
  background-color: var(--text-color) !important;
}

:deep(.swiper-pagination-bullet-active) {
  @apply w-8 opacity-100 !important;
}

/* اصلاح چیدمان در دسکتاپ */
@media (min-width: 1024px) {
  .reviews-swiper :deep(.swiper-wrapper) {
    @apply flex gap-6 !important;
    transform: none !important;
  }

  .reviews-swiper :deep(.swiper-slide) {
    @apply w-[calc(33.333%-16px)] !important;
    margin: 0 !important;
  }

  :deep(.swiper-pagination) {
    @apply hidden !important;
  }
}
</style>