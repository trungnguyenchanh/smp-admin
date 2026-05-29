(function() {
  const NAV = [
    { label: 'Operations', items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { id: 'dispatch', label: 'Dispatch monitor', icon: 'radar', badge: 'LIVE', badgeType: 'live' },
      { id: 'orders', label: 'Orders', icon: 'clipboard-list', badge: '847' },
      { id: 'order-flow', label: 'Order flow', icon: 'route' },
      { id: 'quality', label: 'Quality & disputes', icon: 'shield-check', badge: '12', badgeType: 'alert' },
    ]},
    { label: 'Partners · v3.3', items: [
      { id: 'partners-overview', label: 'Partners overview', icon: 'building-bank', badge: 'v3.3', badgeType: 'new' },
      { id: 'partners-list', label: 'All partners', icon: 'building-store', badge: '8' },
      { id: 'partner-detail', label: 'Partner detail', icon: 'id-badge-2' },
      { id: 'partner-portal-view', label: 'Portal view', icon: 'eye-check', badge: 'v3.3', badgeType: 'new' },
    ]},
    { label: 'Catalog · v3', items: [
      { id: 'services', label: 'Service templates', icon: 'box-multiple' },
      { id: 'steps', label: 'Steps + BOM', icon: 'list-check', badge: '22' },
      { id: 'skills', label: 'Master skills', icon: 'certificate' },
      { id: 'packages', label: 'Maintenance packages', icon: 'repeat' },
      { id: 'material-types', label: 'Material types', icon: 'package' },
      { id: 'material-variants', label: 'Material variants', icon: 'category' },
    ]},
    { label: 'Customer · v3', items: [
      { id: 'assets', label: 'Customer assets', icon: 'devices' },
      { id: 'contracts', label: 'Maintenance contracts', icon: 'file-certificate' },
    ]},
    { label: 'Geography · v3', items: [
      { id: 'coverage', label: 'Coverage map', icon: 'map-2' },
      { id: 'areas', label: 'Provinces & areas', icon: 'map-pin' },
    ]},
    { label: 'Modules', items: [
      { id: 'agents', label: 'Agents & KYC', icon: 'users' },
      { id: 'finance', label: 'Finance', icon: 'wallet' },
    ]},
    { label: 'Integration · v3.2', items: [
      { id: 'integration-health', label: 'Integration health', icon: 'plug-connected' },
      { id: 'material-verify', label: 'Material verification', icon: 'shield-half', badge: '23', badgeType: 'alert' },
    ]},
    { label: 'v3.5+ · Multi-agent & Warranty', items: [
      { id: 'step-roles', label: 'Step roles & splits', icon: 'users-group', badge: 'v3.5', badgeType: 'new' },
      { id: 'warranty-packages', label: 'Warranty packages', icon: 'shield-check', badge: 'v3.5', badgeType: 'new' },
      { id: 'warranty-claims', label: 'Claim queue', icon: 'clock-hour-4', badge: '5', badgeType: 'alert' },
      { id: 'warranty-revenue', label: 'Warranty revenue', icon: 'report-money', badge: 'v3.5', badgeType: 'new' },
    ]},
    { label: 'System', items: [
      { id: 'reports', label: 'Reports', icon: 'chart-bar' },
      { id: 'health', label: 'System health', icon: 'activity-heartbeat' },
      { id: 'settings', label: 'Settings', icon: 'settings' },
    ]}
  ];

  const PAGE_TO_FILE = {
    dashboard: 'dashboard.html',
    dispatch: 'dispatch-monitor.html',
    orders: 'orders.html',
    'order-flow': 'order-flow.html',
    quality: 'quality.html',
    'partners-overview': 'partners-overview.html',
    'partners-list': 'partners-list.html',
    'partner-detail': 'partner-detail.html',
    'partner-portal-view': 'partner-portal-view.html',
    services: 'services.html',
    steps: 'steps.html',
    skills: 'skills.html',
    packages: 'packages.html',
    'material-types': 'material-types.html',
    'material-variants': 'material-variants.html',
    assets: 'assets.html',
    contracts: 'contracts.html',
    coverage: 'coverage.html',
    areas: 'areas.html',
    agents: 'agents.html',
    finance: 'finance.html',
    'integration-health': 'integration-health.html',
    'material-verify': 'material-verify.html',
    'step-roles': 'step-roles.html',
    'warranty-packages': 'warranty-packages.html',
    'warranty-claims': 'warranty-claims.html',
    'warranty-revenue': 'warranty-revenue.html',
    reports: 'reports.html',
    health: 'system-health.html',
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
            <div class="sidebar__brand-tag">v3.5 · multi-agent + warranty</div>
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
        <span>Catalog v3.5.0</span>
        <span class="statusbar__sep">|</span>
        <span>8 partners · 23 routes</span>
        <span class="statusbar__sep">|</span>
        <span><span class="statusbar__dot" style="background:var(--green);"></span>inside</span>
        <span><span class="statusbar__dot" style="background:var(--green);"></span>wms</span>
        ${extra || ''}
        <div class="statusbar__right">
          <span>Build cfg-2026.05.29</span>
          <span>08:17:42 UTC+7</span>
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
