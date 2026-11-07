---
version: "alpha"
name: "Atlas Enterprise"
description: "A precise, accessible, modern enterprise SaaS design system for dashboards, internal tools, and data-rich web applications."
colors:
  primary: "#2563EB"
  primary-hover: "#1D4ED8"
  on-primary: "#FFFFFF"
  primary-subtle: "#DBEAFE"
  on-primary-subtle: "#1E40AF"
  background: "#F6F8FC"
  surface: "#FFFFFF"
  surface-muted: "#F1F5F9"
  surface-raised: "#FFFFFF"
  text: "#0F172A"
  text-secondary: "#475569"
  text-muted: "#64748B"
  border: "#D9E2EC"
  border-strong: "#94A3B8"
  focus: "#1D4ED8"
  success: "#047857"
  success-subtle: "#D1FAE5"
  on-success-subtle: "#065F46"
  warning: "#92400E"
  warning-subtle: "#FEF3C7"
  on-warning-subtle: "#92400E"
  danger: "#B42318"
  danger-hover: "#912018"
  danger-subtle: "#FEE4E2"
  on-danger-subtle: "#912018"
  info: "#1D4ED8"
  info-subtle: "#DBEAFE"
  chart-1: "#2563EB"
  chart-2: "#0F766E"
  chart-3: "#7C3AED"
  chart-4: "#C2410C"
  chart-5: "#BE185D"
  dark-primary: "#79A8FF"
  dark-primary-hover: "#A7C4FF"
  dark-on-primary: "#071426"
  dark-primary-subtle: "#152B53"
  dark-on-primary-subtle: "#C8DBFF"
  dark-background: "#0B1220"
  dark-surface: "#111C2E"
  dark-surface-muted: "#18283B"
  dark-surface-raised: "#1A2940"
  dark-text: "#EAF0FA"
  dark-text-secondary: "#B9C5D8"
  dark-text-muted: "#97A7BF"
  dark-border: "#334155"
  dark-border-strong: "#64748B"
  dark-focus: "#A7C4FF"
  dark-success: "#6EE7B7"
  dark-success-subtle: "#123D35"
  dark-on-success-subtle: "#A7F3D0"
  dark-warning: "#F6C76E"
  dark-warning-subtle: "#4B3416"
  dark-on-warning-subtle: "#FDE68A"
  dark-danger: "#FDA4AF"
  dark-danger-subtle: "#501C2C"
  dark-on-danger-subtle: "#FECDD3"
  dark-info: "#A7C4FF"
  dark-info-subtle: "#152B53"
  dark-chart-1: "#79A8FF"
  dark-chart-2: "#5EEAD4"
  dark-chart-3: "#C4B5FD"
  dark-chart-4: "#FDBA74"
  dark-chart-5: "#FDA4AF"
typography:
  display:
    fontFamily: "Inter"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  h1:
    fontFamily: "Inter"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Inter"
    fontSize: "24px"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.35
  caption:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
  metric:
    fontFamily: "Inter"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  code:
    fontFamily: "IBM Plex Mono"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "14px"
  xl: "20px"
  pill: "999px"
spacing:
  xxs: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "32px"
  xxxl: "48px"
  section: "64px"
