<template>
  <div class="app-container">
    <header class="header">
      <div class="logo">ANN TRADERS</div>
      <div class="search-bar">
  <input type="text" placeholder="Search..." v-model="searchQuery" />
</div>

      <div class="cart-icon">
        <img src="../assets/icons/cart.png" alt="Cart" />
      </div>
    </header>

    <main class="main-content">
      <div class="feedback-page">
        <h1>Submit Your Feedback</h1>
        <form @submit.prevent="submitFeedback">
          <textarea
            v-model="feedbackText"
            placeholder="Write your feedback here..."
            required
          ></textarea>

          <div class="rating-section">
            <label for="rating">Rate Us:</label>
            <div class="stars">
              <span 
                v-for="star in 5" 
                :key="star" 
                class="star" 
                :class="{ 'filled': star <= rating }"
                @click="setRating(star)"
              >&#9733;</span>
            </div>
          </div>

          <div class="upload-section">
            <label for="media-upload">Upload Image:</label>
            <input
              type="file"
              id="media-upload"
              accept="image/*,video/*"
              @change="handleFileUpload"
            />
            <p v-if="file">Selected File: {{ file.name }}</p>
          </div>

          <button type="submit">Submit</button>
        </form>

        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <!-- <p v-if="submittedRating" class="submitted-rating">Your Rating: {{ submittedRating }} Stars</p> -->
      </div>
    </main>

    <footer class="footer">
      <p><a href="#">About</a> | <a href="#">Contact</a></p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      feedbackText: "",
      rating: 0,
      file: null,
      successMessage: "",
      errorMessage: "",
      searchQuery: "",
      submittedRating: null,
    };
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
    handleFileUpload(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.file = selectedFile;
      }
    },
    async submitFeedback() {
      if (!this.rating) {
        this.errorMessage = "Please provide a rating.";
        return;
      }
      this.errorMessage = "";

      // const formData = new FormData();
      // formData.append("feedback", this.feedbackText);
      // formData.append("rating", this.rating);
      // if (this.file) {
      //   formData.append("media", this.file);
      // }

      const payload = {
    feedback: this.feedbackText,
    rating: this.rating,
    media: this.file || "", // Send Base64 or empty string if no file
  };

      try {
     const response = await axios.post(
      // "https://4p12zrz1el.execute-api.ap-south-1.amazonaws.com/prod",
      "https://8mx2ah7hll.execute-api.us-east-1.amazonaws.com/prod",
      payload,
      {
        headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",  // Add this header if needed on the backend
      },
      }
    );

      // Reset form and show success message
      this.submittedRating = this.rating;
      this.feedbackText = "";
      this.rating = 0;
      this.file = null;
      }catch (error){
          console.error("Error submitting feedback", error);
      }

      const fileInput = document.getElementById("media-upload");
      if (fileInput) {
        fileInput.value = "";
      }

      this.successMessage = "Feedback submitted successfully!";
    },
    search() {
      alert(`Searching for: ${this.searchQuery}`);
    }
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 30px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(135deg, #6a1b9a, #d32f2f);
  -webkit-background-clip: text;
  background-clip: text;
  font-family: 'Montserrat', sans-serif;
  text-indent: 20px;
}
.search-bar {
  position: relative;
  width: 100%;
  max-width: 600px; /* Adjust width as needed */
  margin: 0 auto;
}

.search-bar input {
  width: 80%;
  padding: 10px 20px 10px 10px; /* Extra space for the icon */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  text-indent: 2px;
}

.search-bar input::placeholder {
  color: #999;
}

.search-bar input[type="text"] {
  background-image: url('../assets/icons/search.png'); /* Path to your icon */
  background-position: right 10px center; /* Position the icon on the right side */
  background-repeat: no-repeat;
  background-size: 25px 25px; /* Resize the icon */
}


.cart-icon img {
  width: 50px;
  cursor: pointer;
  margin-right: 20px;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.feedback-page {
  width: 80%; /* Set the width to a percentage to allow dynamic resizing */
  max-width: 600px; /* Max width to control the maximum expansion */
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  background: radial-gradient(circle, #ffffff, #e8e8e8, #dcdcdc);
}

form {
  display: flex;
  flex-direction: column;
}

textarea {
  width: 100%;
  height: 100px;
  margin-right: 20px; /* Right margin */
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box; /* Ensures padding and borders are included in width calculation */
}


.rating-section {
  margin-bottom: 15px;
}

.stars {
  display: flex;
  gap: 5px;
  cursor: pointer;
}

.star {
  font-size: 24px;
  color: #ccc;
}

.star.filled {
  color: #ffc107;
}

.upload-section {
  margin-bottom: 15px;
}

input[type="file"] {
  margin-top: 10px;
}

button {
  padding: 10px 15px;
  border: none;
  background-color: #2884a3;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.success-message {
  margin-top: 15px;
  text-align: center;
  color: #28a745;
  font-weight: bold;
}

.submitted-rating {
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  color: #333;
}

.footer {
  text-align: center;
  font-size: 14px;
  color: #555;
  padding: 10px 0;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
}

.footer a {
  color: #007bff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
