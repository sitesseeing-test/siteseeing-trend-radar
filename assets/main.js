document.addEventListener('DOMContentLoaded', function () {
  var categoryColors = {
    'UX / UI Design': '#E94F4E',
    'Webdesign':      '#9182DB',
    'Brand Design':   '#2D9C8A',
  };
  var insightColors = {
    'UX / UI Design': '#FFF1F0',
    'Webdesign':      '#F5F6FE',
    'Brand Design':   '#EDF8F6',
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

  // Nav dots: colored circle before each linked article title
  var navCategoryColors = {
    'agentic-ux-design':                '#E94F4E',
    'european-accessibility-act':       '#E94F4E',
    'figma-april-update':               '#E94F4E',
    'container-queries-breakpoint-free':'#9182DB',
    'claude-design':                    '#E94F4E',
    'adobe-cx-enterprise':              '#2D9C8A',
    'canva-ai-2':                       '#E94F4E',
    'dopamine-design':                  '#9182DB',
    'ux-ki-orchestrator':               '#E94F4E',
    'synthetische-nutzerforschung':     '#E94F4E',
    'vibe-design':                      '#E94F4E',
    'ux-jobmarkt':                      '#E94F4E',
    'design-demokratisierung':          '#E94F4E',
    'ux-ai-kollaborator':               '#E94F4E',
    'generative-ui':                    '#E94F4E',
    'liquid-glass-ui':                  '#E94F4E',
    'accessibility':                    '#E94F4E',
    'performance-first':                '#9182DB',
    'expressive-typography':            '#9182DB',
    'ai-personalization':               '#9182DB',
    '3d-immersive':                     '#9182DB',
    'adaptive-identity':                '#2D9C8A',
    'humanisierung':                    '#2D9C8A',
    'multisensorisches-branding':       '#2D9C8A',
    'ai-brand-governance':              '#2D9C8A',
  };
  document.querySelectorAll('.detail-nav-item').forEach(function(link) {
    var href = link.getAttribute('href') || '';
    var slug = href.replace(/.*\//, '').replace(/\.html.*/, '');
    var color = navCategoryColors[slug];
    if (!color) return;
    var dot = document.createElement('span');
    dot.className = 'nav-cat-dot';
    dot.style.background = color;
    var titleEl = link.querySelector('.detail-nav-title');
    if (titleEl) titleEl.insertBefore(dot, titleEl.firstChild);
  });

  var sources = document.querySelector('.detail-sources');
  if (!sources) return;

  var row = document.createElement('div');
  row.className = 'detail-cta-row';

  var backBtn = document.createElement('a');
  backBtn.className = 'cta-back';
  backBtn.href = '../index.html';
  backBtn.textContent = 'Alle Trends';

  var claudeBtn = document.createElement('a');
  claudeBtn.className = 'claude-cta';
  claudeBtn.href = '#';
  claudeBtn.textContent = 'Darüber möchte ich mehr wissen';

  claudeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var title    = (document.querySelector('.detail-title')    || {}).innerText || '';
    var lead     = (document.querySelector('.detail-lead')     || {}).innerText || '';
    var analysis = (document.querySelector('.detail-analysis') || {}).innerText || '';
    var content  = [title, lead, analysis].filter(Boolean).join('\n\n');
    var prompt   = content + '\n\nRecherchiere mehr zu diesem Thema';
    window.open('https://claude.ai/new?q=' + encodeURIComponent(prompt), '_blank');
  });

  row.appendChild(backBtn);
  row.appendChild(claudeBtn);
  sources.insertAdjacentElement('beforebegin', row);
});
