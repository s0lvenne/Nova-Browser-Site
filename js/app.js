function selectDemoNode(element, name, ping) {
  const nodes = document.querySelectorAll('.demo-proxy-node');
  nodes.forEach(n => {
    n.classList.remove('active');
    const btn = n.querySelector('.btn-connect-demo');
    if (btn) {
      btn.classList.remove('active');
      btn.innerText = 'Подключить';
    }
  });
  element.classList.add('active');
  const activeBtn = element.querySelector('.btn-connect-demo');
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.innerText = '✓ Активен';
  }

  const badge = document.getElementById('mockupProxyBadge');
  if (badge) {
    badge.innerText = '✓ ' + name.split(' ')[0] + ' (' + ping + ')';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.home-searchbar');
  if (searchInput) {
    searchInput.addEventListener('click', () => {
      const textSpan = searchInput.querySelector('.search-left span');
      if (textSpan) {
        textSpan.style.color = '#ffffff';
      }
    });
  }
});
