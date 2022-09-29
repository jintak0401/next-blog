import { PostFrontMatter } from '@/lib/types'

export async function getAllTags(allPosts: PostFrontMatter[]) {
  const tagCount: Record<string, number> = {}
  // Iterate through each post, putting all found tags into `tags`

  allPosts.forEach((file) => {
    if (file.tags) {
      file.tags.forEach((tag) => {
        if (tag in tagCount) {
          tagCount[tag] += 1
        } else {
          tagCount[tag] = 1
        }
      })
    }
  })

  return tagCount
}
