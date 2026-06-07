---
name: Sylvan Engineering
colors:
  surface: "#00170f"
  surface-dim: "#00170f"
  surface-bright: "#004231"
  surface-container-lowest: "#00120b"
  surface-container-low: "#002117"
  surface-container: "#00251a"
  surface-container-high: "#003123"
  surface-container-highest: "#003d2d"
  on-surface: "#b0f0d6"
  on-surface-variant: "#bec9c2"
  inverse-surface: "#b0f0d6"
  inverse-on-surface: "#003829"
  outline: "#89938d"
  outline-variant: "#3f4944"
  surface-tint: "#8bd6b6"
  primary: "#8bd6b6"
  on-primary: "#003828"
  primary-container: "#065f46"
  on-primary-container: "#8bd6b7"
  inverse-primary: "#1b6b51"
  secondary: "#ffb77d"
  on-secondary: "#4d2600"
  secondary-container: "#d97707"
  on-secondary-container: "#432100"
  tertiary: "#ccc5bf"
  on-tertiary: "#33302c"
  tertiary-container: "#57534e"
  on-tertiary-container: "#cdc7c0"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#a6f2d1"
  primary-fixed-dim: "#8bd6b6"
  on-primary-fixed: "#002116"
  on-primary-fixed-variant: "#00513b"
  secondary-fixed: "#ffdcc3"
  secondary-fixed-dim: "#ffb77d"
  on-secondary-fixed: "#2f1500"
  on-secondary-fixed-variant: "#6e3900"
  tertiary-fixed: "#e8e1db"
  tertiary-fixed-dim: "#ccc5bf"
  on-tertiary-fixed: "#1e1b17"
  on-tertiary-fixed-variant: "#4a4641"
  background: "#00170f"
  on-background: "#b0f0d6"
  surface-variant: "#003d2d"
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.5"
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "600"
    lineHeight: "1.0"
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  section-gap: 120px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system captures the intersection of organic growth and technical precision. It is designed for a senior engineering professional who values stability, deep-rooted expertise, and modern architectural clarity. The brand personality is grounded, sophisticated, and quiet—prioritizing content and code over visual noise.

The style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes a "layered forest" metaphor to create depth, where code snippets and technical projects live on translucent "fog" layers above a deep, atmospheric background. The interface should feel like a high-end IDE viewed through a clearing in the woods: dark, calm, and highly focused.

## Colors

The palette is rooted in deep, immersive greens to ensure a focused environment for reading complex technical documentation.

- **Primary & Neutral**: The "Ground" and "Tree" layers provide a stable, dark foundation that reduces eye strain.
- **Accent**: A muted earthy brown (amber-700) is used sparingly for highlights, call-to-actions, and syntax highlighting to represent sunlight breaking through the canopy.
- **Parallax Tokens**: Use `layers.ground` for the closest, darkest elements, `layers.tree` for mid-ground UI containers, and `layers.mountain` for the furthest background elements to simulate atmospheric perspective.

## Typography

The typography system balances the boldness of engineering leadership with the precision of development.

- **Headings**: Montserrat provides a geometric, structured feel that anchors the page.
- **Body**: Hanken Grotesk is used for long-form project descriptions, offering high legibility with a contemporary, sharp edge.
- **Technical/Labels**: JetBrains Mono is utilized for all metadata, tags, and code snippets to reinforce the "Fullstack Engineer" persona. All labels should be set in uppercase with increased letter spacing for a refined, "blueprint" aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain optimal line lengths for technical reading, transitioning to a fluid model for mobile.

- **Grid**: A 12-column grid with generous 24px gutters. Elements should often span 8 columns for readability, leaving 4 columns for supplementary metadata or "technical sidebars."
- **Sectioning**: Use wide vertical gaps (120px) to give the "parallax layers" room to breathe.
- **Alignment**: Maintain a strict vertical rhythm based on the 8px base unit. UI cards and code blocks should align to the grid edges to reflect structured code.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and tonal stacking rather than traditional drop shadows.

1.  **Base Layer**: The deep forest background (`layers.ground`).
2.  **Card Layer**: Surfaces use a semi-transparent blur (Backdrop Filter: blur(12px)) with a subtle 1px border using `layers.mist`. This creates the effect of frosted glass over a dark forest.
3.  **Active Layer**: For hover states or modals, increase the transparency and add a soft, tinted glow (0 8px 32px rgba(0, 0, 0, 0.4)) to simulate the element lifting closer to the user.

## Shapes

To maintain a professional and technical tone, the design system utilizes **Soft** corners.

- **Containers**: Cards and code blocks use 0.5rem (`rounded-lg`) to prevent the UI from feeling too aggressive or "brutalist."
- **Interactive Elements**: Buttons and input fields use 0.25rem to maintain a sharp, precise engineering aesthetic.
- **Avoid Pills**: Do not use pill-shaped buttons; they are too playful for this grounded, professional portfolio.

## Components

- **Buttons**: Primary buttons should be solid `primary_color_hex` with white text. Secondary buttons are "ghost" style with a 1px border of `layers.mist`.
- **Project Cards**: Use the Glassmorphism style. The header of the card should use `label-caps` for the tech stack and `headline-md` for the title.
- **Code Blocks**: Use a slightly darker, opaque background than the standard card to ensure syntax highlighting pop. Include a custom scrollbar styled in `tertiary_color_hex`.
- **Chips/Tags**: Small, rectangular tags with `code-sm` typography. Background should be a subtle 10% opacity of the secondary color.
- **Inputs**: Dark backgrounds with 1px bottom-borders only, resembling a terminal command line.
- **Parallax Sections**: Implement containers that move at different scroll speeds, specifically using the "Mountain" (slowest), "Tree" (medium), and "Ground" (fastest) tokens for background SVG assets.
