<template>
  <section class="download-section">
    <div class="max-w-[1200px] mx-auto px-6">
      
      <div class="text-center mb-10 md:mb-16">
        <h2 class="section-title">Download Our Secure Crypto Trading App</h2>
        <p class="section-subtitle">Download US Application then Trade Anywhere</p>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between lg:px-14">
        
        <div class="flex gap-4 md:gap-8 justify-center items-center">
          <div class="phone-frame hidden md:block">
            <img src="/assets/images/img2.jpg" alt="App Interface 1">
          </div>
          <div class="phone-frame">
            <img src="/assets/images/img1.jpg" alt="App Interface 2">
          </div>
        </div>

        <div class="flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0">
          <h3 class="side-title">Scan to Download</h3>
          <p class="side-desc">App iOS and Android</p>

          <div class="qr-container mb-8">
            <img src="/assets/images/githubqrcode.png" alt="QR Code" class="w-28 h-28 md:w-32 md:h-32">
          </div>

          <div class="store-buttons-wrapper">
            <a v-for="store in stores" :key="store.name" :href="store.url" class="store-btn">
              <i :class="[store.icon, 'text-xl md:text-2xl']"></i>
              <span class="btn-text">{{ store.name }}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const stores = [
  { name: 'App Store', icon: 'fa-brands fa-apple', url: '#' },
  { name: 'Google Play', icon: 'fa-brands fa-google-play', url: '#' }
]
</script>

<style scoped>
/* استفاده از متغیرهای داینامیک پروژه شما */
.download-section {
  @apply py-16 md:py-24 transition-colors duration-500 -mt-[50px];
  background-color: var(--bg-color); /* این رنگ با تغییر تم شما عوض می‌شود */
}

.section-title {
  @apply text-2xl md:text-3xl font-[600] mb-3 tracking-tight;
  color: var(--text-color); /* تغییر خودکار رنگ متن */
}

.section-subtitle, .side-desc {
  @apply text-sm md:text-base font-medium;
  color: var(--secondary-text); /* رنگ خاکستری که در دارک‌مود روشن‌تر می‌شود */
}

.side-title {
  @apply text-xl md:text-2xl font-bold mb-1;
  color: var(--text-color);
}

.phone-frame {
  @apply w-[140px] h-[290px] md:w-[200px] md:h-[410px] rounded-[22px] md:rounded-[30px] 
         border-[5px] md:border-[7px] overflow-hidden shadow-md transition-all duration-500;
  border-color: var(--border-color); /* تغییر خودکار رنگ حاشیه گوشی */
  background-color: var(--card-bg);
}

.phone-frame img {
  @apply w-full h-full object-cover;
}

/* باکس QR همیشه سفید می‌ماند چون باید توسط دوربین خوانده شود */
.qr-container {
  @apply p-2 bg-white border rounded-xl shadow-sm;
  border-color: var(--border-color);
}

.store-buttons-wrapper {
  @apply flex flex-row lg:flex-col gap-3 w-full max-w-[340px] lg:max-w-[190px] justify-center;
}

.store-btn {
  @apply flex flex-1 lg:flex-none items-center justify-center lg:justify-start 
         gap-2 md:gap-3 py-3 px-4 md:px-6 rounded-xl transition-all duration-200;
  background-color: var(--card-bg); /* دکمه هم‌رنگ کارت‌های سایت شما می‌شود */
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.store-btn:hover {
  @apply scale-[1.02];
  background-color: var(--border-color);
}

.btn-text {
  @apply text-[13px] md:text-[15px] font-bold whitespace-nowrap;
}

@media (max-width: 768px) {
  .phone-frame { @apply w-[190px] h-[390px] mx-auto; }
  .store-btn { @apply px-2 gap-1.5; }
  .btn-text { @apply text-[12px]; }
}
</style>