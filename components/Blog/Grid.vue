<script lang="ts" setup>
  defineProps<{
    title: string;
    image: string;
    excerpt: string;
    slug: string;
  }>();
</script>

<template>
  <div class="grid overflow-hidden rounded shadow-xl group">
    <div class="grid__image h-[180px] w-full relative overflow-hidden">
      <img 
        :src="image" 
        :alt="title"
        class="absolute object-cover w-full h-full duration-300 group-hover:scale-110"
      >
    </div>
    <div class="p-5 grid__content">
      <h3 class="mb-2 text-xl font-semibold grid__content-title">
        {{ title }}
      </h3>
      <div class="mb-2 overflow-hidden text-sm grid__content-excerpt text-clip" v-html="excerpt"></div>
      <NuxtLink :to="`/${slug}`" class="px-2 py-1 text-sm font-semibold text-white bg-green-700 rounded ">
        Read more
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
