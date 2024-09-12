<script setup lang="ts">
  defineProps(['icon', 'title', 'description'])
</script>

<template>
  <div class="z-20 p-6 bg-white drop-shadow dark:border z-10 dark:border-slate-800 dark:bg-slate-900 rounded-xl flex flex-col gap-2">
    <UIcon :name="icon" class="text-2xl text-orange-500"></UIcon>
    <div>
      <p class="font-semibold text-xl dark:text-slate-200">
        {{ title }}
      </p>
      <p class="text-slate-400 text-md">
        {{ description }}
      </p>
    </div>
  </div>
</template>