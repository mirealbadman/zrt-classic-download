(() => {
  'use strict';
  const target = typeof window.ZRT_APK_URL === 'string' ? window.ZRT_APK_URL.trim() : '';
  const links = document.querySelectorAll('[data-apk-link]');
  if (target) {
    let valid = false;
    try {
      const parsed = new URL(target, window.location.href);
      valid = target.startsWith('https://') && parsed.protocol === 'https:' && Boolean(parsed.hostname);
    } catch (_) {}
    links.forEach(link => {
      if (valid) {
        link.href = target;
        if (!target.startsWith('./') && !target.startsWith('/')) link.removeAttribute('download');
      } else {
        link.setAttribute('aria-disabled', 'true');
        link.removeAttribute('href');
        link.title = 'Download link not configured: see README.md';
        link.addEventListener('click', e => e.preventDefault());
      }
    });
  }
  const copy = document.getElementById('copy-hash');
  const hash = document.getElementById('checksum');
  const status = document.getElementById('copy-feedback');
  if (!copy || !hash || !status) return;
  copy.addEventListener('click', async () => {
    const value = hash.textContent.trim();
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const el = document.createElement('textarea');
        el.value = value;
        el.style.position = 'fixed'; el.style.top = '-9999px';
        document.body.append(el); el.select();
        if (!document.execCommand('copy')) throw new Error('Clipboard unavailable');
        el.remove();
      }
      status.textContent = '✓ Checksum copied to clipboard.';
    } catch (_) {
      status.textContent = 'Unable to copy automatically. Select the checksum text above.';
    }
  });
})();
