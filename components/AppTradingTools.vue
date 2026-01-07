<template>
  <section class="tools-section">
    <div class="max-w-[1250px] mx-auto px-6">
      
      <h2 class="section-title">
        Advanced Crypto Trading Tools for Faster, Smarter Transactions
      </h2>
      
      <ClientOnly>
        <swiper
          :modules="[SwiperPagination]"
          :slides-per-view="1"
          :space-between="20"
          :pagination="{ clickable: true }"
          :breakpoints="{
            '768': { slidesPerView: 2, enabled: false },
            '1024': { slidesPerView: 3, enabled: false }
          }"
          class="tools-swiper"
        >
          <swiper-slide v-for="(tool, index) in toolsList" :key="index" class="pb-12 md:pb-0">
            <div class="tool-card group">
              <div class="icon-container">
                <img 
                  :src="tool.image" 
                  :alt="tool.title" 
                  class="responsive-card-img"
                >
              </div>

              <h4 class="tool-title">{{ tool.title }}</h4>
              <p class="tool-desc">{{ tool.desc }}</p>
              
              <div class="card-footer">
                <span v-if="tool.badge" class="badge-text">{{ tool.badge }}</span>
                <a href="#" class="trade-link">{{ tool.actionText }}</a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </ClientOnly>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img25x from '~/assets/images/25x.png';

const toolsList = [
  {
    title: "Trade Over 400+ Cryptocurrencies Instantly",
    desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
    actionText: "Trade",
    image: img25x 
  },
  {
    title: "Futures Trading with Up to 100x Leverage",
    desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures..",
    actionText: "Trade",
    badge: "30x max leverage",
    image: img25x
  },
  {
    title: "Earn Passive Income with Crypto Staking & Lending",
    desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures..",
    actionText: "Earn money",
    image: img25x
  }
]
</script>

<style scoped>
.tools-section {
  @apply py-16 transition-colors duration-500 overflow-hidden;
  background-color: var(--bg-color);
}

.section-title {
  @apply text-2xl md:text-[28px] font-bold text-center mb-12 max-w-3xl mx-auto -mt-10 leading-tight;
  color: var(--text-color);
}

/* کارت ابزار */
.tool-card {
  @apply rounded-[24px] p-6 flex flex-col min-h-[360px] md:min-h-[350px] h-full 
         transition-all duration-300 border border-transparent shadow-sm;
  background-color: var(--card-bg); /* تغییر خودکار در دارک مود */
}

.tool-card:hover {
  @apply shadow-md -translate-y-1;
  border-color: var(--border-color);
}

.icon-container {
  @apply flex justify-center items-center mb-4 h-24 md:h-20;
}

.responsive-card-img {
  @apply w-[120px] md:w-[70px] h-auto object-contain block;
}

.tool-title {
  @apply text-[18px] md:text-[19px] font-bold mb-3 leading-[1.3] text-left;
  color: var(--text-color);
}

.tool-desc {
  @apply text-[13px] leading-[1.5] mb-4 font-medium text-left;
  color: var(--secondary-text);
}

.card-footer {
  @apply mt-auto flex justify-between items-center pt-2;
}

.badge-text {
  @apply text-[13px] font-medium opacity-80;
  color: var(--secondary-text);
}

.trade-link {
  @apply text-[#c99400] font-bold text-[15px] transition-all hover:text-[#f0b90b] ml-auto;
}

/* بهینه سازی Swiper و Pagination */
.tools-swiper { overflow: visible; }

:deep(.swiper-pagination-bullet) {
  @apply w-8 h-[3px] rounded-none transition-all duration-300 opacity-40 mx-1 !important;
  background-color: var(--secondary-text) !important;
}

:deep(.swiper-pagination-bullet-active) {
  @apply opacity-100;
  background-color: var(--text-color) !important;
  width: 32px !important;
}

/* مدیریت نمایش گرید در دسکتاپ بدون تکرار کد */
@media (min-width: 768px) {
  .tools-swiper :deep(.swiper-wrapper) {
    @apply grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 transform-none !important;
    display: grid;
  }
  .tools-swiper :deep(.swiper-pagination) { @apply hidden !important; }
}
</style>