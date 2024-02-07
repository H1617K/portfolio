import React from 'react';
import { CloudComputingGuide, WebDevelopmentTrends, futureofmobiledevelopment } from '../Images/Images';

const Blog = () => {
  const blogPosts = [
    {
      title: "Top Trends in Web Development",
      excerpt: "Explore the latest trends shaping the web development landscape in 2024.",
      imageUrl: WebDevelopmentTrends,
      // link: "/blog/top-trends-in-web-development"
    },
    {
      title: "The Future of Mobile App Development",
      excerpt: "Discover what's in store for mobile app development and how it's evolving.",
      imageUrl: futureofmobiledevelopment,
      // link: "/blog/future-of-mobile-app-development"
    },
    {
      title: "Cloud Computing: A Comprehensive Guide",
      excerpt: "Learn all about cloud computing, its benefits, and how to leverage it for your business.",
      imageUrl: CloudComputingGuide,
      // link: "/blog/cloud-computing-comprehensive-guide"
    },
  ];

  return (
    <section className="it-blog">
      <div className="container">
        <h2>IT Blog</h2>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <img src={post.imageUrl} alt={post.title} />
              <div className="post-info">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                {/* <a href={post.link}>Read More</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
