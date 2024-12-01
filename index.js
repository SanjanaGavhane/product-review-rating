class ProductReviewSystem {
  constructor() {
    this.reviews = [];
  }

  // Function to submit a review
  submitReview(rating, text, userId) {
    const review = {
      rating: rating,
      text: text,
      userId: userId,
      timestamp: new Date(),
    };
    this.reviews.push(review);
  }

  // Function to calculate average rating
  getAverageRating() {
    if (this.reviews.length === 0) return 0;
    let totalRating = this.reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    return (totalRating / this.reviews.length).toFixed(1);
  }

  // Function to render reviews
  renderReviews() {
    return this.reviews
      .map(
        (review, index) => `
          <div class="review" key=${index}>
              <p>User: ${review.userId}</p>
              <p>Rating: ${review.rating} stars</p>
              <p>Review: ${review.text}</p>
          </div>
      `
      )
      .join("");
  }
}

module.exports = ProductReviewSystem;
