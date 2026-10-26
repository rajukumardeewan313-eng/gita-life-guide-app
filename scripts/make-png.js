import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Function to generate raw uncompressed RGBA pixel buffer and output valid PNG file
function createGitaPng(width, height, isMaskable = false) {
  // RGBA buffer
  const buffer = Buffer.alloc(width * height * 4);

  const cx = width / 2;
  const cy = height / 2;
  const maxR = width / 2;
  const safeRadius = isMaskable ? maxR * 0.72 : maxR * 0.92;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      // Deep celestial navy background
      let r = 8 + Math.floor((1 - dist / width) * 15);
      let g = 14 + Math.floor((1 - dist / width) * 22);
      let b = 34 + Math.floor((1 - dist / width) * 40);
      let a = 255;

      // Outer gold rim
      if (Math.abs(dist - safeRadius) < 3.5) {
        r = 245; g = 158; b = 11;
      } else if (Math.abs(dist - (safeRadius - 10)) < 1.5) {
        r = 217; g = 119; b = 6;
      }

      // 12 radiating ray beams
      const rayAngle = (angle + Math.PI) / (Math.PI / 6);
      const rayFraction = Math.abs(rayAngle - Math.round(rayAngle));
      if (dist < safeRadius - 14 && dist > safeRadius * 0.55 && rayFraction < 0.05) {
        r = Math.min(255, r + 90);
        g = Math.min(255, g + 70);
        b = Math.min(255, b + 10);
      }

      // Central glowing aura
      const centerDist = dist / (safeRadius * 0.5);
      if (centerDist < 1.0) {
        const glow = Math.pow(1 - centerDist, 1.8);
        r = Math.min(255, Math.floor(r + 140 * glow));
        g = Math.min(255, Math.floor(g + 100 * glow));
        b = Math.min(255, Math.floor(b + 20 * glow));
      }

      // Lotus petal silhouette in center
      const petalDist = dist / (safeRadius * 0.38);
      const petalShape = Math.abs(Math.sin(angle * 4));
      if (petalDist < 0.85 + 0.15 * petalShape && petalDist > 0.15) {
        r = 245; g = 158; b = 11; // Gold
      }

      // Center Diya / eye
      if (dist < safeRadius * 0.18) {
        r = 254; g = 240; b = 138; // Bright warm golden light
      }

      buffer[idx] = r;
      buffer[idx + 1] = g;
      buffer[idx + 2] = b;
      buffer[idx + 3] = a;
    }
  }

  return encodePng(width, height, buffer);
}

// Minimal standard PNG encoder with zlib
function encodePng(width, height, rgbaBuffer) {
  // Scanline filter byte 0 + RGBA
  const rowSize = width * 4 + 1;
  const filteredData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    filteredData[y * rowSize] = 0; // Filter None
    rgbaBuffer.copy(filteredData, y * rowSize + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressed = zlib.deflateSync(filteredData, { level: 9 });

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // color type RGBA
  ihdrData[10] = 0; // compression method
  ihdrData[11] = 0; // filter method
  ihdrData[12] = 0; // interlace method
  const ihdrChunk = createPngChunk('IHDR', ihdrData);

  // IDAT
  const idatChunk = createPngChunk('IDAT', compressed);

  // IEND
  const iendChunk = createPngChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createPngChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const crcPayload = Buffer.concat([typeBuf, data]);
  const crc = crc32(crcPayload);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc >>> 0, 0);

  return Buffer.concat([lenBuf, crcPayload, crcBuf]);
}

// CRC32 implementation
function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }

  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), createGitaPng(192, 192, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), createGitaPng(512, 512, false));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), createGitaPng(512, 512, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createGitaPng(180, 180, false));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), createGitaPng(64, 64, false));

console.log('Successfully generated all PWA icons in /public:');
console.log('- pwa-192x192.png');
console.log('- pwa-512x512.png');
console.log('- pwa-maskable-512x512.png');
console.log('- apple-touch-icon.png');
console.log('- favicon.ico');
