<template>
  <footer class="footer-wrapper">
    <div class="max-w-[1400px] mx-auto">
      
      <AppFooterData v-slot="{ data }">
        <AppFooterLinks v-if="data" :nav="data" />
      </AppFooterData>

      <div class="footer-mid-bar">
        
        <p class="footer-intro-text">
          Buy and trade top cryptocurrencies like Bitcoin and Ethereum on our platform – a globally trusted crypto 
          exchange with over 2M users. Enjoy low trading fees, 24/7 expert support, and exclusive trading bonuses.
        </p>

        <div class="footer-actions">
          
          <div class="action-item">
            <span class="action-label">Theme</span>
            <ThemeToggle type="toggle" />
          </div>

          <div class="action-item cursor-pointer hover:text-[var(--accent-hover)] transition-colors">
            <i class="fa-solid fa-globe"></i>
            <span class="action-label">English (US)</span>
          </div>

          <div class="mini-qr-box">
            <span class="qr-text">Scan to<br>Download</span>
            <img src="/assets/images/githubqrcode.png" alt="QR" class="w-10 h-10 md:w-12 md:h-12">
          </div>
          
        </div>
      </div>

      <AppFooterBottom />

    </div>
  </footer>
</template>

<style scoped>
/* کانتینر اصلی فوتر */
.footer-wrapper {
  @apply pt-20 pb-10 px-6 border-t transition-colors duration-500;
  border-color: var(--border-color);
  background-color: var(--bg-color);
}

/* نوار میانی فوتر */
.footer-mid-bar {
  @apply py-10 border-y flex flex-col lg:flex-row justify-between items-center gap-10 mb-10;
  border-color: var(--border-color);
}

/* متن معرفی صرافی */
.footer-intro-text {
  @apply text-[13px] leading-relaxed max-w-2xl text-center lg:text-left;
  color: var(--secondary-text);
}

/* محفظه ابزارهای سمت راست فوتر */
.footer-actions {
  @apply flex flex-wrap justify-center items-center gap-6 md:gap-8;
}

.action-item {
  @apply flex items-center gap-3;
  color: var(--text-color);
}

.action-label {
  @apply text-sm font-bold;
}

/* استایل باکس QR کوچک با مدیریت تم */
.mini-qr-box {
  @apply flex items-center gap-4 p-2 rounded-xl border transition-all duration-300;
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

.qr-text {
  @apply text-[10px] font-black uppercase leading-tight;
  color: var(--secondary-text);
}

/* افکت ملایم روی QR Code در زمان هاور */
.mini-qr-box:hover {
  @apply shadow-lg -translate-y-1;
}

/* بهبود نمایش در موبایل */
@media (max-width: 1024px) {
  .footer-mid-bar {
    @apply py-8 gap-8;
  }
}
</style>