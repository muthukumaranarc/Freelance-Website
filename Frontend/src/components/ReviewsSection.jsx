import React, { useState } from 'react';
import './ReviewsSection.css';

const initialReviews = [
  {
    id: 1,
    name: 'Kumar',
    role: 'Co-founder, Spark tex',
    rating: 5,
    starColor: '#0026e6',
    text: "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
    avatar: null
  },
  {
    id: 2,
    name: 'Praveen',
    role: 'CEO of EcoSys',
    rating: 4,
    starColor: '#9327e2',
    text: "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way presents content in an interactive and interesting.",
    avatar: null
  },
  {
    id: 3,
    name: 'Rejech',
    role: 'Student at KSRCT',
    rating: 5,
    starColor: '#f39c12',
    text: "Thanks feed spring! It's the perfect tool for our business to show reviews and gain our customers trust. Feed spring is awesome! It connects reviews and gain our customers trust. directly to your Google business account for live, real content",
    avatar: null
  },
  {
    id: 4,
    name: 'Suriya Kumar',
    role: 'Co-founder, Spark tex',
    rating: 4,
    starColor: '#5fa85f',
    text: "It's intuitive, functional, easy-to-setup and interesting way.",
    avatar: null
  },
  {
    id: 5,
    name: 'Kamelish',
    role: 'Bakery shop owner',
    rating: 4,
    starColor: '#5fa85f',
    text: "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way presents content in an interactive and interesting way.",
    avatar: null
  },
  {
    id: 6,
    name: 'Dhoni',
    role: 'Student at KSTCE',
    rating: 4,
    starColor: '#f39c12',
    text: "It's intuitive, functional, easy-to-setup and interesting way.",
    avatar: null
  }
];

const STAR_COLORS = ['#0026e6', '#9327e2', '#f39c12', '#5fa85f'];

const RATING_LABELS = ['', 'Terrible', 'Poor', 'Okay', 'Good', 'Excellent'];

const ReviewsSection = () => {
  const [reviewList, setReviewList] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Working');
  const [companyOrStudying, setCompanyOrStudying] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [photo, setPhoto] = useState(null);

  const renderStars = (ratingVal, color) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < ratingVal) {
        stars.push(<span key={i} className="star-char filled" style={{ color }}>★</span>);
      } else {
        stars.push(<span key={i} className="star-char empty" style={{ color }}>☆</span>);
      }
    }
    return stars;
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !companyOrStudying || !reviewText || !rating) {
      alert('Please fill out all required fields and select a star rating.');
      return;
    }

    const randomColor = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
    const roleText = status === 'Working' ? companyOrStudying : `Student at ${companyOrStudying}`;

    const newReview = {
      id: Date.now(),
      name,
      role: roleText,
      rating: parseInt(rating),
      starColor: randomColor,
      text: reviewText,
      avatar: photo
    };

    setReviewList([newReview, ...reviewList]);

    // Reset Form & Close Modal
    setName('');
    setStatus('Working');
    setCompanyOrStudying('');
    setRating(0);
    setHoverRating(0);
    setReviewText('');
    setPhoto(null);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Helper to split array into 3 columns dynamically for masonry
  const getColumns = () => {
    const col1 = [];
    const col2 = [];
    const col3 = [];

    reviewList.forEach((review, index) => {
      if (index % 3 === 0) {
        col1.push(review);
      } else if (index % 3 === 1) {
        col2.push(review);
      } else {
        col3.push(review);
      }
    });

    return [col1, col2, col3];
  };

  const [col1, col2, col3] = getColumns();

  const activeRating = hoverRating || rating;

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-header-container">
        <div className="reviews-header-left">
          <h2 className="reviews-main-title">What people say</h2>
          <p className="reviews-subtitle">A few thoughts from people who have experienced the value of working together.</p>
        </div>
        <button className="add-review-btn" onClick={() => setIsModalOpen(true)}>Add Review</button>
      </div>

      <div className="reviews-masonry">
        <div className="reviews-col">
          {col1.map((review) => (
            <div key={review.id} className="review-card-custom">
              <div className="rating-container-custom">
                {renderStars(review.rating, review.starColor)}
              </div>
              <p className="review-text-custom">"{review.text}"</p>
              <div className="review-user-custom">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="user-avatar-custom image-avatar" />
                ) : (
                  <div className="user-avatar-custom gray-avatar"></div>
                )}
                <div className="user-info-custom">
                  <h4 className="user-name-custom">{review.name}</h4>
                  <span className="user-role-custom">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-col">
          {col2.map((review) => (
            <div key={review.id} className="review-card-custom">
              <div className="rating-container-custom">
                {renderStars(review.rating, review.starColor)}
              </div>
              <p className="review-text-custom">"{review.text}"</p>
              <div className="review-user-custom">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="user-avatar-custom image-avatar" />
                ) : (
                  <div className="user-avatar-custom gray-avatar"></div>
                )}
                <div className="user-info-custom">
                  <h4 className="user-name-custom">{review.name}</h4>
                  <span className="user-role-custom">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-col">
          {col3.map((review) => (
            <div key={review.id} className="review-card-custom">
              <div className="rating-container-custom">
                {renderStars(review.rating, review.starColor)}
              </div>
              <p className="review-text-custom">"{review.text}"</p>
              <div className="review-user-custom">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="user-avatar-custom image-avatar" />
                ) : (
                  <div className="user-avatar-custom gray-avatar"></div>
                )}
                <div className="user-info-custom">
                  <h4 className="user-name-custom">{review.name}</h4>
                  <span className="user-role-custom">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Share Your Feedback</h3>
              <button className="close-modal-btn" onClick={closeModal}>×</button>
            </div>
            <form onSubmit={handleSubmit} className="review-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kumar"
                  required
                />
              </div>

              <div className="form-group">
                <label>Are you working or studying? *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Working"
                      checked={status === 'Working'}
                      onChange={() => {
                        setStatus('Working');
                        setCompanyOrStudying('');
                      }}
                    />
                    Working
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Studying"
                      checked={status === 'Studying'}
                      onChange={() => {
                        setStatus('Studying');
                        setCompanyOrStudying('');
                      }}
                    />
                    Studying
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>
                  {status === 'Working' ? 'Name of the Company *' : 'What are you studying? *'}
                </label>
                <input
                  type="text"
                  value={companyOrStudying}
                  onChange={(e) => setCompanyOrStudying(e.target.value)}
                  placeholder={status === 'Working' ? 'e.g. Spark tex / CEO of EcoSys' : 'e.g. B.Tech IT / Computer Science'}
                  required
                />
              </div>

              {/* ── Interactive Star Rating ── */}
              <div className="form-group">
                <label>Your Rating *</label>
                <div className="star-picker-wrapper">
                  <div className="star-picker">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= activeRating ? 'star-active' : ''}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <span className="star-label">
                    {activeRating ? RATING_LABELS[activeRating] : 'Tap a star to rate'}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label>Review Description *</label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write your review here..."
                  rows={4}
                  required
                />
              </div>

              <div className="form-group">
                <label>Profile Picture (Optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                <button type="submit" className="submit-btn">Post Review</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
