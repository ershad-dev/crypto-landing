<template>
  <section class="download-section">
    <div class="max-w-[1200px] mx-auto px-6">
      
      <div class="text-center mb-16 md:mb-24">
        <h2 class="section-title">Download Our Secure Crypto Trading App</h2>
        <p class="section-subtitle">Download US Application then Trade Anywhere</p>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
        
        <div class="flex gap-6 perspective-container">
          <div class="phone-frame phone-1">
            <img src="/assets/images/img2.jpg" alt="App Interface 1" loading="lazy">
          </div>
          <div class="phone-frame phone-2">
            <img src="/assets/images/img1.jpg" alt="App Interface 2" loading="lazy">
          </div>
        </div>

        <div class="text-center lg:text-left">
          <h3 class="side-title">Scan to Download</h3>
          <p class="side-desc">App iOS and Android</p>

          <div class="relative w-fit mx-auto lg:mx-0 mb-10 group">
            <div class="qr-wrapper">
              <img src="/assets/images/githubqrcode.png" alt="QR Code" class="w-36 h-36 md:w-40 md:h-40">
            </div>
            <div class="scan-line"></div>
          </div>

          <div class="flex flex-col gap-4 w-full max-w-[280px] mx-auto lg:mx-0">
            <a v-for="store in stores" :key="store.name" :href="store.url" class="store-btn group">
              <i :class="[store.icon, store.iconSize]"></i>
              <div class="text-left">
                <span class="btn-label">{{ store.label }}</span>
                <span class="btn-name">{{ store.name }}</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const stores = [
  { name: 'App Store', label: 'Download on the', icon: 'fa-brands fa-apple', iconSize: 'text-3xl', url: '#' },
  { name: 'Google Play', label: 'Get it on', icon: 'fa-brands fa-google-play', iconSize: 'text-2xl', url: '#' }
]
</script>

<style scoped>
.download-section {
  @apply py-20 md:py-32 transition-colors duration-300 overflow-hidden relative;
  background-color: var(--bg-color);
}

.section-title {
  @apply text-3xl md:text-5xl font-black mb-4;
  color: var(--text-color);
}

.section-subtitle {
  @apply text-lg md:text-xl font-medium;
  color: var(--secondary-text);
}

.side-title {
  @apply text-2xl md:text-3xl font-[900] mb-2;
  color: var(--text-color);
}

.side-desc {
  @apply font-medium mb-10;
  color: var(--secondary-text);
}

/* مدیریت گوشی‌ها و انیمیشن پرسپکتیو */
.perspective-container {
  perspective: 1200px;
}

.phone-frame {
  @apply w-[180px] h-[380px] md:w-[260px] md:h-[540px] 
         rounded-[35px] md:rounded-[45px] border-[8px] md:border-[12px] 
         overflow-hidden relative shadow-2xl transition-all duration-700;
  background-color: var(--card-bg);
  border-color: #1e2329; /* ثابت برای استایل آیفون */
}

.dark .phone-frame {
  border-color: var(--border-color);
}

.phone-frame:hover {
  transform: scale(1.05) rotateY(-10deg) translateY(-10px);
}

.phone-frame img {
  @apply w-full h-full object-cover;
}

/* انیمیشن‌های شناور */
.phone-1 { animation: floating 6s infinite ease-in-out; }
.phone-2 { 
  animation: floating 6s infinite ease-in-out -3s; 
  @apply mt-10 md:mt-16;
}

@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* باکس QR Code */
.qr-wrapper {
  @apply p-3 rounded-2xl shadow-xl border transition-all duration-300 bg-white;
  border-color: var(--border-color);
}

.dark .qr-wrapper {
  @apply bg-white; 
}

.scan-line {
  @apply absolute top-0 left-0 w-full h-[3px] bg-[var(--accent-hover)];
  box-shadow: 0 0 15px var(--accent-hover);
  animation: scan 3s infinite linear;
}

@keyframes scan {
  0% { top: 0%; opacity: 0; }
  50% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.store-btn {
  @apply flex items-center gap-4 p-4 rounded-2xl shadow-lg transition-all duration-300;
  background-color: #1e2329;
  color: white;
}

.store-btn:hover {
  background-color: var(--accent-hover);
  color: #1e2329;
  @apply translate-x-2;
}

.btn-label { @apply block text-[10px] uppercase font-bold opacity-70; }
.btn-name { @apply text-lg font-extrabold leading-none; }

@media (max-width: 768px) {
  .phone-frame { width: 140px; height: 290px; }
  .phone-2 { margin-top: 0; }
}
</style>