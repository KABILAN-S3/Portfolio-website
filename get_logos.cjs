const https = require('https');

https.get('https://rmcrc.org', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = data.match(/<img[^>]+src="([^">]+)"/g);
    console.log("RMCRC Images:", urls?.filter(u => u.toLowerCase().includes('logo')));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

https.get('https://staging-indus-v3-portal.klefki.io', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = data.match(/<img[^>]+src="([^">]+)"/g);
    console.log("Klefki Images:", urls);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
