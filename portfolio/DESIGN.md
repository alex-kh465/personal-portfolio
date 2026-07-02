---
name: Personal Portfolio
description: Technical, precise, and capable portfolio for an AI and Data Engineer.
colors:
  primary: "#0055FF"
  neutral-bg: "#FFFFFF"
  neutral-surface: "#F3F4F6"
  neutral-ink: "#111827"
  neutral-border: "#E5E7EB"
typography:
  display:
    fontFamily: "'Space Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.neutral-ink}"
---

# Design System: Personal Portfolio

## 1. Overview

**Creative North Star: "The Engineering Blueprint"**

This visual system rejects the soft, diffuse, "magical" aesthetics commonly associated with AI interfaces today. Instead, it embraces precision, stark contrast, and structural clarity. It is unapologetically technical, relying on sharp edges, crisp typography, and a severe light-mode palette to communicate competence and engineering rigor. 

There are no glowing orbs, no glassmorphism, and no soft drop shadows. The design is the data, and the data is the design.

**Key Characteristics:**
- High-contrast, true-white light mode.
- Sharp corners (0px or 2px radius max).
- Flat topology; depth via borders, not shadows.
- Distinctive, un-ornamented typography.

## 2. Colors

The palette is stark and binary, broken only by a single highly saturated technical accent. We explicitly avoid the warm, tinted "cream/sand" backgrounds that saturate modern AI design.

### Primary
- **Electric Cobalt** (`#0055FF`): The singular brand accent. Used sparingly for primary actions, active states, and critical data highlights. Never used as a background for large sections.

### Neutral
- **True White** (`#FFFFFF`): The primary canvas.
- **Technical Gray** (`#F3F4F6`): Secondary surface color for code blocks or alternating rows.
- **Graphite Ink** (`#111827`): Primary text color. Ensures maximum WCAG contrast.
- **Structural Border** (`#E5E7EB`): Used for harsh 1px borders to define structure.

### Named Rules
**The Binary Restraint Rule.** The interface is fundamentally black and white. The Electric Cobalt accent is reserved for interactive affordances and data focus. If everything is accented, nothing is.

## 3. Typography

**Display Font:** Space Grotesk (with system-ui)
**Body Font:** Inter (with system-ui)
**Label/Mono Font:** JetBrains Mono

**Character:** Geometric and unapologetically digital. The pairing of Space Grotesk for display and JetBrains Mono for technical data anchors the portfolio in the engineering domain.

### Hierarchy
- **Display** (600, clamp(2rem, 5vw, 4rem), 1.1): Hero sections and major section dividers.
- **Headline** (600, 1.5rem, 1.2): Subsection titles.
- **Title** (500, 1.25rem, 1.3): Card titles and component headers.
- **Body** (400, 1rem, 1.6): Main prose. Cap line length at 65–75ch for readability.
- **Label** (500, 0.875rem, normal, uppercase): Technical metadata, tags, and small utility text. Uses JetBrains Mono.

### Named Rules
**The No-Touch Rule.** Display headings must maintain a letter-spacing floor of `-0.02em`. Letters should never optically touch. Cramped typography reads as amateurish, not designed.

## 4. Elevation

The system is entirely flat. 

### Shadow Vocabulary
- **None**: Physical shadows are prohibited.

### Named Rules
**The Flat-By-Default Rule.** Depth is communicated exclusively through 1px solid borders and deliberate whitespace. Elements never float or cast shadows; they sit rigidly on the 2D plane.

## 5. Components

### Buttons
- **Shape:** Sharp corners (0px radius).
- **Primary:** Electric Cobalt background, True White text, 12px 24px padding.
- **Hover / Focus:** Instant transition to Graphite Ink background. No soft fades.
- **Secondary / Ghost:** Transparent background, 1px solid Structural Border, Graphite Ink text.

### Chips
- **Style:** JetBrains Mono font, 1px solid border, transparent background.
- **State:** Selected state inverts to Electric Cobalt background with White text.

### Cards / Containers
- **Corner Style:** 0px radius.
- **Background:** True White or Technical Gray.
- **Shadow Strategy:** No shadows.
- **Border:** 1px solid Structural Border on all sides.
- **Internal Padding:** 24px or 32px (lg).

### Inputs / Fields
- **Style:** 1px solid border, sharp corners, transparent background.
- **Focus:** Border snaps to Electric Cobalt. No glowing focus rings.

### Navigation
- **Style:** Stark top border, mono labels, immediate hover states without transitions.

## 6. Do's and Don'ts

### Do:
- **Do** use strict 1px borders to separate content zones.
- **Do** ensure body text maintains a contrast ratio of at least 4.5:1 against its background.
- **Do** use JetBrains Mono for data points, tags, and technical terminology.

### Don't:
- **Don't** use generic 2026 AI tropes: no overly rounded cards (32px+).
- **Don't** use meaningless gradient text over gradient backgrounds.
- **Don't** use "ghost-card" (border + heavy drop shadow) components.
- **Don't** use arbitrary diagonal stripes.
- **Don't** use repetitive "01 ABOUT" eyebrow kickers above every section.
- **Don't** use glassmorphism, background blurs, or semi-transparent glowing overlays.
- **Don't** use warm, tinted beige/cream backgrounds for the body canvas.
