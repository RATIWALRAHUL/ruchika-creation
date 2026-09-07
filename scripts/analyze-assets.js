const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const kurtiDir = path.join(__dirname, '..', 'Assets', 'images', 'kurti');
const files = fs.readdirSync(kurtiDir);

files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

console.log('Total files:', files.length);

const nonPdfFiles = [];
const pdfPages = {};

files.forEach(f => {
  const match = f.match(/2-(\d+)/);
  if (match) {
    const pageNum = parseInt(match[1], 10);
    if (!pdfPages[pageNum]) pdfPages[pageNum] = [];
    pdfPages[pageNum].push(f);
  } else {
    nonPdfFiles.push(f);
  }
});

console.log('Non-page files:', nonPdfFiles);
console.log('Page numbers count:', Object.keys(pdfPages).length);

// Check if any page has multiple files
const multiFilePages = Object.entries(pdfPages).filter(([p, arr]) => arr.length > 1);
console.log('Pages with multiple files:', multiFilePages);
