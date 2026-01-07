<template>
  <footer class="footer-wrapper">
    <div class="footer-inner">
      
      <AppFooterData v-slot="{ data }">
        <AppFooterLinks v-if="data" :nav="data" />
      </AppFooterData>

      <div class="footer-mid-bar">
        
        <div class="footer-intro-container">
          <p class="footer-intro-text">
            Buy and trade top cryptocurrencies like Bitcoin on OKX – a globally trusted crypto exchange with over 2M users. Enjoy low trading fees, 24/7 expert support, and exclusive bonuses for new active users.
          </p>
        </div>

        <div class="footer-actions">
          
          <div class="settings-card">
            <div class="setting-row">
              <span class="setting-label">Theme</span>
              <ThemeToggle type="toggle" />
            </div>
            <div class="divider"></div>
            <div class="setting-row clickable">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-globe text-gray-400"></i>
                <span class="setting-label">English</span>
              </div>
            </div>
          </div>

          <div class="qr-card">
            <div class="qr-header">
              <span class="scan-text">Scan to</span>
              <span class="download-text">Download</span>
            </div>
            <div class="qr-box">
              <img src="/assets/images/githubqrcode.png" alt="QR Code" class="qr-code-img">
            </div>
          </div>
          
        </div>
      </div>

      <AppFooterBottom />

    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  @apply pt-16 pb-10 px-6 md:px-12 border-t transition-colors duration-500;
  border-color: var(--border-color);
  background-color: var(--bg-color);
}

.footer-inner {
  @apply w-full max-w-[1600px] mx-auto;
}

.footer-mid-bar {
  @apply py-12 border-y flex flex-col lg:flex-row justify-between items-start gap-10 mb-10 transition-colors duration-500 -mt-[60px];
  border-color: var(--border-color);
}

.footer-intro-text {
  @apply text-[15px] leading-[1.7] max-w-[650px] font-medium;
  color: var(--secondary-text); /* تغییر از کد رنگ ثابت به متغیر */
}

.footer-actions {
  @apply flex flex-row items-stretch gap-6 w-full lg:w-auto justify-center;
}

/* باکس تنظیمات */
.settings-card {
  @apply flex flex-col min-w-[210px] bg-transparent;
}

.setting-row {
  @apply flex items-center justify-between px-2 py-3;
}

.setting-row.clickable {
  @apply cursor-pointer rounded-lg transition-colors duration-300;
}

.setting-row.clickable:hover {
  background-color: var(--hover-bg, rgba(0,0,0,0.05));
}

.setting-label {
  @apply text-[15px] font-bold;
  color: var(--text-color);
}

.divider {
  @apply h-[1px] w-full;
  background-color: var(--border-color);
  opacity: 0.2;
}

/* کارت QR Code */
.qr-card {
  @apply flex flex-col items-center min-w-[140px];
}

.qr-header {
  @apply flex items-center gap-1 mb-3 text-[13px] whitespace-nowrap;
}

.scan-text { @apply text-gray-400; }
.download-text { 
  @apply font-bold;
  color: var(--text-color);
}

.qr-box {
  @apply p-2 bg-white rounded-xl border border-gray-100 flex items-center justify-center shadow-sm;
}

.qr-code-img {
  @apply w-[90px] h-[90px] md:w-[100px] md:h-[100px] object-contain;
}

/* بهینه‌سازی ریسپانسیو */
@media (max-width: 1024px) {
  .footer-mid-bar { @apply items-center text-center; }
  .footer-actions { @apply flex-wrap; }
}

@media (max-width: 640px) {
  .footer-actions { @apply flex-col items-center w-full; }
  .footer-intro-text { @apply text-sm; }
}
</style>