const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\6106a303-e82b-4454-a4ab-736f31928c96\\media__1786472118990.jpg';
const destDir = path.join(__dirname, 'public');
const dest = path.join(destDir, 'czar-app-preview.jpg');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied Czar AI screenshot to:', dest);
} else {
  console.error('Source image not found:', src);
}
