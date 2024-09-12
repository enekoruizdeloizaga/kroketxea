<script setup lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="min-h-36 w-full dark:bg-slate-950 border-t dark:border-slate-800">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row h-full items-center justify-center gap-10 sm:gap-24 p-10">
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold">{{$t('footerKontaktu')}}</p>
        <ULink
          to="mailto:kroketxea@gmail.com"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          kroketxea@gmail.com
        </ULink>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold">{{$t('footerEtxea')}}</p>
        <ULink
          to="https://goo.gl/maps/Y3Ycc4UoyURaRp596"
          target="_blank"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
        Pokopandegi 24, Donostia
        </ULink>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold">Instagram</p>
        <ULink
          to="https://www.instagram.com/kroketxea/?hl=es"
          target="_blank"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          @kroketxea
        </ULink>
      </div>
    </div>
    <div class="dark:bg-slate-950 text-slate-200 dark:text-slate-800 py-2 w-full justify-center flex">
      © {{currentYear}} Eneko Ruiz de Loizaga. All Rights Reserved
    </div>
  </div>
</template>