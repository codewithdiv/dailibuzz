const cron = require('node-cron');
const PunchClass = require('../class/PunchClass');

cron.schedule('* * * * * *', () => {
  const news = new PunchClass(
    'https://punchng.com/topics/news/',
    'news',
    'punchng'
  );

  news
    .getArticle()
    .then((results) => {
      console.log(`number of results: ${results.length}`);
      news.exportResults(results);
      console.log(results);
    })
    .catch((err) => {
      console.log(`Error while fetching news with error :::: ${err}`);
    });
});