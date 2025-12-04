<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  interface Snowflake {
    id: number
    left: string
    animationDuration: string
    animationDelay: string
    size: number
    opacity: number
  }

  const snowflakes = ref<Snowflake[]>([])

  const generateSnowflakes = () => {
    const count = 10 // Número de copos de nieve
    snowflakes.value = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`, // Entre 2-5 segundos
      animationDelay: `${Math.random() * 2}s`,
      size: Math.random() * 8 + 4, // Entre 4-12px
      opacity: Math.random() * 0.7 + 0.3 // Entre 0.3-1.0
    }))
  }

  onMounted(() => {
    generateSnowflakes()
  })
</script>

<template>
  <div class="snow-container fixed inset-0 pointer-events-none z-50 overflow-hidden">
    <div
      v-for="flake in snowflakes"
      :key="flake.id"
      class="snowflake"
      :style="{
        left: flake.left,
        animationDuration: flake.animationDuration,
        animationDelay: flake.animationDelay,
        width: `${flake.size}px`,
        height: `${flake.size}px`,
        opacity: flake.opacity
      }"
    />
  </div>
</template>

<style scoped>
  .snow-container {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
  }

  .snowflake {
    position: absolute;
    top: -10px;
    background: white;
    border-radius: 50%;
    user-select: none;
    animation: snowfall linear infinite;
    pointer-events: none;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  }

  @keyframes snowfall {
    0% {
      transform: translateY(0) translateX(0);
    }
    100% {
      transform: translateY(100vh) translateX(50px);
    }
  }

  /* Variaciones en el movimiento para más naturalidad */
  .snowflake:nth-child(3n) {
    animation-name: snowfall-sway1;
  }

  .snowflake:nth-child(3n+1) {
    animation-name: snowfall-sway2;
  }

  .snowflake:nth-child(3n+2) {
    animation-name: snowfall-sway3;
  }

  @keyframes snowfall-sway1 {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(50vh) translateX(30px);
    }
    100% {
      transform: translateY(100vh) translateX(-30px);
    }
  }

  @keyframes snowfall-sway2 {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(50vh) translateX(-40px);
    }
    100% {
      transform: translateY(100vh) translateX(20px);
    }
  }

  @keyframes snowfall-sway3 {
    0% {
      transform: translateY(0) translateX(0);
    }
    33% {
      transform: translateY(33vh) translateX(20px);
    }
    66% {
      transform: translateY(66vh) translateX(-25px);
    }
    100% {
      transform: translateY(100vh) translateX(10px);
    }
  }
</style>

