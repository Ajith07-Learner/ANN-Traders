<template>
  <div class="app-container">
    <header class="header">
      <div class="logo">ANN TRADERS</div>

      <nav class="nav">
        <a href="#products" class="nav-link">Products</a>
        <a href="#feedback" class="nav-link">Feedback</a>
      </nav>

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
            placeholder="Leave your feedback here.."
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
      </div>
    </main>

    <footer class="footer">
      <p><a href="#">About</a> | <a href="#">Contact</a></p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      feedbackText: "",
      rating: 0,
      file: null,
      successMessage: "",
      errorMessage: "",
      searchQuery: "",
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

      const payload = {
        feedback: this.feedbackText,
        rating: this.rating,
        media: this.file || "",
      };

      try {
        const response = await axios.post(
          "https://8mx2ah7hll.execute-api.us-east-1.amazonaws.com/prod",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        this.feedbackText = "";
        this.rating = 0;
        this.file = null;

        const fileInput = document.getElementById("media-upload");
        if (fileInput) {
          fileInput.value = "";
        }

        this.successMessage = "Feedback submitted successfully!";
      } catch (error) {
        console.error("Error submitting feedback", error);
      }
    },
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
  font-family: "Montserrat", sans-serif;
  margin-right: 50px; /* Add space between logo and tabs */
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}

.search-bar {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.search-bar input {
  width: 80%;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-bar input::placeholder {
  color: #999;
}

.cart-icon img {
  width: 50px;
  cursor: pointer;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.feedback-page {
  width: 90%;
  max-width: 700px;
  padding: 15px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
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
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.rating-section {
  margin-bottom: 15px;
}

.stars {
  display: flex;
  gap: 5px;
}

.star {
  font-size: 24px;
  color: #ccc;
  cursor: pointer;
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
