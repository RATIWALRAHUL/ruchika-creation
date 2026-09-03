const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const svg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <!-- Deep Royal Burgundy Circle -->
    <circle cx="256" cy="256" r="240" fill="#641C22" />
    
    <!-- Outer Gold Concentric Ring -->
    <circle cx="256" cy="256" r="230" fill="none" stroke="#D8BF96" stroke-width="8" />
    
    <!-- Inner Gold Concentric Ring -->
    <circle cx="256" cy="256" r="216" fill="none" stroke="#D8BF96" stroke-width="4" stroke-opacity="0.85" />
    
    <!-- Top Gold Star Accent -->
    <polygon points="256,58 262,72 276,78 262,84 256,98 250,84 236,78 250,72" fill="#D8BF96" />
    
    <!-- RC Serif Monogram in Warm Cream -->
    <text x="256" y="325" 
          font-family="'Cormorant Garamond', 'Playfair Display', Georgia, serif" 
          font-size="210" 
          font-weight="600" 
          fill="#FCFAF7" 
          text-anchor="middle" 
          letter-spacing="-8">RC</text>
          
    <!-- Bottom Gold Diamond Ornament -->
    <polygon points="256,432 263,440 256,448 249,440" fill="#D8BF96" />
  </svg>`;

  const svgBuffer = Buffer.from(svg);

  // 1. 512x512 High-Res PNG Icon
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile('src/app/icon.png');
  fs.copyFileSync('src/app/icon.png', 'public/icon.png');
  console.log('Created icon.png (512x512)');

  // 2. 180x180 Apple Touch Icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('src/app/apple-icon.png');
  fs.copyFileSync('src/app/apple-icon.png', 'public/apple-icon.png');
  console.log('Created apple-icon.png (180x180)');

  // 3. 48x48 Favicon ICO / PNG
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile('src/app/favicon.ico');
  fs.copyFileSync('src/app/favicon.ico', 'public/favicon.ico');
  console.log('Created favicon.ico (48x48)');
}

generateFavicon().catch(console.error);
