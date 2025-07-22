# 🏀 Bracket Madness

**_Where Bracketology Meets the Game._**  
A bold, interactive bracket game focused on women’s basketball — with live updates and evolving game modes.

## 📌 Overview
Bracket Madness is a web app that lets users create, submit, and track their picks for the NCAA March Madness basketball tournament. It supports multiple brackets per user, live scoring, and real tournament data integration. 

More than just a platform for managing and tracking picks, Bracket Madness is designed to support and grow women’s basketball by creating an engaging, accessible space for fans. It welcomes casual and dedicated followers alike, fostering community connection and offering a fresh way to experience basketball competitions — from collegiate tournaments to professional leagues.

Whether you’re here to organize your brackets, compete with friends, or simply celebrate the game, Bracket Madness provides an interactive, fan-driven platform dedicated to advancing women’s basketball.

## 👤 User Features
-  Create and manage multiple brackets
-  Track bracket performance against other users
-  Join od create private pool challenges to compete against friends
-  View live tournament results updated regularly

## ⚠️ Demo Mode Notice
This release of Bracket Madness is a fully functional demo designed to showcase core features and user experience only. 

In the full version, tournament results are imported into the backend database and then served to the app, but this data integration is not active in the demo. Instead, the demo focuses on front-end bracket management and navigation.

A full-featured release with complete backend support, live results, and expanded functionality is planned for the future.

<!--## 🚀 Live Site
👉 [Visit the app here](https://yourdomain.com)-->

## 🧱 Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js (via Next.js API routes)
- **Database:** MySQL
- **Auth:** JSON Web Tokens (JWT), stored securely in cookies
- **Data Sources:** Periodic sync from ESPN APIs
- **Background Jobs:** Cron jobs scheduled every 10 minutes to update results and sync data  


## 🧠 How It Works
- Tournament data is sourced from the ESPN API and updated in the database via scheduled cron jobs.
- User predictions (brackets) are stored in a relational MySQL database.
- Once games are played, results are processed and users are awarded points.
- Leaderboards and private pool rankings are dynamically calculated from prediction and scoring data.


### 🧱 System Architecture
- **Next.js API routes** handle backend logic and authentication.
- **MySQL database** stores users, brackets, predictions, results, and scoring.
- **Cron jobs** regularly pull tournament results and sync them to the database.
- Frontend and backend are unified within the same Next.js app for full-stack control.


### 📊 Scoring System
- ✅ 10 points awarded for each correct pick  
- 💥 Bonus points for selecting underdog winners  

## ✍️ Future Plans  
- [ ] **Game Mode** – Introduce a monetization layer where users can wager in app currency in pools and challenges for bragging rights or leaderboard boosts.  
- [ ] **Daily & Weekly Challenges** – Launch lightweight prediction games such as:  
  - Single-game winners  
  - Player of the Week picks (e.g., A vs B vs C)  
- [ ] **WNBA Playoffs Support** – Expand the platform to include a full bracket experience for the WNBA postseason.

## 📬 Contact & Credits

- **Creator:** Mary Boles  
- **Portfolio:** https://mbolesdev.vercel.app/ 
- **LinkedIn:** https://www.linkedin.com/in/mary-boles/  

---

## ⚖️ License

This project is **not open source** and all rights are reserved by the author.  

---

## 🙏 Credits

Built solely by Mary Boles. No external contributors at this time.
