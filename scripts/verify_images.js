const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, files);
    } else {
      files.push(filePath);
    }
  }
  return files;
}

const srcFiles = getFiles('src');
let invalidCount = 0;

srcFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const doubleMatches = content.match(/"\/images\/[^"]+"/g) || [];
  const singleMatches = content.match(/'\/images\/[^']+'/g) || [];
  const allMatches = [...doubleMatches, ...singleMatches];

  allMatches.forEach(m => {
    const cleanPath = m.replace(/["']/g, '');
    if (!cleanPath.startsWith('/images/kurti/') && !cleanPath.includes('logo') && !cleanPath.includes('skyline')) {
      console.log('Found non-kurti image reference:', f, '->', cleanPath);
      invalidCount++;
    }
  });
});

console.log('Total non-kurti/non-brand image references in src:', invalidCount);
