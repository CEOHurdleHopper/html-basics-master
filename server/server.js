const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const db = new Database(path.join(__dirname, '../database/database.db'));

// Create SQL Table
db.prepare(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    status TEXT NOT NULL
  )
`).run();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..'))); // Serves root folder assets

// API Endpoints
app.post('/api/save', (req, res) => {
    const result = db.prepare("INSERT INTO posts (content, status) VALUES (?, 'draft')").run(req.body.content);
    res.json({ success: true });
});

// This function needs to ONLY happen when I pull up the last draft,
// So I need to make a Latest draft button for this to work with that button.
app.get('/api/latest', (req, res) => {
    const row = db.prepare("SELECT content FROM posts WHERE status = 'draft' ORDER BY id DESC LIMIT 1").get();
    res.json(row ? { found: true, content: row.content } : { found: false });
});

app.listen(3000, () => console.log('Server: http://localhost:3000/html_website/simple_blog_page.html'));
