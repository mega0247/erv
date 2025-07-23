// generate-sitemap.js

const fs = require('fs');
const pages = [
  '',
  'about',
  'services',
  'contact',
  'privacy',
];

const domain = 'https://yourdomain.com'; // change to your live domain

const urls = pages.map(page => `
  <url>
    <loc>${domain}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urls}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap.trim());
console.log('✅ Sitemap generated successfully.');
