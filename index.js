const cron = require('node-cron');
const express = require('express');
const fs = require('fs');
const app = express();

// node-cron  |  back up database automatically using sqlite
cron.schedule("* * * * *", () => {
  console.log('----------------');
  console.log('running cron job');
  fs.unlink("./error.log", err => {
    if (err) throw err;
    console.log('Error file succesfully deleted')
  })
})

app.listen(3001, () => {
  console.log(`I'm Listening.`)
})