components:
  page-shell:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
  sidebar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
  sidebar-item-active:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.on-primary-subtle}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    height: "40px"
    padding: "{spacing.lg}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    height: "40px"
    padding: "{spacing.lg}"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    height: "40px"
    padding: "{spacing.lg}"
  button-danger-hover:
    backgroundColor: "{colors.danger-hover}"
    textColor: "{colors.on-primary}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    height: "40px"
    padding: "{spacing.md}"
  input-disabled:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
  table-header:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text-secondary}"
  table-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
  table-row-selected:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.text}"
  badge-success:
    backgroundColor: "{colors.success-subtle}"
    textColor: "{colors.on-success-subtle}"
    rounded: "{rounded.pill}"
  badge-warning:
    backgroundColor: "{colors.warning-subtle}"
    textColor: "{colors.on-warning-subtle}"
    rounded: "{rounded.pill}"
  badge-danger:
    backgroundColor: "{colors.danger-subtle}"
    textColor: "{colors.on-danger-subtle}"
    rounded: "{rounded.pill}"
  badge-info:
    backgroundColor: "{colors.info-subtle}"
    textColor: "{colors.info}"
    rounded: "{rounded.pill}"
  alert-success:
    backgroundColor: "{colors.success-subtle}"
    textColor: "{colors.on-success-subtle}"
    rounded: "{rounded.md}"
  alert-warning:
    backgroundColor: "{colors.warning-subtle}"
    textColor: "{colors.on-warning-subtle}"
    rounded: "{rounded.md}"
  alert-danger:
    backgroundColor: "{colors.danger-subtle}"
    textColor: "{colors.on-danger-subtle}"
    rounded: "{rounded.md}"
  code-block:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  dark-page-shell:
    backgroundColor: "{colors.dark-background}"
    textColor: "{colors.dark-text}"
  dark-card:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-text}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  dark-sidebar:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-text-secondary}"
  dark-button-primary:
    backgroundColor: "{colors.dark-primary}"
    textColor: "{colors.dark-on-primary}"
    rounded: "{rounded.sm}"
  dark-button-primary-hover:
    backgroundColor: "{colors.dark-primary-hover}"
    textColor: "{colors.dark-on-primary}"
  dark-input:
    backgroundColor: "{colors.dark-surface-raised}"
    textColor: "{colors.dark-text}"
    rounded: "{rounded.sm}"
  dark-table-header:
    backgroundColor: "{colors.dark-surface-muted}"
    textColor: "{colors.dark-text-secondary}"
  dark-badge-success:
    backgroundColor: "{colors.dark-success-subtle}"
    textColor: "{colors.dark-on-success-subtle}"
    rounded: "{rounded.pill}"
  dark-badge-warning:
    backgroundColor: "{colors.dark-warning-subtle}"
    textColor: "{colors.dark-on-warning-subtle}"
    rounded: "{rounded.pill}"
  dark-badge-danger:
    backgroundColor: "{colors.dark-danger-subtle}"
    textColor: "{colors.dark-on-danger-subtle}"
    rounded: "{rounded.pill}"
  dark-badge-info:
    backgroundColor: "{colors.dark-info-subtle}"
    textColor: "{colors.dark-info}"
    rounded: "{rounded.pill}"
---

## Overview

**Style:** Atlas Enterprise is a modern, trustworthy interface for SaaS products, ERP systems, admin portals, financial operations, service desks, and analytics dashboards. It combines the disciplined grid and clarity of enterprise software with restrained, premium details.

**Visual personality:** calm, precise, uncluttered, highly readable, and quietly polished. Favor purposeful hierarchy over decoration. Users should find actions and interpret information quickly.

**Core principles**

1. **Clarity before novelty.** Legible content, predictable behavior, and clear state outweigh visual flair.
2. **One coherent system.** Reuse tokens and components; do not invent new colors, borders, spacing, or shadows for each screen.
3. **Density by context.** Dashboards and tables can be compact; forms, onboarding, and destructive flows need more breathing room.
4. **Accessible by default.** Keyboard, focus, contrast, reduced motion, responsive layout, and meaningful labels are requirements, not extras.
5. **Real application behavior.** Design loading, empty, error, success, disabled, and permission-restricted states as deliberately as the happy path.
6. **Minimal visual noise.** No gratuitous gradients, glassmorphism, 3D, heavy shadows, or excessive animations.

This document defines *design*, not application business logic. Never invent domain metrics, permissions, customer data, backend responses, or application routes.

## Colors

Use the YAML colors as the source of truth. Light and dark tokens are paired by semantic role; do not simply invert light colors to generate dark mode.

### Light theme

