// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// 存储发布时间和评论
let postData = {
    postTime: null,
    comments: []
};

// 获取发布时间和评论
app.get('/api/data', (req, res) => {
    res.json(postData);
});

// 提交评论
app.post('/api/comment', (req, res) => {
    const { name, comment } = req.body;
    const time = new Date().toISOString();
    postData.comments.push({ name, comment, time });
    res.json({ success: true });
});

// 设置发布时间
app.post('/api/post-time', (req, res) => {
    const { postTime } = req.body;
    postData.postTime = postTime;
    res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});