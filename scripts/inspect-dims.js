const fs = require('fs');
const path = require('path');

function getDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.length < 24) return null;
  
  // PNG
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    return {
      type: 'png',
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  // JPEG
  if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xFF) break;
      const marker = buffer[offset + 1];
      if (marker === 0xC0 || marker === 0xC2) { // SOF0 or SOF2
        return {
          type: 'jpeg',
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }
      const len = buffer.readUInt16BE(offset + 2);
      offset += 2 + len;
    }
  }

  return null;
}

const kurtiDir = path.join(__dirname, '..', 'Assets', 'images', 'kurti');
const files = fs.readdirSync(kurtiDir);
files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

const report = [];
for (const file of files) {
  const full = path.join(kurtiDir, file);
  const stat = fs.statSync(full);
  const dims = getDimensions(full);
  report.push({
    file,
    sizeKb: Math.round(stat.size / 1024),
    dims: dims ? `${dims.width}x${dims.height}` : 'unknown',
    type: dims ? dims.type : 'unknown'
  });
}

console.log('Sample dimensions of first 30 images:');
console.table(report.slice(0, 30));

console.log('Sample dimensions of last 30 images:');
console.table(report.slice(report.length - 30));
