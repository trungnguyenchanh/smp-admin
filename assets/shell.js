(function() {
  const NAV = [
    { label: 'Operations', items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { id: 'dispatch', label: 'Dispatch monitor', icon: 'radar', badge: 'LIVE', badgeType: 'live' },
      { id: 'orders', label: 'Orders', icon: 'clipboard-list', badge: '847' },
    ]},
    { label: 'Catalog · v2', items: [
      { id: 'services', label: 'Service templates', icon: 'box-multiple', badge: 'NEW', badgeType: 'new' },
      { id: 'steps', label: 'Master steps', icon: 'list-check', badge: '22' },
      { id: 'skills', label: 'Master skills', icon: 'certificate', badge: '8' },
    ]},
    { label: 'Modules', items: [
      { id: 'agents', label: 'Agents & KYC', icon: 'users', badge: '12', badgeType: 'alert' },
      { id: 'finance', label: 'Finance', icon: 'wallet' },
      { id: 'partners', label: 'Partners', icon: 'plug' },
    ]},
    { label: 'System', items: [
      { id: 'reports', label: 'Reports', icon: 'chart-bar' },
      { id: 'health', label: 'System health', icon: 'activity-heartbeat' },
      { id: 'logs', label: 'Logs', icon: 'terminal-2' },
      { id: 'audit', label: 'Audit trail', icon: 'shield-check' },
      { id: 'settings', label: 'Settings', icon: 'settings' },
    ]}
  ];

  const PAGE_TO_FILE = {
    dashboard: 'dashboard.html',
    dispatch: 'dispatch-monitor.html',
    orders: 'orders.html',
    services: 'services.html',
    steps: 'steps.html',
    skills: 'skills.html',
    agents: 'agents.html',
    finance: 'finance.html',
    partners: 'partners.html',
    reports: 'reports.html',
    health: 'system-health.html',
    logs: 'logs.html',
    audit: 'audit.html',
    settings: 'settings.html',
  };

  function badge(text, type) {
    if (!text) return '';
    const cls = type ? `nav-badge nav-badge--${type}` : 'nav-badge';
    return `<span class="${cls}">${text}</span>`;
  }

  function renderSidebar(activePage) {
    return `
      <aside class="sidebar">
        <div class="sidebar__brand">
          <div class="sidebar__brand-mark">S</div>
          <div>
            <div class="sidebar__brand-name">SMP Admin</div>
            <div class="sidebar__brand-tag">v2.0 · production</div>
          </div>
        </div>
        <nav class="sidebar__nav">
          ${NAV.map(section => `
            <div class="nav-section">
              <div class="nav-section__label">
                <span>${section.label}</span>
                <span>${section.items.length}</span>
              </div>
              ${section.items.map(item => `
                <a class="nav-item ${item.id === activePage ? 'nav-item--active' : ''}" href="${PAGE_TO_FILE[item.id]}">
                  <i class="ti ti-${item.icon}"></i>
                  <span>${item.label}</span>
                  ${badge(item.badge, item.badgeType)}
                </a>
              `).join('')}
            </div>
          `).join('')}
        </nav>
        <div class="sidebar__user">
          <div class="user-avatar">LH</div>
          <div class="user-info">
            <div class="user-name">Lê Hùng</div>
            <div class="user-role">Ops manager</div>
          </div>
          <button class="icon-btn" title="Logout" style="border:none;background:transparent;">
            <i class="ti ti-logout"></i>
          </button>
        </div>
      </aside>
    `;
  }

  function renderTopbar(crumbs, search) {
    const crumbHtml = crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1;
      return `${i > 0 ? '<span class="crumb__sep">/</span>' : ''}<span class="${isLast ? 'crumb__cur' : ''}">${c}</span>`;
    }).join('');

    return `
      <header class="topbar">
        <div class="crumb">${crumbHtml}</div>
        <div class="topbar__search">
          <i class="ti ti-search topbar__search-icon"></i>
          <input placeholder="${search || 'Search...'}">
        </div>
        <div class="topbar__actions">
          <span class="env-tag">PROD · VN</span>
          <button class="icon-btn"><i class="ti ti-bell"></i><span class="icon-btn__dot"></span></button>
        </div>
      </header>
    `;
  }

  function renderStatusbar(extra) {
    return `
      <footer class="statusbar">
        <span><span class="statusbar__dot"></span>System healthy</span>
        <span class="statusbar__sep">|</span>
        <span>Catalog v2.0.0</span>
        <span class="statusbar__sep">|</span>
        <span>22 steps · 8 skills · 10 services</span>
        ${extra || ''}
        <div class="statusbar__right">
          <span>Build cfg-2026.05.26</span>
          <span id="time-now">08:17:42 UTC+7</span>
        </div>
      </footer>
    `;
  }

  window.SMPAdmin = {
    NAV, PAGE_TO_FILE, badge, renderSidebar, renderTopbar, renderStatusbar,
    init(opts) {
      const { page, crumbs, search } = opts;
      const sidebarMount = document.getElementById('sidebar-mount');
      const topbarMount = document.getElementById('topbar-mount');
      const statusbarMount = document.getElementById('statusbar-mount');
      if (sidebarMount) sidebarMount.outerHTML = renderSidebar(page);
      if (topbarMount) topbarMount.outerHTML = renderTopbar(crumbs || ['SMP', 'Page'], search);
      if (statusbarMount) statusbarMount.outerHTML = renderStatusbar();
    }
  };
})();
