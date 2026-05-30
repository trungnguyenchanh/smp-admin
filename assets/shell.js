(function() {
  const NAV = [
    { label: 'Operations', items: [
      { id: 'dashboard', label: 'Operations dashboard', icon: 'layout-dashboard' },
      { id: 'dispatch', label: 'Dispatch monitor', icon: 'radar', badge: 'LIVE', badgeType: 'live' },
      { id: 'orders', label: 'Orders', icon: 'clipboard-list', badge: '847' },
      { id: 'order-flow', label: 'Order flow', icon: 'route' },
      { id: 'quality', label: 'Quality & disputes', icon: 'shield-check', badge: '12', badgeType: 'alert' },
    ]},
    { label: 'Customer', items: [
      { id: 'customers', label: 'All customers', icon: 'users', badge: '28k' },
      { id: 'customer-detail', label: 'Customer detail', icon: 'user-circle' },
      { id: 'assets', label: 'Customer assets', icon: 'devices' },
      { id: 'contracts', label: 'Maintenance contracts', icon: 'file-certificate' },
    ]},
    { label: 'Partners', items: [
      { id: 'partners-overview', label: 'Partners overview', icon: 'building-bank' },
      { id: 'partners-list', label: 'All partners', icon: 'building-store', badge: '8' },
      { id: 'partner-detail', label: 'Partner detail', icon: 'id-badge-2' },
      { id: 'partner-portal-view', label: 'Portal view', icon: 'eye-check' },
    ]},
    { label: 'Catalog', items: [
      { id: 'services', label: 'Service templates', icon: 'box-multiple' },
      { id: 'steps', label: 'Steps + BOM', icon: 'list-check', badge: '22' },
      { id: 'skills', label: 'Master skills', icon: 'certificate' },
      { id: 'packages', label: 'Maintenance packages', icon: 'repeat' },
      { id: 'material-types', label: 'Material types', icon: 'package' },
      { id: 'material-variants', label: 'Material variants', icon: 'category' },
    ]},
    { label: 'Geography', items: [
      { id: 'coverage', label: 'Coverage map', icon: 'map-2' },
      { id: 'areas', label: 'Provinces & areas', icon: 'map-pin' },
    ]},
    { label: 'Modules', items: [
      { id: 'agents', label: 'Agents & KYC', icon: 'users' },
      { id: 'finance', label: 'Finance', icon: 'wallet' },
    ]},
    { label: 'Integration', items: [
      { id: 'integration-health', label: 'Integration health', icon: 'plug-connected' },
      { id: 'material-verify', label: 'Material verification', icon: 'shield-half', badge: '23', badgeType: 'alert' },
    ]},
    { label: 'Multi-agent & Warranty', items: [
      { id: 'step-roles', label: 'Step roles & splits', icon: 'users-group', badge: 'v3.5', badgeType: 'new' },
      { id: 'warranty-packages', label: 'Warranty packages', icon: 'shield-check', badge: 'v3.5', badgeType: 'new' },
      { id: 'warranty-claims', label: 'Claim queue', icon: 'clock-hour-4', badge: '5', badgeType: 'alert' },
      { id: 'warranty-revenue', label: 'Warranty revenue', icon: 'report-money', badge: 'v3.5', badgeType: 'new' },
    ]},
    { label: 'Sales Reports', items: [
      { id: 'report-sales-dashboard', label: 'Sales dashboard', icon: 'chart-pie', badge: 'NEW', badgeType: 'new' },
      { id: 'report-sales-by-customer', label: 'By customer', icon: 'user-dollar' },
      { id: 'report-sales-by-service', label: 'By service', icon: 'box-multiple' },
      { id: 'report-sales-by-technician', label: 'By technician', icon: 'tool' },
      { id: 'report-sales-by-area', label: 'By area', icon: 'map-pin' },
      { id: 'report-sales-by-partner', label: 'By partner', icon: 'building-bank' },
      { id: 'report-sales-by-material', label: 'By material', icon: 'package' },
    ]},
    { label: 'Analytics', items: [
      { id: 'reports', label: 'All reports', icon: 'chart-bar' },
      { id: 'report-step-performance', label: 'Step performance', icon: 'chart-line', badge: 'HOT', badgeType: 'alert' },
      { id: 'report-revenue-trend', label: 'Revenue trend', icon: 'trending-up' },
      { id: 'report-customer-cohort', label: 'Customer cohort', icon: 'users' },
      { id: 'report-acquisition-funnel', label: 'Acquisition · CAC', icon: 'funnel' },
      { id: 'report-multi-agent', label: 'Multi-agent perf', icon: 'users-group', badge: 'v3.5', badgeType: 'new' },
      { id: 'report-warranty-financials', label: 'Warranty financials', icon: 'shield-check', badge: 'v3.5', badgeType: 'new' },
      { id: 'report-claim-approval', label: 'Claim approval', icon: 'clock-hour-4', badge: 'v3.5', badgeType: 'new' },
    ]},
    { label: 'System', items: [
      { id: 'health', label: 'System health', icon: 'activity-heartbeat' },
      { id: 'audit-log', label: 'Audit log', icon: 'history' },
      { id: 'users-roles', label: 'Users & roles', icon: 'shield-lock' },
      { id: 'api-keys', label: 'API keys', icon: 'key' },
      { id: 'webhooks', label: 'Webhooks', icon: 'webhook' },
      { id: 'notifications', label: 'Notification settings', icon: 'bell' },
      { id: 'settings', label: 'General settings', icon: 'settings' },
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
    'report-step-performance': 'report-step-performance.html',
    'report-service-gmv': 'report-service-gmv.html',
    'report-agent-utilization': 'report-agent-utilization.html',
    'report-quote-conversion': 'report-quote-conversion.html',
    'report-skill-demand': 'report-skill-demand.html',
    'report-quality-disputes': 'report-quality-disputes.html',
    'report-rating-distribution': 'report-rating-distribution.html',
    'report-partner-revenue': 'report-partner-revenue.html',
    'report-multi-agent': 'report-multi-agent.html',
    'report-warranty-financials': 'report-warranty-financials.html',
    'report-claim-approval': 'report-claim-approval.html',
    'report-revenue-trend': 'report-revenue-trend.html',
    'report-commission-breakdown': 'report-commission-breakdown.html',
    'report-cash-flow': 'report-cash-flow.html',
    'report-refund-chargeback': 'report-refund-chargeback.html',
    'report-customer-cohort': 'report-customer-cohort.html',
    'report-customer-ltv': 'report-customer-ltv.html',
    'report-geographic-distribution': 'report-geographic-distribution.html',
    'report-voucher-roi': 'report-voucher-roi.html',
    'report-acquisition-funnel': 'report-acquisition-funnel.html',
    'report-dispatch-funnel': 'report-dispatch-funnel.html',
    health: 'system-health.html',
    settings: 'settings.html',
    customers: 'customers.html',
    'customer-detail': 'customer-detail.html',
    'audit-log': 'audit-log.html',
    'users-roles': 'users-roles.html',
    'api-keys': 'api-keys.html',
    webhooks: 'webhooks.html',
    notifications: 'notifications.html',
    'report-sales-dashboard': 'report-sales-dashboard.html',
    'report-sales-by-customer': 'report-sales-by-customer.html',
    'report-sales-by-service': 'report-sales-by-service.html',
    'report-sales-by-technician': 'report-sales-by-technician.html',
    'report-sales-by-area': 'report-sales-by-area.html',
    'report-sales-by-partner': 'report-sales-by-partner.html',
    'report-sales-by-material': 'report-sales-by-material.html',
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
