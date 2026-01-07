<template >
  <transition name="mobile-menu">
    <div v-if="isOpen" class="mobile-menu-root">
      <div class="p-4 space-y-2">
        
        <div 
          v-for="menu in menuData" 
          :key="'mob-' + menu.title" 
          class="menu-section"
        >
          <button 
            @click="activeSub = activeSub === menu.title ? null : menu.title" 
            :class="['menu-btn', { 'active': activeSub === menu.title }]"
          >
            {{ menu.title }}
            <i 
              v-if="menu.links || menu.items" 
              :class="['fa-solid fa-chevron-down chevron', { 'rotate-180': activeSub === menu.title }]"
            ></i>
          </button>
          
          <transition name="expand">
            <div v-show="activeSub === menu.title && (menu.links || menu.items)" class="submenu-container">
              
              <template v-if="menu.links">
                <a v-for="link in menu.links" :key="link.title" href="#" class="submenu-link-complex">
                  <div class="title">{{ link.title }}</div>
                  <div class="desc">{{ link.desc }}</div>
                </a>
              </template>

              <template v-else>
                <a v-for="item in menu.items" :key="item.title || item" href="#" class="submenu-link-simple">
                  {{ item.title || item }}
                </a>
              </template>
              
            </div>
          </transition>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps(['isOpen', 'menuData'])
const activeSub = ref(null)
</script>

<style scoped>
.mobile-menu-root {
  @apply lg:hidden absolute top-16 left-0 w-full z-[1001] overflow-y-auto border-b;
  background-color: var(--bg-color);
  border-color: var(--border-color);
  max-height: calc(100vh - 64px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.menu-section {
  @apply border-b last:border-0;
  border-color: var(--border-color);
}

.menu-btn {
  @apply w-full flex justify-between items-center p-4 font-bold transition-all rounded-xl;
  color: var(--text-color);
}
.menu-btn.active {
  @apply bg-[var(--border-color)];
  color: #f0b90b;
}

.chevron {
  @apply text-[10px] transition-transform duration-300;
}

.submenu-container {
  @apply pl-4 mb-2 overflow-hidden;
  background-color: var(--bg-color);
}

.submenu-link-complex {
  @apply block p-3 rounded-lg active:bg-gray-100 dark:active:bg-gray-800 transition-colors;
}

.submenu-link-complex .title {
  @apply font-bold text-sm;
  color: var(--text-color);
}

.submenu-link-complex .desc {
  @apply text-[10px] mt-0.5;
  color: var(--secondary-text);
}

.submenu-link-simple {
  @apply block p-3 text-sm font-semibold rounded-lg;
  color: var(--text-color);
}

/* انیمیشن ورود منوی اصلی */
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* انیمیشن باز شدن آکاردئون  */
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease-in-out;
  max-height: 500px;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>