| Purpose | Token | Value |
| --- | --- | --- |
| Primary actions and selected controls | `primary` | `#2563EB` |
| App canvas | `background` | `#F6F8FC` |
| Cards, menus, panels | `surface` | `#FFFFFF` |
| Quiet sections, table headings | `surface-muted` | `#F1F5F9` |
| Main text | `text` | `#0F172A` |
| Secondary text | `text-secondary` | `#475569` |
| Subtle metadata | `text-muted` | `#64748B` |
| Borders and separators | `border` | `#D9E2EC` |
| Success | `success` | `#047857` |
| Warning | `warning` | `#92400E` |
| Destructive actions and failures | `danger` | `#B42318` |

### Dark theme

| Purpose | Token | Value |
| --- | --- | --- |
| Primary actions | `dark-primary` | `#79A8FF` |
| App canvas | `dark-background` | `#0B1220` |
| Panels | `dark-surface` | `#111C2E` |
| Raised controls | `dark-surface-raised` | `#1A2940` |
| Main text | `dark-text` | `#EAF0FA` |
| Secondary text | `dark-text-secondary` | `#B9C5D8` |
| Borders | `dark-border` | `#334155` |

### Color usage rules

- Apply primary blue to a **limited number of high-value actions** per screen. Do not make every clickable element blue.
- Use semantic colors only for their semantic meanings. Never use green purely as decoration in a status-heavy screen.
- Status labels must contain readable text (e.g., **Active**, **Paused**, **Failed**) in addition to color.
- Neutral page backgrounds and white/dark panels carry the majority of the interface.
- Charts may use the `chart-1` through `chart-5` palette, but supplement hues with direct labels, patterns, or markers when needed for accessibility.
- Target WCAG 2.2 AA: >= 4.5:1 contrast for normal text, >= 3:1 for large text and meaningful non-text UI boundaries. Check actual foreground/background pairs.
- Do not place low-contrast muted text over tinted surfaces without checking the resulting contrast.

## Typography

Use **Inter** for UI text, with `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` as fallback. Use **IBM Plex Mono** only for code, IDs, timestamps, technical values, and log output. Load fonts through the project's existing font mechanism; avoid adding unnecessary font dependencies.

| Role | Suggested size | Weight | Usage |
| --- | --- | --- | --- |
| Display | 36px | 700 | Rare marketing or hero surfaces |
| Page title (H1) | 30px | 700 | Primary page heading |
| Section title (H2) | 24px | 650 | Major groups |
| Card title (H3) | 18px | 650 | Panels and grouped content |
| Body | 16px | 400 | Forms, descriptions, primary reading text |
| Compact body | 14px | 400 | Tables, secondary navigation |
| Label | 13px | 600 | Field labels, small headings |
| Caption | 12px | 500 | Supportive metadata; never critical body copy |
| Metric | 28px | 700 | KPIs with short labels |

- Use sentence case for controls and labels; reserve uppercase for short eyebrow labels or recognizable acronyms.
- Prefer 45-75 characters per line for long-form descriptions.
- Use `font-variant-numeric: tabular-nums` on columns of amounts, counts, durations, and dates.
- Align numbers to the right in numeric table columns; keep units visible and consistent.
- Do not use oversized typography on operational screens at the expense of content and task efficiency.
- Hierarchy should come primarily from size, weight, and whitespace, not from many text colors.

## Layout

### Grid and spacing

- Build on a **4px base unit**, using the spacing tokens in the YAML front matter.
- Default content max-width: **1440px** for dashboards; **760px** for reading and long forms; **560px** for focused settings forms. Wide data tables may expand beyond these widths where needed.
- Desktop app shell: left sidebar **248px** wide (collapsed rail **72px**), top bar **64px** high, main content padding **24-32px**.
- Main layout: 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid. Use CSS Grid or existing layout utilities.
- Standard gaps: 16px between closely related controls, 24px between cards, 32px between major groups.
- Card padding: 20-24px. Toolbar padding: 12-16px. Modal padding: 24px.
- Page headers show a title, optional concise description, and a right-aligned primary action if relevant.

### Responsive behavior

