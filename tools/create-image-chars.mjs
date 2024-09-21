import sharp from "sharp";
import * as fs from "node:fs";

if (process.argv.length < 3) {
  console.log('no filepath was given');
  process.exit(1);
}

if (process.argv.length < 4) {
  console.log('no output file was given')
  process.exit(1);
}

if (process.argv.length < 5) {
  console.log('no result width given');
  process.exit(1);
}

if (process.argv.length < 6) {
  console.log('no result height given');
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const charWidth = parseInt(process.argv[4], 10);
const charHeight = parseInt(process.argv[5], 10);

async function getFlattenedBuffer(s) {
  const {
    data,
    info
  } = await s
    .raw()
    .toBuffer({
      resolveWithObject: true
    });

  const {
    width,
    height,
    channels
  } = info;

  const points = new Uint8Array(width * height);

  for (let i = 0; i < data.length; i++) {
    points[i] = data[i] > 0 ? 1 : 0
  }

  return points;
}

function toBase64(data) {
  let binStr = '';

  for (let i = 0; i < data.length; i++) {
    binStr += String.fromCharCode(data[i]);
  }

  return btoa(binStr);
}

const s = await sharp(inputFile)
  .trim({
    background: {
      r: 0,
      g: 0,
      b: 0,
      alpha: 0
    }
  })
  .toColourspace('b-w');

const frames = [];

for (let i = 0; i < 15; i++) {
  const stmp = s/*.rotate(
    i * (360 / 15),
    {
      background: {
        r: 0,
        g: 0,
        b: 0,
        alpha: 0
      }
    })*/
    .affine([
      Math.cos(i * (360 / 15)),
      -Math.sin(i * (360 / 15)),
      Math.sin(i * (360 / 15)),
      Math.cos(i * (360 / 15))
    ])
    .resize(charWidth, charHeight, {
      fit: 'fill',
      background: {
        r: 0,
        g: 0,
        b: 0,
        alpha: 0
      }
    });
  frames.push(
    await getFlattenedBuffer(
      stmp
    )
  );
  await stmp.png()
    .toFile(`test_${i}.png`);
}

const tsResult = `
export const ANIMATION: {
  width: number,
  height: number,
  frames: readonly string[]
} = {
  width: ${charWidth},
  height: ${charHeight},
  frames: [
    ${frames.map(x => `'${toBase64(x)}'`).join(',\n    ')}
  ]
}
`;

fs.writeFileSync(outputFile, tsResult);
