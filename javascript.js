/* ================================================================
   DESIGN-SYSTEM.JS — Responsive Playground + Theme Toggle
================================================================ */

(function() {
  'use strict';

  // ============================================================
  // THEME TOGGLE
  // ============================================================
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') html.setAttribute('data-theme', 'dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // ============================================================
  // RESPONSIVE VIEWPORT SIMULATOR
  // ============================================================
  const viewportFrame = document.getElementById('viewportFrame');
  const vpWidthEl = document.getElementById('vpWidth');
  const vpColumnsEl = document.getElementById('vpColumns');
  const vpLabel = document.getElementById('vpLabel');
  const presetButtons = document.querySelectorAll('.vp-preset');
  const handle = document.getElementById('viewportHandle');

  let currentWidth = 768;
  const presets = {
    375: 'Mobile S',
    480: 'Mobile L',
    768: 'Tablet',
    1024: 'Desktop',
    1440: 'Wide'
  };

  function updateViewport(width) {
    currentWidth = Math.max(280, Math.min(1440, width));
    viewportFrame.style.width = currentWidth + 'px';
    vpWidthEl.textContent = currentWidth + 'px';
    
    // Determine columns based on width
    let columns;
    if (currentWidth < 480) columns = '1 column';
    else if (currentWidth < 768) columns = '2 columns';
    else if (currentWidth < 1024) columns = '3 columns';
    else columns = '4 columns';
    vpColumnsEl.textContent = columns;
    
    // Update preset active states
    presetButtons.forEach(btn => {
      const presetWidth = parseInt(btn.dataset.width);
      btn.classList.toggle('active', presetWidth === currentWidth);
    });
    
    // Update label
    const presetName = presets[currentWidth] || 'Custom';
    vpLabel.textContent = `Current: ${currentWidth}px (${presetName})`;
  }

  // Preset button clicks
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateViewport(parseInt(btn.dataset.width));
    });
  });

  // Drag to resize
  let isDragging = false;
  let startX = 0;
  let startWidth = 0;

  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startWidth = currentWidth;
    handle.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = (e.clientX - startX) * 2;
    updateViewport(startWidth + delta);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    handle.style.cursor = 'ew-resize';
  });

  // Touch support
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startWidth = currentWidth;
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const delta = (e.touches[0].clientX - startX) * 2;
    updateViewport(startWidth + delta);
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Initial state
  updateViewport(768);

})();