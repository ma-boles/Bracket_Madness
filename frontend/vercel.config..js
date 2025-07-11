export default {
  cron: [
    // First Four
    {
      path: "/api/updateScores",
      schedule: "*/10 23,0-2 20-21 3 *",
      headers: { Authorization: "Bearer your-secret" }
    },
    // Rd 1
    {
      path: "/api/updateScores",
      schedule: "*/10 16-23,0-6 23-25 3 *",
      headers: { Authorization: "Bearer your-secret" }
    },
    // Rd 2
    {
      path: "/api/updateScores",
      schedule: "*/10 16-23,0-6 25-27 3 *",
      headers: { Authorization: "Bearer your-secret" }
    },
    // Sweet 16
    {
      path: "/api/updateScores",
      schedule: "*/10 17-23,0-6 28-30 3 *",
      headers: { Authorization: "Bearer your-secret" }
    },
    // Elite 8 night 1
    {
      path: "/api/updateScores",
      schedule: "*/10 17-22 30 3 *",
      headers: { Authorization: "Bearer your-secret" }
    },
    // Elite 8 night 2
    {
      path: "/api/updateScores",
      schedule: "*/10 23 31 3 *",
      headers: { Authorization: "Bearer your-secret" }
    },
    // Elite 8 night 2 pt 2
    {
      path: "/api/updateScores",
      schedule: "*/10 0-4 1 4 *",
      headers: { Authorization: "Bearer your-secret" }
    },
    // Final 4
    {
      path: "/api/updateScores",
      schedule: "*/10 0-5 5 4 *",
      headers: { Authorization: "Bearer your-secret" }
    },
    // Championship
    {
      path: "/api/updateScores",
      schedule: "*/10 20-22 6 4 *",
      headers: { Authorization: "Bearer your-secret" }
    },


    // Test cron job: runs every 5 minutes
    {
      path: "/api/testCron",
      schedule: "*/5 * * * *"
    }
  ],

  // You can add other vercel.json config keys here too
  redirects: [
    {
      source: "/old-route",
      destination: "/new-route",
      permanent: true
    }
  ]
};
