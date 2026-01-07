<template>
  <ClientOnly>
    <div class="flex items-center gap-3">
      <label class="theme-toggle-label">
        <input 
          type="checkbox" 
          :checked="currentTheme === 'dark'" 
          @change="toggleTheme" 
          class="sr-only peer"
        >
        <div class="toggle-track">
          <div class="toggle-thumb">
            <transition name="icon-zoom" mode="out-in">
              <i 
                :key="currentTheme"
                :class="[
                  'fa-solid text-[11px]', 
                  currentTheme === 'dark' ? 'fa-moon text-blue-400' : 'fa-sun text-yellow-500'
                ]"
              ></i>
            </transition>
          </div>
        </div>
      </label>
      <span class="text-sm font-bold text-[var(--text-color)] capitalize select-none min-w-[80px]">
        {{ currentTheme }} Mode
      </span>
    </div>
  </ClientOnly>
</template>

<script setup>
const currentTheme = useState('theme_state', () => 'light')

const applyTheme = (theme) => {
  if (process.client) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }
}

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme.value);
}

onMounted(() => {
  const saved = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  currentTheme.value = saved;
  applyTheme(saved);
});
</script>

<style scoped>
.theme-toggle-label {
  @apply relative inline-flex items-center cursor-pointer;
}

.toggle-track {
  @apply w-14 h-7 bg-gray-200 dark:bg-[#1e2329] rounded-full transition-all duration-500 border border-gray-300 dark:border-gray-700;
}

.toggle-thumb {
  @apply absolute top-[3px] left-[4px] bg-white dark:bg-[#2b3139] rounded-full h-[20px] w-[20px] 
         transition-all duration-500 ease-in-out flex items-center justify-center shadow-md;
}

/* انیمیشن جابجایی دایره */
.peer:checked + .toggle-track .toggle-thumb {
  @apply translate-x-7;
  transform: translateX(1.75rem) rotate(360deg);
}

/* تغییر رنگ مسیر در حالت فعال */
.peer:checked + .toggle-track {
  @apply bg-yellow-500/10 border-yellow-500/40;
}

/* انیمیشن تغییر آیکون داخل دایره */
.icon-zoom-enter-active, .icon-zoom-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.icon-zoom-enter-from { opacity: 0; transform: scale(0) rotate(-90deg); }
.icon-zoom-leave-to { opacity: 0; transform: scale(0) rotate(90deg); }
</style>