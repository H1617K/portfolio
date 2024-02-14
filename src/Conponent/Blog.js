import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess } from '../redux/actions';
import '../Styled/Blog.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector(state => state.blog.blogPosts);
  // const loading = useSelector(state => state.blog.loading);

  useEffect(() => {
    dispatch(fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
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
