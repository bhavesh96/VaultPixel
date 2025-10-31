# VaultPixel

**VaultPixel** is a simple game discovery web app I built to explore how real-world projects connect with external APIs.  
It lets you search, filter, and browse video games using data from the free [RAWG.io](https://rawg.io/apidocs) API.

I wanted to work on something different from the usual “movie app” tutorials — something visual, data-rich, and a bit more fun.  
VaultPixel came out of that idea.

---

## Features

- 🔍 **Search games** by name  
- 🧩 **Filter by genre** (Action, RPG, Strategy, etc.)  
- 📱 **Responsive layout** built with Tailwind CSS  
- ⚡ **Fast data fetching** using the RAWG API  
- 📖 **Game detail pages** with screenshots, ratings, and platforms  
- ⏭️ **Pagination** for browsing popular games easily  

---

## Tech Stack

- **React + Vite** – frontend framework & build setup  
- **Tailwind CSS** – for styling and responsiveness  
- **RAWG API** – for game data  
- **React Router** – for navigation between pages  

---

## What I Learned

While building VaultPixel, I practiced:
- Working with an external REST API (handling queries, filters, and pagination)
- Managing app state with React hooks (`useState`, `useEffect`)
- Creating reusable components (search bar, game cards, filters)
- Handling responsive design with Tailwind utilities
- Cleaning up API calls and optimizing for user experience

It started as a small weekend project, but I ended up polishing it much more than I expected.

---

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/bhavesh96/VaultPixel.git

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file or change key in the root folder:
   ```bash
   VITE_RAWG_API_KEY=your_api_key_here

4. Run the project:
   ```bash
   npm run dev

Open http://localhost:5173 in your browser.

## About

I built VaultPixel to strengthen my understanding of React, REST APIs, and modern front-end development practices.
It’s not a huge project, but it reflects how I like to learn — by building things that look real and work smoothly.
Thank to [RAWG.io](https://rawg.io/apidocs)
