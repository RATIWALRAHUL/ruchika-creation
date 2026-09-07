const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const kurtiDir = path.join(__dirname, '..', 'Assets', 'images', 'kurti');
const files = fs.readdirSync(kurtiDir);

console.log('Total files in Assets/images/kurti:', files.length);

// Analyze patterns
const patternMap = {};
files.forEach(file => {
  const match = file.match(/2-(\d+)/);
  const pageNum = match ? parseInt(match[1], 10) : file;
  if (!patternMap[pageNum]) patternMap[pageNum] = [];
  patternMap[pageNum].push(file);
});

console.log('Unique page identifiers:', Object.keys(patternMap).length);

// Let's print out all files grouped by page number
const sortedPages = Object.keys(patternMap).sort((a, b) => {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);
  if (isNaN(numA) || isNaN(numB)) return a.localeCompare(b);
  return numA - numB;
});

console.log('Sorted page keys:', sortedPages);
