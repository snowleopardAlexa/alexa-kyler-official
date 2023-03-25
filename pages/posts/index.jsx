import React from 'react'
import { client } from '@/lib/contentful/client'
import PostCard from '@/components/posts/PostCard'

const Posts = ({ posts }) => {
  return (
    <section className='section'>
    <div className='container'>
       <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
        {posts?.map((post, i) => (
          <PostCard key={post.fields.slug} post={post} />
        ))}
       </ul>
    </div>
    </section>
  )
}

// fetch data in next.js app on the server side on the build time 
export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts

/* 

TypeError: Cannot read properties of undefined (reading 'map')

You are getting a blank array, so fix it two ways:

posts && posts.map

posts?.map


*/