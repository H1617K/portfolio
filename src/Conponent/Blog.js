import React from 'react';
import { Link } from 'react-router-dom'; 
import Slider from 'react-slick'; // Import Slider from react-slick
import { CloudComputingGuide, WebDevelopmentTrends, contentonwebsites, futureofmobiledevelopment } from '../Images/Images';
import '../Styled/Blog.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "Top Trends in Web Development",
      excerpt: "Explore the latest trends shaping the web development landscape in 2024.",
      imageUrl: WebDevelopmentTrends,
      link: "/blog/top-trends-in-web-development"
    },
    {
      title: "The Future of Mobile App Development",
      excerpt: "Discover what's in store for mobile app development and how it's evolving.",
      imageUrl: futureofmobiledevelopment,
      link: "/blog/future-of-mobile-app-development"
    },
    {
      title: "Cloud Computing: A Comprehensive Guide",
      excerpt: "Learn all about cloud computing, its benefits, and how to leverage it for your business.",
      imageUrl: CloudComputingGuide,
      link: "/blog/cloud-computing-comprehensive-guide"
    },
    {
      title: "How to make content on websites more effective",
      excerpt: "In the blogosphere nowadays Content Marketing is a popular topic. When it comes to Inbound Marketing, Content is still a hugely effective tool.",
      imageUrl: contentonwebsites,
      link: "https://forcewebtech.com/blog/how-to-make-content-on-websites-more-effective/"
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section className="it-blog">
      <div className="container">
        {/* <h2>Blogs</h2>
        <br /> */}
        <Slider {...settings}> {/* Wrap your blog posts with Slider component and pass settings */}
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <img src={post.imageUrl} alt={post.title} />
              <div className="post-info">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={post.link}>Read More</Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Blog;
