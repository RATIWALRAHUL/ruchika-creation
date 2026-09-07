const fs = require('fs');
const path = require('path');

const kurtiDir = path.join(__dirname, '..', 'public', 'images', 'kurti');
const files = fs.readdirSync(kurtiDir);

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
const sortedFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.png')).sort(collator.compare);

console.log('Total files:', sortedFiles.length);
sortedFiles.forEach(f => {
  console.log(f);
});
