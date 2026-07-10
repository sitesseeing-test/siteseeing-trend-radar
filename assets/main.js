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
    'brand-strategie-visual-direction': '#2D9C8A',
    'mental-health-app-ui':             '#E94F4E',
    'quiet-ai-integration':             '#E94F4E',
    'ux-business-outcomes':             '#E94F4E',
    'ki-erklaerungen-rollen':           '#E94F4E',
    'ki-modalitaet-nutzerintention':    '#E94F4E',
    'safari-mcp-server':                '#9182DB',
    'claude-sonnet-5':                  '#E94F4E',
    'accessibility-operational-capability': '#E94F4E',
    'adobe-topaz-labs':                 '#2D9C8A',
    'figma-code-layers':                '#E94F4E',
    'figma-motion':                     '#E94F4E',
    'kfc-bucketverse-rebrand':          '#2D9C8A',
    'pwc-ki-jobmarkt-2026':             '#E94F4E',
    'css-scroll-state-queries':         '#9182DB',
    'figma-slots-ga':                   '#E94F4E',
    'synthetic-users-vertrauen':        '#E94F4E',
    'logolounge-2026-report':           '#2D9C8A',
    'ux-strategie-differenzierung-2026':'#E94F4E',
    'css-anchor-positioning':           '#9182DB',
    'css-grid-lanes-masonry':           '#9182DB',
    'figma-check-designs':              '#E94F4E',
    'webflow-cloud-mcp':                '#9182DB',
    'sonic-branding-ux':                '#2D9C8A',
    'figma-make-local-code':            '#E94F4E',
    'figma-config-2026':                '#E94F4E',
    'css-scroll-driven-native':         '#9182DB',
    'state-of-prototyping-2026':        '#E94F4E',
    'production-ready-ux-deliverable':  '#E94F4E',
    'kinetic-variable-typography':      '#9182DB',
    'google-io-2026-design':            '#E94F4E',
    'state-of-ai-design-2026':          '#E94F4E',
    'figma-agent':                      '#E94F4E',
    'motion-first-brand':               '#2D9C8A',
    'dessn-design-im-code':             '#E94F4E',
    'design-engineering-boom':          '#E94F4E',
    'figma-mcp-skills':                 '#E94F4E',
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
