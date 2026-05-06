// Mark the active nav link based on current page filename
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').replace('./', '');
  if (href === page) a.classList.add('active');
});

// Add copy button to every code block
document.querySelectorAll('pre.code').forEach(pre => {
  const wrap = document.createElement('div');
  wrap.className = 'code-wrap';
  pre.parentNode.insertBefore(wrap, pre);
  wrap.appendChild(pre);
  const btn = document.createElement('button');
  btn.className = 'code-copy';
  btn.textContent = 'Copy';
  wrap.appendChild(btn);
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(pre.textContent.trimEnd()).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1800);
    });
  });
});
