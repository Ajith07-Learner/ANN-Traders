<template>
  <div class="feedback-page">
    <h1>Submit Your Feedback</h1>
    <form @submit.prevent="submitFeedback">
      <textarea
        v-model="feedbackText"
        placeholder="Write your feedback here..."
        required
      ></textarea>

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
</template>

<script>
export default {
  data() {
    return {
      feedbackText: "",
      file: null,
      successMessage: "",
    };
  },
  methods: {
    handleFileUpload(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.file = selectedFile;
      }
    },
    submitFeedback() {
      // Simulate form submission
      const formData = new FormData();
      formData.append("feedback", this.feedbackText);
      if (this.file) {
        formData.append("media", this.file);
      }

      // Simulate sending data to the server
      console.log("Form Data Submitted:", this.feedbackText, this.file);

      // Reset form and show success message
      this.feedbackText = "";
      this.file = null;

      const fileInput = document.getElementById("media-upload");
  if (fileInput) {
    fileInput.value = "";
  }

      this.successMessage = "Feedback submitted successfully!";
    },
  },
};
</script>

<style scoped>
.feedback-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  font-size: 14px;
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
  background-color: #28a745;
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

</style>
