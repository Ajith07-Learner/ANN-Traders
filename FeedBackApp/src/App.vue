<template>
  <div id="app">
    <FeedbackPage />
  </div>
</template>

<script>
import FeedbackPage from "./components/FeedbackForm.vue";

export default {
  name: "App",
  components: {
    FeedbackPage,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}
</style>
