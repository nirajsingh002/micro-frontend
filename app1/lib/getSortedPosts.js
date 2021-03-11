
export function getSortedPosts() {
    // Get file names under /posts
    const allPostsData = [{id: "Pre-rendering", title: 'Two forms pre-rendering', date: '2021-01-01'}, {id: "ssg-ssr", title: 'When to Use Static Generation v.s. Server-side Rendering', date: "2021-01-01"}]
    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  }
  export default getSortedPosts;