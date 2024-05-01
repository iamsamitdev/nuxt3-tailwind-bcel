<script lang="ts" setup>

// Call API useWpApi
const {data: posts, pending, error}: any = await useWpApi().getPosts()

useHead({
  title: 'Home',
  meta: [
    {
      name: 'home description',
      content: 'This is the home page'
    }
  ]
})

</script>

<template>
  <main>
    <!-- Blog Section -->
    <section class="container mx-auto" v-if="posts && !error">
      <div class="container px-4 py-10 md:px-0">
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
      </div>
    </section>
    <div v-if="pending">
      <div class="p-4 mx-auto text-center text-black">
        <Icon name="line-md:loading-twotone-loop" class="w-6 h-6" /> Loading...
      </div>
    </div>
  </main>
</template>

<style scoped></style>