| Viewport | Behavior |
| --- | --- |
| Below 640px | Single-column forms/cards, mobile navigation drawer, full-width key actions when appropriate |
| 640-1023px | Two-column cards as room permits, narrower margins, collapsed or overlay navigation |
| 1024-1439px | Standard sidebar + multi-column dashboard |
| 1440px and above | Cap reading surfaces, allow data-rich panels to use space efficiently |

- Never rely on horizontal page scrolling for normal navigation.
- Data tables can use intentional horizontal scrolling with a visible cue, sticky identifying columns where useful, and preserved keyboard access.
- Avoid fixed-height regions unless the content genuinely needs internal scrolling.
- Never hide essential actions behind hover-only affordances on touch devices.

### Suggested operational dashboard structure

1. **Shell:** persistent navigation + top bar with page context and user actions.
2. **Page heading:** title, subtitle, and one clear primary action.
3. **Overview row:** 3-4 KPI cards with trend context, time period, and readable units.
4. **Primary workspace:** chart, task queue, issue list, or operational table matching the page's purpose.
5. **Secondary insights:** compact supplementary cards, filters, and contextual links.
6. **System states:** useful empty states, actionable errors, and unobtrusive confirmations.

Do not invent KPI cards for pages that don't need them; a focused form should remain a focused form.

## Elevation & Depth

- Prefer **1px borders** to deep drop shadows for card separation.
- Standard panel border: `1px solid` the semantic border token.
- Resting cards: no shadow or a subtle `0 1px 2px rgba(15,23,42,0.04)` in light mode.
- Popovers and menus: `0 8px 24px rgba(15,23,42,0.12)` in light mode, with a crisp border.
- Modals: `0 20px 48px rgba(15,23,42,0.18)` in light mode, backdrop tint, and focus trapping.
- Dark mode: use surface elevation and borders more than dark shadows.
- Transitions: ~120-180ms for color/state, ~180-240ms for small panel movement. Respect `prefers-reduced-motion: reduce`.
- No perpetual motion, gratuitous parallax, pulsing indicators, or decorative blur as a default.

## Shapes

- Buttons, inputs, selects, tabs: **6px** radius.
- Cards, dropdowns, and panels: **10-14px** radius.
- Modals and major surfaces: **14-20px** radius.
- Pills and statuses: **999px** radius only when the pill silhouette has semantic value.
- Use 1px borders by default. Keep icon stroke widths and corner radii consistent.
- Prefer simple line icons in a single library already in the project (for example Lucide), at 16-20px in controls and 20-24px in navigation. Provide accessible names where needed.

## Components

Build reusable components consistent with the application's existing framework and patterns. Reuse accessible components already installed before introducing a new UI library. The YAML component tokens define core visual values; details below govern states and interaction.

### Buttons

- **Primary:** filled blue, white text, 40px height, horizontal padding 16px, medium/semibold label. Normally one primary action per local decision area.
- **Secondary:** neutral filled or outlined, same geometry as primary.
- **Tertiary/ghost:** visually quiet actions; provide visible hover and keyboard-focus states.
- **Destructive:** use red only for confirmed destructive intent. Require an appropriate confirmation for irreversible operations.
- Standard sizes: small 32px, regular 40px, large 48px. Click/tap targets should normally reach at least 44x44px, even if the visible button is smaller.
- States: default, hover, focus-visible, pressed, loading, and disabled. Loading disables duplicate submission and preserves layout width.
- Icons: 16px with an 8px text gap; avoid using icon-only buttons without accessible labels.

### Inputs, selects, and forms

- Inputs: 40px standard height, 6px radius, 1px border, 12px horizontal padding.
- Explicit labels sit above fields with 6-8px spacing; placeholders are examples, not label replacements.
- Show required/optional state clearly. Error messages appear below the field and identify how to recover.
- Use a visible 2px focus ring with adequate separation and contrast. Avoid removing browser focus without an equivalent.
- Group related fields, maintain predictable tab order, and prevent accidental data loss.
- Search and filtering controls should have clear reset mechanisms.
- Prefer inline validation after interaction or submit, rather than aggressive validation while the user is typing.

