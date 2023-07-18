import { useRouter } from 'next/router'
import { createClient } from "next-sanity";
import Image from 'next/image'
import Navbar from '@/component/navbar/Navbar';
 
const Post = ({blog}) => {
  const router = useRouter()
  return <>
  <Navbar/>
  <div className='w-full max-[800px] mx-auto'>
      <h1>{blog.heading}</h1>
      <div>
        <Image/>
        <p></p>
        <span></span>
      </div>
      <Image/>
      
  </div>
  <p>Post: {router.query.slug}</p>
  </>
  
}
export default Post
export const getServerSideProps = async(context) =>{
  const { slug } = context.query
  const client = createClient({
    projectId: 'l4fed5ma',
    dataset: 'production',
    useCdn: false
  });
  const query = `*[_type == 'blog' && slug.current == ${slug}]`
  const blog = await client.fetch(query)
  console.log(blog)
  return{
    props:{
      blog
    }
  }
}