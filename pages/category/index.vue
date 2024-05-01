<script lang="ts" setup>

import colorGenerator from '@/utils/colorGenerator'

// Call API useWpApi
const {data: categories}: any = await useWpApi().getCategories()


useHead({
  title: 'Category',
  meta: [
    {
      name: 'Category description',
      content: 'This is the home page'
    }
  ]
})

</script>

<template>
  <ClientOnly>
    <section class="py-10">
        <div class="container px-4 mx-auto md:px-0">
            <div class="flex flex-wrap gap-5">
                <NuxtLink
                 v-for="(category) in categories" 
                 :key="category.id"
                 :to="`/category/${category.slug}`"
                 :style="{ backgroundColor: colorGenerator() }"
                 class="flex items-center justify-center px-4 py-2 text-2xl text-white uppercase rounded shadow-md ">
                    <span class="font-semibold">#{{ category.name }}</span>
                </NuxtLink>
            </div>
        </div>
    </section>
  </ClientOnly>
</template>

<style scoped></style>