### Cards and KPI tiles

- Use a clear heading, optional supporting description, body, and action area; do not stack too many unrelated details.
- KPI card: label, prominent tabular-number metric, time context, and optional change indicator with direction and interpretation.
- Never imply improvement just because a number increased; define whether higher/lower is favorable for that metric.
- Do not use decorative graphs without accurate units and time windows.

### Navigation

- Sidebar: grouped links, clear active location, compact icons, human-readable labels.
- Breadcrumbs: use only when hierarchy is meaningful; do not duplicate the sidebar path needlessly.
- Top bar: page context, search when genuinely global, notifications if implemented, and account menu.
- Mobile: accessible dialog/drawer navigation, closable by Escape and backdrop click where appropriate.
- Never navigate with non-semantic clickable `div` elements when links or buttons are appropriate.

### Data tables

- Use actual table semantics for tabular data, with heading cells and proper column labels.
- Default row height: **44-52px**. Dense mode can be **36-40px** only with sufficient touch/keyboard affordances.
- Header row has a subtly tinted surface, semibold label, and restrained divider.
- Text left-aligned; amounts, counts, and durations right-aligned; status preferably in compact semantic badges.
- Support explicit sorting, filtering, pagination or virtualization where relevant. Do not fake these controls.
- Always design loading/skeleton, no-results, error, and empty-first-use states.
- Bulk actions must show the selected count and make destructive impact explicit.
- Large tables should be performant and readable at 200% zoom.

### Charts and analytics

- Use the five chart accent colors in sequence, ensuring adjacent series remain distinguishable.
- Line charts for trends, bars for category comparisons, stacked bars for compositions, and tables for precise lookup.
- All charts need clear units, labels, a time window, and a text-based accessible summary or equivalent data table when appropriate.
- Avoid 3D, excessive animation, truncated axes that mislead, and gradient fills that impair data interpretation.
- Provide empty, loading, and error states, and distinguish missing data from zero.

### Status, alerts, and feedback

- Status badge: soft semantic background + dark/light readable text; include an explicit word, not only a dot.
- Toasts: short, task-related, dismissible if persistent, and announced accessibly where appropriate.
- Inline alerts: specify cause, consequence, and next action; use red for errors, amber for warnings, green for confirmed success.
- Confirmation dialogs: explain what changes and what cannot be undone; keep safe action distinct from destructive action.
- Skeletons should approximate real layout; do not substitute perpetual spinners where progress details exist.

### Empty states

- Explain what is absent and why, if known.
- Offer a relevant next step (create, clear filters, retry, request access), not a generic decorative illustration.
- Differentiate **no data yet**, **no search results**, **permission denied**, **network error**, and **system error**.

### Accessibility

- Target WCAG 2.2 AA as a design and implementation baseline.
- All essential actions must work with keyboard and have visible focus.
- Give every interactive control a programmatic name; icon-only buttons need an `aria-label` or equivalent.
- Use semantic headings and landmarks; do not skip heading levels for visual effect.
- Make dialogs manage focus correctly and return focus when closed.
- Provide a reduced-motion experience; never communicate meaning solely through color or animation.
- Verify contrast using actual rendered foreground/background values.
- Ensure layouts work at 200% zoom and with long labels/localization.

### Framework implementation rules

- **Angular:** use established Angular components, templates, signals/observables according to the repository's conventions, and design-token CSS variables. Avoid inserting React components from inspiration libraries directly.
- **Next.js / React:** use the existing component architecture, CSS strategy, and server/client component boundaries. Install a component package only if it adds meaningful value and is approved by project conventions.
- **Tailwind:** map the semantic token names to the current Tailwind setup or CSS custom properties; do not litter arbitrary hex values or pixel values throughout JSX/templates.
- **No framework assumptions:** inspect the repository first. Do not introduce Tailwind, shadcn/ui, animation libraries, or a new icon package merely because a design reference uses them.

### CSS token adoption example

