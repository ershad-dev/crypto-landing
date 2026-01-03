<template>
  <ClientOnly>
    <button 
      v-if="type === 'icon'"
      @click="toggleTheme" 
      class="theme-icon-btn group"
      aria-label="Toggle Theme"
    >
      <div class="icon-wrapper">
        <transition name="rotate-fade" mode="out-in">
          <i v-if="currentTheme === 'dark'" key="sun" class="fa-solid fa-sun text-yellow-400"></i>
          <i v-else key="moon" class="fa-solid fa-moon text-gray-600 dark:text-gray-300"></i>
        </transition>
      </div>
    </button>

    <div v-else class="flex items-center gap-3">
      <label class="theme-toggle-label">
        <input 
          type="checkbox" 
          :checked="currentTheme === 'dark'" 
          @change="toggleTheme" 
          class="sr-only peer"
        >
        <div class="toggle-track peer">
          <div class="toggle-thumb">
            <i :class="['fa-solid text-[10px]', currentTheme === 'dark' ? 'fa-moon text-blue-400' : 'fa-sun text-yellow-500']"></i>
          </div>
        </div>
      </label>
      <span class="text-sm font-bold text-[var(--secondary-text)] capitalize">
        {{ currentTheme }} Mode
      </span>
    </div>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'icon' }
})

const currentTheme = useState('theme_state', () => 'light')

const applyTheme = (theme) => {
  if (process.client) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
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
/* استایل دکمه آیکونی */
.theme-icon-btn {
  @apply relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
}
.theme-icon-btn:hover {
  @apply scale-110 shadow-lg;
  background-color: var(--border-color);
}

.icon-wrapper {
  @apply text-lg flex items-center justify-center;
}

/* استایل تاگل */
.theme-toggle-label {
  @apply relative inline-flex items-center cursor-pointer;
}

.toggle-track {
  @apply w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full transition-all duration-500 peer-checked:bg-yellow-500/20 border border-transparent peer-checked:border-yellow-500/50;
}

.toggle-thumb {
  @apply absolute top-[4px] left-[4px] bg-white dark:bg-gray-900 rounded-full h-5 w-5 transition-all duration-500 flex items-center justify-center shadow-md;
}

.peer:checked ~ .toggle-thumb {
  @apply translate-x-7 rotate-[360deg];
}

/* انیمیشن تغییر آیکون */
.rotate-fade-enter-active, .rotate-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.rotate-fade-enter-from { opacity: 0; transform: rotate(-90deg) scale(0.5); }
.rotate-fade-leave-to { opacity: 0; transform: rotate(90deg) scale(0.5); }
</style>