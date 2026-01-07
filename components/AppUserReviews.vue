<template>
  <div class="reviews-wrapper mb-32">
    <h2 class="reviews-header text-center">
      What do users tell about us?
    </h2>
    
    <swiper
      :modules="[SwiperPagination]"
      :slides-per-view="1"
      :space-between="20"
      :centered-slides="true"
      :loop="false"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          centeredSlides: false,
          allowTouchMove: true
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: false,
          allowTouchMove: false
        }
      }"
      class="reviews-swiper"
    >
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <div class="px-4 md:px-0 h-full">
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

const SwiperPagination = Pagination;

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
  @apply mt-20 md:mt-32 max-w-[1200px] mx-auto;
}

.reviews-header {
  @apply text-2xl md:text-3xl font-[600] mb-12 -mt-[110px];
  /* تغییر رنگ به متغیر متنی اصلی */
  color: var(--text-color);
}

/* استایل کارت مطابق عکس */
.review-card {
  @apply p-8 md:p-10 rounded-[32px] text-left h-full transition-all duration-300;
  /* جایگزینی رنگ ثابت با متغیر پس‌زمینه کارت */
  background-color: var(--card-bg); 
  min-height: 220px;
  display: flex;
  flex-direction: column;
}

.user-avatar {
  @apply w-10 h-10 rounded-full flex items-center justify-center bg-[#929aa5] text-white text-sm;
}

.user-name {
  @apply font-bold text-base;
  /* تغییر رنگ به متغیر متنی اصلی */
  color: var(--text-color);
}

.review-text {
  @apply text-[15px] font-medium leading-relaxed;
  /* تغییر رنگ به متغیر متنی ثانویه برای خوانایی در دارک مود */
  color: var(--secondary-text); 
}

/* تنظیمات اسلایدر و خطوط پایین */
.reviews-swiper {
  @apply pb-14;
}

:deep(.swiper-pagination) {
  @apply flex justify-center items-center gap-1.5;
  bottom: 40px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 16px !important;
  height: 4px !important;
  border-radius: 10px !important;
  /* هماهنگی رنگ نقاط غیرفعال با خطوط تم */
  background-color: var(--border-color) !important;
  opacity: 1 !important;
  margin: 0 !important;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  width: 32px !important;
  /* هماهنگی رنگ نقطه فعال با رنگ متن اصلی تم */
  background-color: var(--text-color) !important; 
}

/* در دسکتاپ اسلایدر را ثابت نگه می‌داریم */
@media (min-width: 1024px) {
  .review-card {
    min-height: 200px;
  }
  :deep(.swiper-wrapper) {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    transform: none !important;
  }
  :deep(.swiper-pagination) {
    display: none !important;
  }
}
</style>