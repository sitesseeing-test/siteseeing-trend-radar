document.addEventListener('DOMContentLoaded', function () {
  var categoryColors = {
    'UX / UI Design': '#E94F4E',
    'Webdesign':      '#9182DB',
    'Brand Design':   '#2D9C8A',
  };
  var insightColors = {
    'UX / UI Design': '#FFF1F0',
    'Webdesign':      '#ACDCD4',
    'Brand Design':   '#B8C0F3',
  };
  var tag = document.querySelector('.detail-section-tag');
  var category = tag ? tag.textContent.trim() : '';
  if (tag && categoryColors[category]) {
    tag.style.background = categoryColors[category];
  }
  var insight = document.querySelector('.detail-insight');
  if (insight && insightColors[category]) {
    insight.style.background = insightColors[category];
  }

  var sources = document.querySelector('.detail-sources');
  if (!sources) return;

  var btn = document.createElement('a');
  btn.className = 'claude-cta';
  btn.href = '#';
  btn.textContent = 'Darüber möchte ich mehr wissen';

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var title    = (document.querySelector('.detail-title')    || {}).innerText || '';
    var lead     = (document.querySelector('.detail-lead')     || {}).innerText || '';
    var analysis = (document.querySelector('.detail-analysis') || {}).innerText || '';
    var content  = [title, lead, analysis].filter(Boolean).join('\n\n');
    var prompt   = content + '\n\nRecherchiere mehr zu diesem Thema';
    window.open('https://claude.ai/new?q=' + encodeURIComponent(prompt), '_blank');
  });

  sources.insertAdjacentElement('beforebegin', btn);
});
