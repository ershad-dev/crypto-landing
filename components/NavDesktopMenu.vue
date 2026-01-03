<template>
  <ul class="nav-menu-root">
    <li 
      v-for="menu in menuData" 
      :key="menu.title" 
      class="menu-item-wrapper group"
    >
      <div class="menu-trigger">
        {{ menu.title }} 
        <i v-if="menu.links || menu.items" 
           class="fa-solid fa-chevron-down chevron-icon">
        </i>
      </div>
      
      <div v-if="menu.links || menu.items" class="dropdown-container">
        <div v-if="menu.links" class="wide-menu">
          <div 
            v-for="link in menu.links" 
            :key="link.title" 
            class="mega-link-item"
          >
            <span class="mega-link-title">{{ link.title }}</span>
            <span class="mega-link-desc">{{ link.desc }}</span>
          </div>
        </div>

        <div v-else class="simple-menu">
          <a 
            v-for="item in menu.items" 
            :key="item.title || item" 
            href="#" 
            class="simple-link-item"
          >
            {{ item.title || item }} 
            <span v-if="item.hint" class="hint-badge">{{ item.hint }}</span>
          </a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps(['menuData'])
</script>

<style scoped>
.nav-menu-root {
  @apply hidden lg:flex items-center gap-1 list-none m-0 p-0;
}

.menu-item-wrapper {

  @apply relative px-3 py-4 text-sm font-bold cursor-pointer transition-colors;
  color: var(--text-color);
}

.menu-trigger {
  @apply flex items-center gap-1.5 py-2 px-3 rounded-md transition-colors;
}

.menu-item-wrapper:hover .menu-trigger {
  background-color: var(--table-hover);
}

.chevron-icon {
  @apply text-[10px] opacity-60 transition-transform duration-300 group-hover:rotate-180;
}

/* کانتینر دراپ‌داون */
.dropdown-container {
  @apply absolute top-[80%] left-0 hidden group-hover:block p-2 rounded-2xl shadow-2xl z-50 min-w-[220px] border;
  background-color: var(--card-bg);
  border-color: var(--border-color);
  animation: dropdownFadeIn 0.2s ease-out;
}

.wide-menu {
  @apply w-80 grid grid-cols-1 gap-1;
}

.mega-link-item {
  @apply p-4 flex flex-col rounded-xl transition-colors cursor-pointer;
}

.mega-link-item:hover {
  background-color: var(--table-hover);
}

.mega-link-title {
  @apply font-bold text-[15px];
  color: var(--text-color);
}

.mega-link-desc {
  @apply text-xs mt-1 font-medium;
  color: var(--secondary-text);
}

/* استایل منوی ساده */
.simple-menu {
  @apply flex flex-col gap-1;
}

.simple-link-item {
  @apply block p-3 text-sm font-bold rounded-xl transition-all;
  color: var(--text-color);
}

.simple-link-item:hover {
  background-color: var(--table-hover);
  @apply translate-x-1;
}

.hint-badge {
  @apply ml-2 text-[10px] bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded;
}

@keyframes dropdownFadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>