const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const kurtiDir = path.join(__dirname, '..', 'Assets', 'images', 'kurti');
const files = fs.readdirSync(kurtiDir);

// Check multi versions for same page
const pages = {};
files.forEach(f => {
  const match = f.match(/2-(\d+)/);
  if (match) {
    const pageNum = parseInt(match[1], 10);
    if (!pages[pageNum]) pages[pageNum] = [];
    pages[pageNum].push(f);
  }
});

Object.entries(pages).forEach(([p, list]) => {
  if (list.length > 1) {
    console.log(`Page ${p} has ${list.length} files:`, list);
  }
});
