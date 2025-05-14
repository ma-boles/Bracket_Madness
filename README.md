# 🏀 Bracket Madness

## 📌 Overview
Bracket Madness is a web app that lets users create, submit, and track their picks for the NCAA March Madness basketball tournament. It supports multiple brackets per user, live scoring, and real tournament data integration.

<!--## 🚀 Live Site
👉 [Visit the app here](https://yourdomain.com)-->

## 👤 User Features
-  Sign up and log in securely
-  Create and manage multiple brackets
-  Track bracket performance against other users
-  View live tournament results

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
