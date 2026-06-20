import React from 'react';
import './ReviewsSection.css';

// Import all star assets
import star1 from '../assets/Star-1.png';
import star1e from '../assets/Star-1-e.png';
import star2 from '../assets/Star-2.png';
import star2e from '../assets/Star-2-e.png';
import star3 from '../assets/Star-3.png';
import star3e from '../assets/Star-3-e.png';
import star4 from '../assets/Star-4.png';
import star4e from '../assets/Star-4-e.png';
import star5 from '../assets/Star-5.png';
import star5e from '../assets/Star-5-e.png';

const starAssets = {
  active: [star1, star2, star3, star4, star5],
  empty: [star1e, star2e, star3e, star4e, star5e]
};

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    rating: 5,
    text: 'Muthu transformed our website. The transition from Figma to clean React code was seamless, and the frontend performance increased drastically. A pleasure to work with!'
  },
  {
    id: 2,
    name: 'Alex Rivera',
    role: 'CTO, DevScale',
    rating: 5,
    text: 'The Spring Boot API Muthu designed is extremely robust and handles our dynamic user loads with ease. He has deep expertise in database modeling and REST integrations.'
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Founder, BloomSocial',
    rating: 4,
    text: 'Fantastic UI design implementation. Very fast turnaround and clean React components. Muthu was highly responsive and incorporated our design comments immediately.'
  },
  {
    id: 4,
    name: 'James Taylor',
    role: 'E-commerce Director',
    rating: 5,
    text: 'Highly competent developer. Built a full-stack solution that integrates smoothly with our MongoDB backend. The user flow is clean, intuitive, and lightning fast.'
  }
];

const ReviewsSection = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img key={i} src={starAssets.active[i]} alt="★" className="star-icon" />);
      } else {
        stars.push(<img key={i} src={starAssets.empty[i]} alt="☆" className="star-icon" />);
      }
    }
    return stars;
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="section-header">
        <span className="reviews-badge">Testimonials</span>
        <h2 className="section-title">What People Say</h2>
        <p className="section-subtitle">Read reviews from clients who partnered with me to build their products.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating-container">
              {renderStars(review.rating)}
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-user">
              <div className="user-avatar">
                {review.name.charAt(0)}
              </div>
              <div className="user-info">
                <h4 className="user-name">{review.name}</h4>
                <span className="user-role">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
