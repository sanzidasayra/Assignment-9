
# IceNest - Subscription Box Service Platform

Welcome to **IceNest**, your gateway to discovering handpicked subscription boxes tailored to your interests! This platform helps users browse, subscribe, and manage personalized monthly subscription services with a user-friendly experience.

## 🌐 Live Link
[🔗 Visit IceNest Live](https://your-live-link.netlify.app)

## 📁 GitHub Repository
[📂 View GitHub Repo](https://github.com/your-username/icenest-subscription-box)

---

## 📌 Project Purpose

IceNest is a curated platform that allows users to explore a variety of themed subscription boxes—from local products to tech gadgets—delivered to their doorstep each month. The goal is to provide a smooth browsing and subscription experience with secure authentication and user profile management.

---

## 🚀 Key Features

- 🔐 **Authentication**
  - Email/password login & registration
  - Google Sign-in
  - Forgot password with Gmail redirection
  - Firebase-based `onAuthStateChanged` handling
- 📦 **Subscription Services**
  - JSON-driven subscription data
  - Dynamic cards with thumbnails, price, frequency, category, etc.
  - Protected detail pages with review and rating system
- 🎨 **Design & Responsiveness**
  - Fully responsive for mobile, tablet, and desktop
  - Unique, local-support inspired UI
  - Smooth navigation with protected and extra routes
- ⚙️ **User Profile**
  - Edit profile info (name & photoURL) via Firebase's `updateProfile()`
- 🔒 **Protected Routes**
  - Detail and profile pages restricted to authenticated users
- 🔄 **Routing & Dynamic Titles**
  - Page titles update dynamically per route
  - Error-free reloads on all SPA routes
- 👁️ **Password Visibility Toggle**
  - Show/hide password on registration
- 🔃 **Review System**
  - Users can add reviews and star ratings (1–5)

---

## 📱 Pages Overview

- **Home**: Slider + Subscription Services + 2 extra sections
- **Login / Register**
- **Forget Password**
- **Subscription Detail Page** (Protected)
- **My Profile** (Protected)
- **Extra Route** (Protected & Relevant)
- **404 Not Found**

---

## 🛠 Technologies & Packages Used

- **React.js** + **React Router DOM**
- **Firebase Authentication**
- **Tailwind CSS** + **DaisyUI**
- **Swiper Slider** *(for homepage carousel)*
- **React Toastify** *(for alerts)*
- **Hosted on Vercel**

---

## 🔐 Environment Variables

Please add your Firebase configuration keys in a `.env.local` file:

```bash
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
