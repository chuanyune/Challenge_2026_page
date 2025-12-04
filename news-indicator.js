const LATEST_NEWS_DATE = '2025-11-15';
const NEWS_LAST_SEEN_KEY = 'challenge_news_last_seen';

function updateNewsBadge() {
  const newsLink = document.querySelector('.nav-link[data-nav="news"]');
  if (!newsLink) return;

  const lastSeen = localStorage.getItem(NEWS_LAST_SEEN_KEY);
  const hasNew = !lastSeen || lastSeen < LATEST_NEWS_DATE;

  if (hasNew) {
    newsLink.classList.add('nav-link--has-news');
  } else {
    newsLink.classList.remove('nav-link--has-news');
  }
}

function markNewsAsSeen() {
  try {
    localStorage.setItem(NEWS_LAST_SEEN_KEY, LATEST_NEWS_DATE);
  } catch (e) {
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateNewsBadge();

  if (document.body.classList.contains('news-page')) {
    markNewsAsSeen();
  }
});
