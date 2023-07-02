import Image from 'next/image'
import { Inter } from 'next/font/google'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
// import "../../src/styles/style.css";
import Head from 'next/head';
import Script from 'next/script';


// const inter = Inter({ subsets: ['latin'] })

export default function Home({blogs}) {
  // console.log("🚀 ~ file: index.js:8 ~ Home ~ blogs:", blogs)
  // console.log(blogs)
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
    <div id="preloader">
        <div id="main-ld">
			<div id="loader"></div>  
		</div>
    </div>
	
    
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
			<img className="img-fluid" src="images/logo.png" alt="" />
		</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#testimonials">Testimonials</a>
            </li>
			<li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#blog">Blog</a>
            </li>
			<li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contect Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
	
	<section id="home" className="main-banner parallaxie" style={{background: "url('uploads/banner-01.jpg')"}}>
		<div className="heading">
			<h1>hello i'm Dominic</h1>
			<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
			<h3 className="cd-headline clip is-full-width">
				<span>Lorem ipsum dolor sit amet </span>
				<span className="cd-words-wrapper">
					<b className="is-visible">Web Developer</b>
					<b>Web Design</b>
					<b>Creative Design</b>
					<b>Graphic Design</b>
				</span>
			</h3>
		</div>
	</section>

	<svg id="clouds" className="hidden-xs" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 85 100" preserveAspectRatio="none">
        <path d="M-5 100 Q 0 20 5 100 Z
            M0 100 Q 5 0 10 100
            M5 100 Q 10 30 15 100
            M10 100 Q 15 10 20 100
            M15 100 Q 20 30 25 100
            M20 100 Q 25 -10 30 100
            M25 100 Q 30 10 35 100
            M30 100 Q 35 30 40 100
            M35 100 Q 40 10 45 100
            M40 100 Q 45 50 50 100
            M45 100 Q 50 20 55 100
            M50 100 Q 55 40 60 100
            M55 100 Q 60 60 65 100
            M60 100 Q 65 50 70 100
            M65 100 Q 70 20 75 100
            M70 100 Q 75 45 80 100
            M75 100 Q 80 30 85 100
            M80 100 Q 85 20 90 100
            M85 100 Q 90 50 95 100
            M90 100 Q 95 25 100 100
            M95 100 Q 100 15 105 100 Z">
        </path>
    </svg>

    <div id="about" className="section wb">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="message-box">                        
                        <h2>About Dominic.</h2>
                        <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
						<p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>

                        <a href="#" className="sim-btn btn-hover-new" data-text="Download CV"><span>Download CV</span></a>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="right-box-pro wow fadeIn">
                        <img src="uploads/about_04.jpg" alt="" className="img-fluid img-rounded"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
    <div id="services" className="section lb">
        <div className="container">
            <div className="section-title text-left">
                <h3>Services</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
            </div>

            <div className="row">
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-seo"></i>
						</div>
						<h2>Web Development</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
                <div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-development"></i>
						</div>
						<h2>Responsive Design</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-process"></i>
						</div>
						<h2>Creative Design</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-discuss-issue"></i>
						</div>
						<h2>Support</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-idea"></i>
						</div>
						<h2>Web Idea</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-idea-1"></i>
						</div>
						<h2>Graphic Design</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
            </div>
        </div>
    </div>
	
	<div id="portfolio" className="section lb">
		<div className="container">
			<div className="section-title text-left">
                <h3>Portfolio</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
            </div>
			
			<div className="gallery-menu row">
				<div className="col-md-12">
					<div className="button-group filter-button-group text-left">
						<button className="active" data-filter="*">All</button>
						<button data-filter=".gal_a">Web Development</button>
						<button data-filter=".gal_b">Creative Design</button>
						<button data-filter=".gal_c">Graphic Design</button>
					</div>
				</div>
			</div>
			
			<div className="gallery-list row">
				<div className="col-md-4 col-sm-6 gallery-grid gal_a gal_b">
					<div className="gallery-single fix">
						<img src="uploads/gallery_img-01.jpg" className="img-fluid" alt="Image"/>
						<div className="img-overlay">
							<a href="uploads/gallery_img-01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o"></i></a>
						</div>
					</div>
				</div>
				
				<div className="col-md-4 col-sm-6 gallery-grid gal_c gal_b">
					<div className="gallery-single fix">
						<img src="uploads/gallery_img-02.jpg" className="img-fluid" alt="Image"/>
						<div className="img-overlay">
							<a href="uploads/gallery_img-02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o"></i></a>
						</div>
					</div>
				</div>
				
				<div className="col-md-4 col-sm-6 gallery-grid gal_a gal_c">
					<div className="gallery-single fix">
						<img src="uploads/gallery_img-03.jpg" className="img-fluid" alt="Image"/>
						<div className="img-overlay">
							<a href="uploads/gallery_img-03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o"></i></a>
						</div>
					</div>
				</div>
				
				<div className="col-md-4 col-sm-6 gallery-grid gal_b gal_a">
					<div className="gallery-single fix">
						<img src="uploads/gallery_img-04.jpg" className="img-fluid" alt="Image"/>
						<div className="img-overlay">
							<a href="uploads/gallery_img-04.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o"></i></a>
						</div>
					</div>
				</div>
				
				<div className="col-md-4 col-sm-6 gallery-grid gal_a gal_c">
					<div className="gallery-single fix">
						<img src="uploads/gallery_img-05.jpg" className="img-fluid" alt="Image"/>
						<div className="img-overlay">
							<a href="uploads/gallery_img-05.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o"></i></a>
						</div>
					</div>
				</div>
				
				<div className="col-md-4 col-sm-6 gallery-grid gal_c gal_a">
					<div className="gallery-single fix">
						<img src="uploads/gallery_img-06.jpg" className="img-fluid" alt="Image"/>
						<div className="img-overlay">
							<a href="uploads/gallery_img-06.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o"></i></a>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
    <div>
	</div>
	
	 <div id="testimonials" className="section wb">
        <div className="container">
            <div className="section-title text-left">
                <h3>Testimonials</h3>
                <p>We thanks for all our awesome testimonials! There are hundreds of our happy customers! </p>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="testi-carousel owl-carousel owl-theme">
                        <div className="testimonial clearfix">
                            <div className="desc">
                                <h3><i className="fa fa-quote-left"></i> Wonderful Support!</h3>
                                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                            </div>
                            <div className="testi-meta">
                                <img src="uploads/testi_01.png" alt="" className="img-fluid alignleft"/>
                                <h4>James Fernando <small>- Manager of Racer</small></h4>
                            </div>
                            
                        </div>
                        

                        <div className="testimonial clearfix">
                            <div className="desc">
                                <h3><i className="fa fa-quote-left"></i> Awesome Services!</h3>
                                <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                            </div>
                            <div className="testi-meta">
                                <img src="uploads/testi_02.png" alt="" className="img-fluid alignleft"/>
                                <h4>Jacques Philips <small>- Designer</small></h4>
                            </div>
                            
                        </div>
                        

                        <div className="testimonial clearfix">
                            <div className="desc">
                                <h3><i className="fa fa-quote-left"></i> Great & Talented Team!</h3>
                                <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                            </div>
                            <div className="testi-meta">
                                <img src="uploads/testi_03.png" alt="" className="img-fluid alignleft"/>
                                <h4>Venanda Mercy <small>- Newyork City</small></h4>
                            </div>
                            
                        </div>
                        
                        <div className="testimonial clearfix">
                            <div className="desc">
                                <h3><i className="fa fa-quote-left"></i> Wonderful Support!</h3>
                                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                            </div>
                            <div className="testi-meta">
                                <img src="uploads/testi_01.png" alt="" className="img-fluid alignleft"/>
                                <h4>James Fernando <small>- Manager of Racer</small></h4>
                            </div>
                            
                        </div>
                        

                        <div className="testimonial clearfix">
                            <div className="desc">
                                <h3><i className="fa fa-quote-left"></i> Awesome Services!</h3>
                                <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                            </div>
                            <div className="testi-meta">
                                <img src="uploads/testi_02.png" alt="" className="img-fluid alignleft"/>
                                <h4>Jacques Philips <small>- Designer</small></h4>
                            </div>
                            
                        </div>
                        

                        <div className="testimonial clearfix">
                            <div className="desc">
                                <h3><i className="fa fa-quote-left"></i> Great & Talented Team!</h3>
                                <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                            </div>
                            <div className="testi-meta">
                                <img src="uploads/testi_03.png" alt="" className="img-fluid alignleft"/>
                                <h4>Venanda Mercy <small>- Newyork City</small></h4>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	<div id="blog" className="section lb">
		<div className="container">
			<div className="section-title text-left">
                <h3>Blog</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
            </div>
			
			<div className="row">
				<div className="col-md-4 col-sm-6 col-lg-4">
					<div className="post-box">
						<div className="post-thumb">
							<img src="uploads/blog-01.jpg" className="img-fluid" alt="post-img" />
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
				</div>
			</div>
			
		</div>
	</div>

    <div id="contact" className="section db">
        <div className="container">
            <div className="section-title text-left">
                <h3>Contact</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="contact_form">
                        <div id="message"></div>
                        <form id="contactForm" name="sentMessage" noValidate="novalidate">
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<input className="form-control" id="name" type="text" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name."/>
										<p className="help-block text-danger"></p>
									</div>
									<div className="form-group">
										<input className="form-control" id="email" type="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email address."/>
										<p className="help-block text-danger"></p>
									</div>
									<div className="form-group">
										<input className="form-control" id="phone" type="tel" placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone number."/>
										<p className="help-block text-danger"></p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<textarea className="form-control" id="message" placeholder="Your Message" required="required" data-validation-required-message="Please enter a message."></textarea>
										<p className="help-block text-danger"></p>
									</div>
								</div>
								<div className="clearfix"></div>
								<div className="col-lg-12 text-center">
									<div id="success"></div>
									<button id="sendMessageButton" className="sim-btn btn-hover-new" data-text="Send Message" type="submit">Send Message</button>
								</div>
							</div>
						</form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="copyrights">
        <div className="container">
            <div className="footer-distributed">
                <div className="footer-left">
                    <p className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">Blog</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                        <a href="#">Faq</a>
                        <a href="#">Contact</a>
                    </p>
                    <p className="footer-company-name">All Rights Reserved. &copy; 2018 <a href="#">Dominic</a> Design By : 
					<a href="https://html.design/">html design</a></p>
                </div>
            </div>
        </div>
    </div>
    </>
    // <main
    //   classNameName={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.classNameName}`}
    // >
    //   <div classNameName="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p classNameName="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code classNameName="font-mono font-bold">src/pages/index.js</code>
    //     </p>
    //     <div classNameName="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         classNameName="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           classNameName="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div classNameName="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
    //     <Image
    //       classNameName="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div classNameName="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Discover and deploy boilerplate example Next.js&nbsp;projects.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    // <div>
    //   <h2 classNameName='text-2xl text-red-600'>{blogs[0].name}</h2>
    //   <Image src={blogs[0].poster} alt='image' width={500} height={500}/>
    //   {/* <img src={blogs[0].poster} alt='' classNameName='w-[300px]'/> */}
    //   <PortableText
    //   // Pass in block content straight from Sanity.io
    //   content={blogs[0].content}
    //   projectId = 'l4fed5ma'
    // dataset = 'production'
    //   // Optionally override marks, decorators, blocks, etc. in a flat
    //   // structure without doing any gymnastics
    //   serializers={{
    //     h1: (props) => <h1 style={{ color: "red" }} {...props} />,
    //     li: ({ children }) => <li classNameName="special-list-item">{children}</li>
    //   }}
    // />
    // </div>
  )
}

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