The following is a simple optional starting point; adapt names to the project's theme system. The YAML values above remain authoritative.

```css
:root {
  color-scheme: light;
  --color-primary: #2563eb;
  --color-on-primary: #ffffff;
  --color-bg: #f6f8fc;
  --color-surface: #ffffff;
  --color-surface-muted: #f1f5f9;
  --color-text: #0f172a;
  --color-text-secondary: #475569;
  --color-border: #d9e2ec;
  --color-focus: #1d4ed8;
  --radius-control: 6px;
  --radius-card: 14px;
  --space-card: 24px;
}

[data-theme="dark"] {
  color-scheme: dark;
  --color-primary: #79a8ff;
  --color-on-primary: #071426;
  --color-bg: #0b1220;
  --color-surface: #111c2e;
  --color-surface-muted: #18283b;
  --color-text: #eaf0fa;
  --color-text-secondary: #b9c5d8;
  --color-border: #334155;
  --color-focus: #a7c4ff;
}

:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Do's and Don'ts

### Do

- Read this file and inspect the repository's existing components, assets, architecture, and conventions **before** changing UI.
- Produce one consistent visual language across all screens.
- Reuse semantic colors, scale, spacing, elevation, and typography tokens.
- Design responsive behavior, all interaction states, error handling, and focus behavior together with the main screen.
- Choose interface density based on the job the user needs to accomplish.
- Keep important domain data prominent; format numbers, currencies, dates, and units explicitly.
- Use real product copy/data/interfaces from the project, or clearly marked fixtures if a mockup is requested.
- Minimize dependencies and preserve the existing business logic and routing.
- Verify with type checks, tests, lint, and a visual review when tools are available.
- Check UI at mobile, tablet, and desktop widths as well as light/dark themes.

### Don't

- Don't copy copyrighted imagery, proprietary logos, or distinctive brand identity from design inspiration sites.
- Don't treat reference websites as sources of functional requirements or real product data.
- Don't add random gradients, heavy glass effects, large decorative orbs, or attention-grabbing motion to operational UI.
- Don't use a new font, icon family, or component library for each screen.
- Don't make every card clickable or every action primary.
- Don't rely on color alone for status or on hover alone for actions.
- Don't sacrifice keyboard, contrast, responsiveness, or performance for appearances.
- Don't fabricate data, routes, permission checks, backend behavior, or success states.
- Don't refactor unrelated features just to apply visual styling.

### Agent workflow and acceptance criteria

When asked to build, restyle, or extend a screen:

1. **Inspect:** read `DESIGN.md`, package metadata, existing UI components, global CSS, relevant pages, and interaction patterns.
2. **Plan:** identify page intent, information hierarchy, reusable components, and responsive/accessible states.
3. **Implement:** use defined tokens, keep business logic intact, and adapt to the existing framework instead of blindly pasting library samples.
4. **Validate:** check typography, spacing, visual hierarchy, color semantics, keyboard navigation, contrast, mobile behavior, loading/empty/error states, and language overflow.
5. **Report:** summarize modified files, design choices, checks performed, and any remaining limitation. Never claim a test or visual review that was not performed.

Definition of done: a consistent screen that is usable with mouse, touch, and keyboard; works at narrow and wide viewports; supports light/dark if the application exposes them; and preserves functional correctness.

### Suggested prompt to give Codex or Claude Code

> Read `DESIGN.md` in the repository root before editing the UI. Apply its design tokens and component rules to the requested screen, using the existing framework and dependencies. Preserve functionality and business logic. Include responsive, loading, empty, error, disabled, focus, and dark-mode states as applicable. Do not invent product data or add unnecessary packages. After implementation, run available checks and summarize what you changed.

### References and provenance

This is an original general-purpose design system, informed by design-system workflows and references from Refero Styles, 21st.dev, Design Skills, and Codex Design. Its file structure follows the publicly documented Google DESIGN.md alpha specification. It is **not** an extracted design system from any specific brand and should be customized to a project's actual brand and UX requirements.
