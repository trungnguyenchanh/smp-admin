# SMP Admin v2 — Step-based Service

Giao diện quản trị cho SMP platform · phiên bản v2 chuyển sang mô hình Step-based Service.

## Quick start

Mở `index.html` trong trình duyệt — sẽ tự redirect về `pages/dashboard.html`.

Để deploy lên Cloudflare Pages: upload thư mục `admin/` lên Pages, set root directory là `/`.

## Cấu trúc

```
admin/
├── index.html              Landing redirect → dashboard
├── assets/
│   ├── style.css           Design system v2 (Indigo · Plus Jakarta Sans)
│   └── shell.js            Sidebar + topbar + statusbar inject
└── pages/
    ├── dashboard.html              Operations dashboard
    ├── dispatch-monitor.html       Live matching · v2 skill-set algorithm
    ├── orders.html                 Orders với step breakdown
    │
    ├── services.html               ⭐ NEW v2 · Service Templates builder
    ├── steps.html                  ⭐ NEW v2 · Master Steps catalog
    ├── skills.html                 ⭐ NEW v2 · Master Skills catalog
    │
    ├── agents.html                 Agents với skill matrix mới
    ├── finance.html                Finance · step-level breakdown
    ├── partners.html               B2B Open Platform
    ├── reports.html                Reports & Analytics
    │
    ├── system-health.html          Microservices health
    ├── logs.html                   Application logs stream
    ├── audit.html                  Audit trail (immutable)
    └── settings.html               Feature flags & config
```

## Trang chính của v2 catalog

3 trang mới mà mô hình v2 yêu cầu:

### Master Steps (`steps.html`)
Catalog 22 step nguyên tử. Mỗi step có:
- `step_id`, tên, mô tả
- 1 skill liên kết
- min_level (L1–L5)
- duration_min (phút chuẩn)
- labor_price theo level (matrix L1..L5)
- material_template (vật tư khuyến nghị)
- requires_quote flag

### Master Skills (`skills.html`)
8 skill nghề (ac-mechanic, ac-cleaner, washer-mechanic, ...) với:
- Định nghĩa từng level
- Bao nhiêu thợ ở mỗi level
- Bao nhiêu step đang dùng skill này

### Service Templates (`services.html`)
Builder 3 cột:
- **Trái**: danh sách 10 service templates
- **Giữa**: chi tiết service đang sửa, kéo thả step để sắp xếp
- **Phải**: step bank để click thêm

Service mới sẽ là 1 quy trình kết hợp các step theo thứ tự, với mỗi step optional/required/conditional.

## Design system

- **Primary**: Indigo `#4f46e5` · `--primary`
- **Font**: Plus Jakarta Sans (body) + JetBrains Mono (IDs, code, numbers)
- **Icons**: Tabler Icons via CDN (`<i class="ti ti-NAME">`)
- **Sidebar**: 220px · navigation grouped: Operations / **Catalog v2** / Modules / System
- **Topbar**: 52px · breadcrumb + search + env tag + bell
- **Statusbar**: bottom sticky · health dot + catalog version + build

## Mock data

Tất cả số liệu là mock for demo. Khi deploy thật, các trang sẽ fetch từ API:
- `GET /v2/catalog/steps`
- `GET /v2/catalog/skills`
- `GET /v2/catalog/services`
- `GET /v2/orders?expand=steps`
- `GET /v2/agents?expand=skills`

## Master data

Xem `docs/master-data.json` — JSON seed cho 8 skills, 22 steps, 10 services. Validate được:
- Mọi `step.skill_id` exist trong skills
- Mọi `service.steps[].step_id` exist trong steps

## Roadmap

- [ ] Phase 2: Multi-agent dispatch (1 đơn → ≥2 thợ)
- [ ] Phase 2: Step dependencies (DAG, không chỉ sequence)
- [ ] Phase 2: Customer custom service (chọn step rời)
- [ ] Phase 2: Regional pricing matrix
- [ ] Phase 3: AI suggest step list từ ảnh khách upload
