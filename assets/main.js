document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.detail-nav');
  if (!nav) return;

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

  nav.insertAdjacentElement('beforebegin', btn);
});
