<script lang="ts" setup>

// รับค่า params จาก URL
const params = useRoute().params

// Call API useWpApi
const { data: categories, error, pending }: any = await useWpApi().getCategory(params.slug as string)
const category = (categories.value as Array<any>)?.[0]

// console.log(error.value)
// console.log(pending)

// read post in category
const { data: posts }: any = await useWpApi().getPosts(category.id)

useHead({
  title: `Archive: ${category?.name}`,
  meta: [
    {
      name: 'category description',
      content: `Category ${params.slug}`,
    }
  ]
})

</script>

<template>
  <section class="pt-2 pb-10" v-if="posts && !error">
    <div class="container px-4 mx-auto md:px-0">
      <h1 class="pb-10 text-3xl font-semibold text-center">Category: {{ category?.name }}</h1>
      <div class="grid gap-10 sm:grid-cols-3">
        <BlogGrid
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :excerpt="post.excerpt.rendered"
          :slug="post.slug"
        />
      </div>
      <div v-if="!posts.length">
        <div class="w-2/4 p-4 mx-auto text-center text-white bg-red-600 rounded-md">
          No post in this category
        </div>
      </div>
    </div>
  </section>
  <div v-if="pending">
    <div class="p-4 mx-auto text-center text-black">
      <Icon name="line-md:loading-twotone-loop" class="w-6 h-6" /> Loading...
    </div>
  </div>
</template>

<style scoped></style>
