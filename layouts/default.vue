<script lang="ts" setup></script>

<template>
  <div>
    <AppHeader />

    <div class="
      container 
      py-5
      mx-auto 
      text-center 
      lg:text-start 
      md:px-0 
      lg:px-5
      md:text-center">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>

<style scoped></style>
