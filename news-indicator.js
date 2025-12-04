// Simple red-dot indicator for new News items
// Update this date string whenever you add a newer news entry in news.html
const LATEST_NEWS_DATE = '2025-11-15'; // YYYY-MM-DD, should match newest data-date in news.html
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
    // ignore storage errors (e.g., private mode)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateNewsBadge();

  // When on News page, mark latest news as seen
  if (document.body.classList.contains('news-page')) {
    markNewsAsSeen();
  }
});


