<template>
  <nav class="nav-root">
    <div class="nav-wrapper">
      
      <div class="flex items-center gap-4">
        <button 
          @click.stop="isMobileMenuOpen = !isMobileMenuOpen" 
          class="mobile-burger-btn"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <i :class="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>

        <NavDesktopMenu :menu-data="menuData" />
      </div>

      <div class="flex items-center gap-2 md:gap-5">
        
        <ClientOnly>
          <div class="flex items-center justify-center min-w-[32px]">
            <ThemeToggle type="icon" />
          </div>
        </ClientOnly>

        <div class="flex items-center gap-1 md:gap-3">
          <button class="btn-login">Log In</button>
          <button class="btn-yellow btn-signup-nav">Sign Up</button>
        </div>
        
        <div class="nav-divider-tools">
          <button class="icon-tool-btn"><i class="fa-solid fa-download"></i></button>
          <button class="icon-tool-btn"><i class="fa-solid fa-globe"></i></button>
        </div>
      </div>
    </div>

    <NavMobileMenu :is-open="isMobileMenuOpen" :menu-data="menuData" />
  </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  isMobileMenuOpen.value = false
})

if (process.client) {
  watch(isMobileMenuOpen, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  })
}

const menuData = [
  {
    title: 'Start Trading',
    links: [
      { title: 'Futures', desc: 'Contracts settled in cryptocurrency' },
      { title: 'Spot', desc: 'Buy and sell by advanced tools' },
      { title: 'Convert', desc: 'The easiest way to trade' }
    ]
  },
  {
    title: 'Markets',
    items: [
      { title: 'Bitcoin price', hint: '→' }, 
      { title: 'Altcoin price' }, 
      { title: 'Meme price' }
    ]
  },
  { title: 'Buy Crypto', items: ['Buy Bitcoin', 'Buy Ethereum'] },
  { title: 'Earn' },
  { title: 'Info', items: ['About us', 'Fees', 'Security'] }
]
</script>

<style scoped>
/* کانتینر اصلی */
.nav-root {
  @apply sticky top-0 z-[1000] h-16 flex items-center border-b transition-all duration-300;
  background-color: var(--bg-color);
  border-color: var(--border-color);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.nav-wrapper {
  @apply w-full max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-6;
}

/* دکمه همبرگری موبایل */
.mobile-burger-btn {
  @apply lg:hidden text-2xl w-10 h-10 flex items-center justify-center transition-transform active:scale-90;
  color: var(--text-color);
}

/* دکمه ورود */
.btn-login {
  @apply px-2 md:px-4 py-2 text-sm font-bold transition-colors;
  color: var(--text-color);
}
.btn-login:hover {
  color: var(--accent-hover);
}

/* دکمه ثبت‌نام */
.btn-signup-nav {
  @apply text-[11px] md:text-sm py-1.5 md:py-2 px-3 md:px-5 rounded-lg font-black;
}

/* جداکننده و آیکون‌های ابزار */
.nav-divider-tools {
  @apply hidden sm:flex items-center gap-4 border-l pl-4;
  border-color: var(--border-color);
}

.icon-tool-btn {
  @apply text-lg transition-colors;
  color: var(--secondary-text);
}
.icon-tool-btn:hover {
  color: var(--accent-hover);
}
</style>