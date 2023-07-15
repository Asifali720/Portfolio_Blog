import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { createClient } from "next-sanity";
// import "../../src/styles/style.css";
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '@/component/navbar/Navbar';
import BlogsSection from '@/component/blogsSection/BlogsSection';

const Blogs = ({blogs}) => {
    console.log(blogs)
  //   const client = createClient({
  //     projectId: 'l4fed5ma',
  //     dataset: 'production',
  //     useCdn: false
  //   });
    
  // const builder = imageUrlBuilder(client)
  return (
    <>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    <Navbar/>
    <div className="section-title text-center mt-[100px]">
                <h3>Blog</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
           
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20 xl:px-[120px]'>
      {
      blogs.map((nodes)=>{
        return <BlogsSection {...nodes}/>
      })
    }
    </div>
    </div>
    
    </>
   
  )
}

export default Blogs
export async function getServerSideProps(context) {
    const client = createClient({
      projectId: 'l4fed5ma',
      dataset: 'production',
      useCdn: false
    });
    const query = `*[_type == 'blog']`;
    const blogs = await client.fetch(query);
    return{
      props: {
        blogs
      }
    }
  }
