# 🏀 Bracket Madness

**_Where Bracketology Meets the Game._**  
A bold, interactive bracket game focused on women’s basketball — with live updates and evolving game modes.

## 📌 Overview
Bracket Madness is a web app that lets users create, submit, and track their picks for the NCAA March Madness basketball tournament. It supports multiple brackets per user, live scoring, and real tournament data integration. 

More than just a platform for managing and tracking picks, Bracket Madness is designed to support and grow women’s basketball by creating an engaging, accessible space for fans. It welcomes casual and dedicated followers alike, fostering community connection and offering a fresh way to experience basketball competitions — from collegiate tournaments to professional leagues.

Whether you’re here to organize your brackets, compete with friends, or simply celebrate the game, Bracket Madness provides an interactive, fan-driven platform dedicated to advancing women’s basketball.

<!--## 🚀 Live Site
👉 [Visit the app here](https://yourdomain.com)-->

## 👤 User Features
-  Create and manage multiple brackets
-  Track bracket performance against other users
-  Join od create private pool challenges to compete against friends
-  View live tournament results updated regularly

## ⚠️ Demo Mode Notice

This release of Bracket Madness is a fully functional demo designed to showcase core features and user experience only. 

In the full version, tournament results are imported into the backend database and then served to the app, but this data integration is not active in the demo. Instead, the demo focuses on front-end bracket management and navigation.

A full-featured release with complete backend support, live results, and expanded functionality is planned for the future.

## 🧠 How It Works
- Tournament data is sourced from ESPN and automatically updates results.
- The app calculates winners and updates bracket standings.
- Predictions are locked once the tournament begins.

## 🧱 Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js (Next.js API routes)
- **Database:** MySQL
- **Auth:** JWT (stored securely in cookies)
- **Data Sources:** ESPN API

## 📂 Database Schema
Key tables include:
- `users`: Registered users
- `brackets`: Bracket metadata
- `predictions`: User picks for each game
- `results`: Actual game outcomes
- `teams`: Teams participating in the tournament
- `points`: Scoring per game per user per bracket

## 📊 Scoring System
Points are awarded as follows:
- All correct picks awarded with 10 points.
- *Bonuses* awarded for underdog picks.

<!--## ✍️ Roadmap
- [ ] Mobile support
- [ ] Public bracket sharing
- [ ] Realtime updates via WebSockets
- [ ] Admin dashboard-->

<!--## 🙌 Acknowledgments
- ESPN for game data
- Open source libraries like React, Tailwind, and NextAuth-->

<!--## 📫 Contact
Have questions or feedback? Reach me on [GitHub](https://github.com/yourusername) or via email at your@email.com.-->
