# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:

It is unsafe to make requests to a third-party API directly from frontend JavaScript because the API key must be included in the client-side code. Since frontend code runs in the user’s browser, anyone can inspect it using developer tools and see the API key. This creates a security risk because a malicious user could copy the key and use it to send their own requests to the API. They could abuse the key, exceed the request limits, or generate charges on the developer’s account. This is why sensitive credentials should never be exposed in client-side code.

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:

The proxy server strategy involves sending requests from the frontend to your own backend server instead of directly to the third-party API. The backend server then forwards the request to the external API and includes the API key securely on the server side. Because the API key is stored on the server, it is never exposed to the client or visible in the browser. The frontend only communicates with the backend endpoint, such as `/api/gifs`. This allows the application to safely access APIs that require keys without revealing those keys to users.

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:

An environment variable is a variable stored outside of the application’s source code that contains configuration values, such as API keys or secret tokens. Developers store API keys in a `.env` file so that sensitive information is not hard-coded into the codebase. The `.gitignore` file is used to prevent the `.env` file from being committed to a Git repository and shared publicly. If the `.env` file were accidentally committed to GitHub, the API keys inside it could become publicly accessible. This could allow others to misuse the keys, potentially causing security issues or unexpected costs.
