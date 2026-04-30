import fs from 'fs';
const files = fs.readdirSync('public');
files.forEach(f => {
  if (f.endsWith('.jpg')) {
    const stat = fs.statSync(`public/${f}`);
    console.log(f, stat.size);
  }
});
