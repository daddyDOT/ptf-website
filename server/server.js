const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/news.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'news.json'));
});

app.put('/news', (req, res) => {
    const {image, header, text} = req.body;
    fs.readFile(path.join(__dirname, 'news.json'), (err, data) => {
      if (err) {
        res.status(500).send('Error reading news data');
        return;
      }
      const dataNews = JSON.parse(data);
      dataNews.push({image, header, text});
      fs.writeFile(path.join(__dirname, 'news.json'), JSON.stringify( dataNews ), (err) => {
        if (err) {
          res.status(500).send('Error saving news');
          return;
        }
        res.status(200).json({ message: 'News saved successfully' });
      });
  });
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
