<template>
  <div class="reviews-wrapper">
    <h2 class="reviews-header text-center">
      What do users tell about us?
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(review, index) in reviews" :key="index" class="review-card group">
        
        <div class="flex items-center gap-4 mb-6">
          <div class="user-avatar">
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="text-left">
            <span class="user-name">{{ review.name }}</span>
            <div class="star-container">
              <i v-for="s in 5" :key="s" class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        <p class="review-text">
          {{ review.comment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// استفاده از readonly برای پرفورمنس بهتر در دیتای ثابت
const reviews = readonly([
  {
    name: 'Tony Marshall',
    comment: '"Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures. The interface is incredibly smooth and execution is fast."'
  },
  {
    name: 'Sarah Jenkins',
    comment: '"The best platform for crypto trading. The mobile app is very intuitive and I love the real-time notifications for price alerts."'
  },
  {
    name: 'Alex River',
    comment: '"I’ve been using this for 2 years. Secure, stable, and the customer support is always there when I need help in my local language."'
  }
])
</script>

<style scoped>
.reviews-wrapper {
  @apply mt-20 md:mt-32 px-4;
}

.reviews-header {
  @apply text-2xl md:text-3xl font-[900] mb-14;
  color: var(--text-color);
}

.review-card {
  @apply p-10 rounded-[32px] text-left transition-all duration-500 border;
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

/* افکت هاور کارت‌ها با حفظ کنتراست */
.review-card:hover {
  @apply -translate-y-3 shadow-2xl;
  border-color: rgba(240, 185, 11, 0.5);
  /* استفاده از سایه برای ایجاد عمق به جای تغییر رنگ پس‌زمینه */
  box-shadow: 0 20px 40px -15px var(--shadow);
}

.user-avatar {
  @apply w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300;
  background-color: var(--bg-color);
  color: var(--secondary-text);
  border: 1px solid var(--border-color);
}

.user-name {
  @apply font-[800] text-base;
  color: var(--text-color);
}

.star-container {
  @apply flex gap-0.5 text-[10px] mt-1;
  color: #f0b90b;
}

.review-text {
  @apply text-[15px] font-medium italic leading-relaxed;
  color: var(--secondary-text);
}

/* ریسپانسیو */
@media (max-width: 768px) {
  .review-card { @apply p-8; }
  .reviews-header { @apply mb-10 text-xl; }
}
</style>