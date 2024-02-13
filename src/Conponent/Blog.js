import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchPostsRequest } from '../redux/actions';
import '../Styled/Blog.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blog = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector(state => state.blog.blogPosts);
  // const loading = useSelector(state => state.blog.loading);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

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

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section className="it-blog">
      <div className="container">
        <Slider {...settings}>
          {blogPosts && blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <img src={post.imageUrl} alt={post.title} />
              <div className="post-info">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.link}>Read More</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Blog;
