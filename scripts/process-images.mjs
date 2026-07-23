import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

const publicDir = path.join(process.cwd(), "public", "images");
const outputDir = path.join(publicDir, "optimized");

export const HERO_WIDTH = 471;
export const HERO_HEIGHT = 630;

async function loadHeroSource() {
  const input = path.join(publicDir, "hero-lawyer.png");
  // Strip black letterbox bars baked into the phone export
  return sharp(input).rotate().trim({ threshold: 12 });
}

async function enhanceHero() {
  const source = await loadHeroSource();
  const meta = await source.metadata();
  const width = meta.width ?? HERO_WIDTH;
  const height = meta.height ?? HERO_HEIGHT;

  console.log(`Hero trimmed: ${width}×${height}`);

  const enhance = (w, h) =>
    source
      .clone()
      .resize(w, h, { kernel: sharp.kernel.lanczos3, fit: "fill" })
      .normalize()
      .sharpen({ sigma: 0.8 });

  await enhance(width, height)
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(outputDir, "hero-1x.webp"));

  await enhance(width * 2, height * 2)
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(outputDir, "hero-enhanced.webp"));

  console.log(`Saved hero-1x.webp (${width}×${height})`);
  console.log(`Saved hero-enhanced.webp (${width * 2}×${height * 2})`);
}

function enhancePipeline(image, { width, height, fit = "inside" } = {}) {
  let p = image;
  if (width || height) {
    p = p.resize(width, height, {
      fit,
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    });
  }
  return p
    .normalize()
    .modulate({ brightness: 1.04, saturation: 1.1 })
    .sharpen({ sigma: 1.1, m1: 0.5, m2: 2.5 });
}

async function saveWebp(pipeline, outputPath, quality = 93) {
  await pipeline.webp({ quality, effort: 6 }).toFile(outputPath);
}

async function enhanceOfficeImage(filename, { objectFocus = "centre" } = {}) {
  const input = path.join(publicDir, filename);
  const baseName = filename.replace(/\.(png|jpe?g)$/i, "");
  const meta = await sharp(input).rotate().metadata();
  const { width = 1024, height = 768 } = meta;

  await saveWebp(
    enhancePipeline(sharp(input).rotate(), {
      width: 1600,
      height: 1000,
      fit: "cover",
    }),
    path.join(outputDir, `${baseName}.webp`),
  );
  console.log(`Enhanced: ${baseName}.webp`);

  if (objectFocus === "portrait") {
    const pipeline =
      height > width
        ? sharp(input).rotate()
        : sharp(input)
            .rotate()
            .extract({
              left: Math.max(0, Math.round((width - Math.round(height * 0.75)) / 2)),
              top: 0,
              width: Math.min(width, Math.round(height * 0.75)),
              height,
            });

    await saveWebp(
      enhancePipeline(pipeline, { width: 800, height: 1000, fit: "cover" }),
      path.join(outputDir, `${baseName}-portrait.webp`),
    );
    console.log(`Enhanced: ${baseName}-portrait.webp`);
  }
}

const officeImages = [
  { file: "office-reception.png", focus: "centre" },
  { file: "office-cabin.png", focus: "portrait" },
  { file: "office-library.png", focus: "portrait" },
  { file: "office-waiting-navy.png", focus: "portrait" },
];

await mkdir(outputDir, { recursive: true });
await enhanceHero();
for (const { file, focus } of officeImages) {
  await enhanceOfficeImage(file, { objectFocus: focus });
}

console.log("\nDone.");
