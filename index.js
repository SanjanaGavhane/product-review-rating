import React, { Component } from "react";

class ProductReviewSystem extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  // Function to submit a review
  submitReview(rating, text, userId) {
    const review = {
      rating: rating,
      text: text,
      userId: userId,
      timestamp: new Date(),
    };

    this.setState((prevState) => ({
      reviews: [...prevState.reviews, review],
    }));
  }

  // Function to calculate average rating
  getAverageRating() {
    const { reviews } = this.state;
    if (reviews.length === 0) return 0;
    let totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  }

  // Function to render reviews
  renderReviews() {
    const { reviews } = this.state;
    return reviews.map((review, index) => (
      <div className="review" key={index}>
        <p>User: {review.userId}</p>
        <p>Rating: {review.rating} stars</p>
        <p>Review: {review.text}</p>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h2>Product Reviews</h2>
        <p>Average Rating: {this.getAverageRating()} stars</p>
        {this.renderReviews()}
      </div>
    );
  }
}

export default ProductReviewSystem;
