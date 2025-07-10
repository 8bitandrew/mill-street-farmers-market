import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your site URL
const siteUrl = 'https://millstreetfarmersmarket.com';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/vendors', changefreq: 'weekly', priority: 0.8 },
];

// Create a stream to write to
const sitemap = new SitemapStream({ hostname: siteUrl });

// Write the sitemap to a file
const writeStream = createWriteStream(join(process.cwd(), 'public', 'sitemap.xml'));
sitemap.pipe(writeStream);

// Add all routes to the sitemap
routes.forEach(route => {
  sitemap.write(route);
});

// End the stream
sitemap.end();

console.log('Sitemap generated successfully!');
