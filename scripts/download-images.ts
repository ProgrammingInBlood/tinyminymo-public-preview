import { mkdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';

const images = {
  hero: {
    path: 'public/hero-banner.jpg',
    text: 'Special Offers',
    width: 1920,
    height: 820,
  },
  products: [
    {
      path: 'public/products/shin-chan-lamp.jpg',
      text: 'Cute Lamp',
      width: 600,
      height: 600,
    },
    {
      path: 'public/products/shin-chan-figure.jpg',
      text: 'Anime Figure',
      width: 600,
      height: 600,
    },
    {
      path: 'public/products/sanrio-figure.jpg',
      text: 'Kawaii Figure',
      width: 600,
      height: 600,
    },
    {
      path: 'public/products/pochacco-toy.jpg',
      text: 'Plush Toy',
      width: 600,
      height: 600,
    },
  ],
  categories: [
    {
      path: 'public/categories/for-him.jpg',
      text: 'Gifts for Him',
      width: 800,
      height: 600,
    },
    {
      path: 'public/categories/for-her.jpg',
      text: 'Gifts for Her',
      width: 800,
      height: 600,
    },
    {
      path: 'public/categories/for-kids.jpg',
      text: 'Gifts for Kids',
      width: 800,
      height: 600,
    },
    {
      path: 'public/categories/birthday.jpg',
      text: 'Birthday Gifts',
      width: 800,
      height: 600,
    },
  ],
};

async function downloadImage(image: { path: string; text: string; width: number; height: number }) {
  console.log(`Downloading ${image.path}...`);
  const dir = dirname(image.path);
  await mkdir(dir, { recursive: true });

  const bgColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  const url = `https://placehold.co/${image.width}x${image.height}/${bgColor}/ffffff/png?text=${encodeURIComponent(image.text)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const buffer = await response.arrayBuffer();
    await writeFile(image.path, Buffer.from(buffer));
    console.log(`✓ Downloaded ${image.path}`);
  } catch (error) {
    console.error(`✗ Failed to download ${image.path}:`, error);
  }
}

async function main() {
  const publicDir = join(process.cwd(), 'public');
  
  // Create directories if they don't exist
  await mkdir(join(publicDir, 'products'), { recursive: true });
  await mkdir(join(publicDir, 'categories'), { recursive: true });

  // Download hero image
  await downloadImage(images.hero);

  // Download product images
  for (const product of images.products) {
    await downloadImage(product);
  }

  // Download category images
  for (const category of images.categories) {
    await downloadImage(category);
  }
}

main().catch(console.error); 