// Testimonials.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTestimonialsData } from '../redux/actions';
import { testimonialsimg } from '../Images/Images';
import '../Styled/Testimoniral.css';

const Testimonials = () => {
  const testimonials = useSelector(state => state.testimonials.testimonials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestimonialsData());
  }, [dispatch]);

  return (
    <section className="it-testimonials">
      <div className="container">
        <div className='ImageContainer'>
          <img src={testimonialsimg} alt="testimonialsimg" />
        </div>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div className={`testimonial ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
              <div className="testimonial-info">
                <p className="quote">"{testimonial.quote}"</p>
                <p className="name">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
