import type { Post } from '@/types/post'
import { type Category } from '@/types/category'

export default () => {
  
  const config = useRuntimeConfig()
  const WP_URL = config.public.wpUri

  const get = async <T>(endpoint: string) => {
    return useFetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`)
  }

  // Get all posts
  const getPosts = async(
    category?: number,
    page: number = 1,
    perPage: number = 20,
    fields: string = 'author,id,excerpt,title,link,slug,date',
  ) => {
    let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`;
    if (category) {
      query += `&categories=${category}`
    }
    return get<Post[]>(query)
  }

  // Get a single post
  const getPost = async (slug: string) => {
    return get<Post[]>(`posts?slug=${slug}&_embed=1`);
  }

  // Get All Categories
  const getCategories = async () => {
    return get<Category[]>(`categories`)
  }

  // Get a single category
  const getCategory = async (slug: string) => {
    return get<Category>(`categories?slug=${slug}`);
  }

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory
  }
  
}
