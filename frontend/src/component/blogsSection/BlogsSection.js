import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

const BlogsSection = ({slug, image, publishAt, heading, author}) => {
	const client = createClient({
		projectId: 'l4fed5ma',
		dataset: 'production',
		useCdn: false
	  });
	  
	const builder = imageUrlBuilder(client)
  return (
    <div>
        <div id="blog" className="section lb ">
			<div className="w-full !pt-0">
                     <Link href={`${slug.current}`} className="w-full cursor-pointer" key={slug.current}>
					<div className="post-box">
						<div className="post-thumb">
                    
                <Image
                // src={builder.image(image.asset.url).width(200).url()}
                src={builder.image(image.asset._ref).width(200).url()}
                  alt="post-img"
                  width={200}
                  height={200}
                  className="!w-full !h-[200px] !object-fill"
                />
							<div className="date">
								{publishAt}
							</div>
						</div>
						<div className="post-info">
							<h4>{heading}</h4>
							<ul>
                                <li>{author.heading}</li>
                            </ul>
							{/* <RichText content={...blogs.content}/> */}
                            Do you grow peas, beans or other legumes in your backyard or garden? Have you ever heard about seed inoculation and how you can use it to produce more yield? Let’s learn about this and get the most out of your plants. 
						</div>
					</div>
				</Link>
				
				{/* <div className="col-md-4 col-sm-6 col-lg-4">
					<div className="post-box">
						<div className="post-thumb">
							<img src="uploads/blog-02.jpg" className="img-fluid" alt="post-img" />
							<div className="date">
								<span>06</span>
								<span>Aug</span>
							</div>
						</div>
						<div className="post-info">
							<h4>Quisque auctor lectus interdum nisl accumsan venenatis.</h4>
							<ul>
                                <li>by admin</li>
                                <li>Apr 21, 2018</li>
                                <li><a href="#"><b> Comments</b></a></li>
                            </ul>
							<p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-lg-4">
					<div className="post-box">
						<div className="post-thumb">
							<img src="uploads/blog-03.jpg" className="img-fluid" alt="post-img" />
							<div className="date">
								<span>06</span>
								<span>Aug</span>
							</div>
						</div>
						<div className="post-info">
							<h4>Quisque auctor lectus interdum nisl accumsan venenatis.</h4>
							<ul>
                                <li>by admin</li>
                                <li>Apr 21, 2018</li>
                                <li><a href="#"><b> Comments</b></a></li>
                            </ul>
							<p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.</p>
						</div>
					</div>
				</div> */}
			</div>
	</div>
    </div>
  )
}

export default BlogsSection

