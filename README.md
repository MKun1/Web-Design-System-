# Web-Design-System-
A living component library and interactive design playground exploring glass morphism, responsive behavior, and interaction patterns. Every element is hand-crafted — no frameworks, no build tools.

# 🎨 KUN Design System

A living component library and interactive design playground exploring glass morphism, responsive behavior, and interaction patterns. Every element is hand-crafted — no frameworks, no build tools.


## ✨ What This Is

This is both a **reference library** and an **exploratory playground**. It documents the design language behind the KUN portfolio while letting visitors interact with and understand the underlying principles.

### It covers:
- **Typography** — Type scale, font stack, weight hierarchy
- **Color** — Semantic tokens, dark/light mapping, palette rationale
- **Components** — Buttons, inputs, cards, tags, navigation
- **Responsive Behavior** — Interactive viewport simulator
- **Glass Morphism** — Blur intensity studies, opacity variations, color tints

---

## 🎯 Design Principles

### 1. Glass as Material
Frosted surfaces aren't decorative — they create depth hierarchy. Background content blurs behind foreground elements, establishing clear visual layers without heavy shadows or borders.

### 2. Intentional Restraint
Every component has exactly what it needs. No extra dividers, no decorative flourishes. The glass effect does the heavy lifting.

### 3. Adaptive by Default
Light and dark modes share the same CSS custom properties. Components don't need separate styles — they respond to context.

### 4. Typography First
Gravitica Mono carries personality. The type system is designed around readability at all sizes, with optimized line heights and consistent rhythm.

---

## 🧱 Component Catalog

### Buttons
| Variant | Use Case | Behavior |
|---------|----------|----------|
| **Primary** | Main actions | Accent fill, white text, lifts on hover |
| **Secondary** | Supporting actions | Glass fill, subtle border, lifts on hover |
| **Ghost** | Tertiary / cancel | Transparent, border on hover |
| **Icon** | Compact actions | Circular, 40×40px, glass fill |

### Inputs
| Variant | States |
|---------|--------|
| **Text** | Default, focus (accent ring), placeholder |
| **Select** | Default, focus, options |
| **Textarea** | Default, focus, resizable |
| **Checkbox** | Unchecked, checked (accent fill), custom styled |

### Cards
| Variant | Behavior |
|---------|----------|
| **Default** | Glass surface, subtle shadow |
| **Elevated** | Shadow deepens on hover |
| **Interactive** | Scales up 1.05x on hover |

### Tags & Pills
| Variant | Color |
|---------|-------|
| **Default** | Neutral glass |
| **Accent** | Indigo glow |
| **Success** | Green status |
| **Warning** | Amber alert |
| **Danger** | Red alert |

---

## 🔬 Glass Morphism Study

### Blur Intensity
Four levels of `backdrop-filter: blur()` applied to identical surfaces:

| Level | Value | Feel |
|-------|-------|------|
| Subtle | 4px | Barely there — light separation |
| Moderate | 12px | Clear depth — standard use |
| Strong | 20px | Dramatic separation — hero areas |
| Ethereal | 32px | Maximum frost — ambient backgrounds |

### Opacity Variations
Background alpha transparency impacts readability:

| Opacity | Effect |
|---------|--------|
| 30% | Highly transparent — best over images |
| 50% | Balanced — default for most surfaces |
| 75% | Near-solid — maximum readability |

### Color Tints
Adding color to the glass background:
- **Accent Tint** — Indigo overlay, reinforces brand
- **Green Tint** — Status/success context

---

## 📐 Responsive Playground

An interactive viewport simulator that demonstrates layout adaptation:

- **Drag handle** to resize from 280px → 1440px
- **Preset buttons** jump to common breakpoints
- **Live grid** shows column changes in real-time
- **Width indicator** displays current viewport size

| Breakpoint | Columns | Typical Device |
|------------|---------|----------------|
| 375px | 1 | iPhone SE |
| 480px | 2 | Large phone |
| 768px | 2-3 | iPad portrait |
| 1024px | 3-4 | iPad landscape / small desktop |
| 1440px | 4 | Desktop |

---

## 🎨 Color System

### Semantic Tokens
Colors are never hardcoded — everything references CSS custom properties:

```css
--accent              /* Primary interactive color */
--text-primary        /* Headings, important text */
--text-secondary      /* Body text */
--text-muted          /* Captions, metadata */
--glass-bg            /* Card backgrounds */
--glass-border        /* Subtle surface edges */
--status-green        /* Presence, success states */
