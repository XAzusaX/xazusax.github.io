# Reverie Archive — Changelog

All notable changes to this project will be documented in this file.

This project follows a simple versioning system:
- MAJOR.MINOR.PATCH (e.g. 0.1.0)

---

## [0.1.0] - 2026-05-20

### Added
- Initial homepage structure with glassmorphism UI design
- Typewriter system for dynamic rotating quotes
- Scroll-based reveal animation system
- Library section with novel entry cards
- Navigation system between Home and Library pages
- Basic footer and archive-style layout structure

### UI / UX
- Apple-inspired frosted glass design system
- Soft ambient gradient background animation
- Smooth fade-in page transitions
- Hidden scrollbar implementation for minimal aesthetic
- Subtle hover effects for interactive elements

---

## [0.1.1] - 2026-05-21

### Fixed
- Fixed input alignment issue on gate authentication page
- Fixed inconsistent layout spacing in gate UI
- Improved responsiveness of authentication container

### Changed
- Refined glass transparency for better visual hierarchy
- Adjusted typography spacing for readability

---

## [0.2.0] - 2026-05-22

### Added
- Gate authentication system (terminal-style access entry)
- Session-based access control using `sessionStorage`
- Automatic redirect to gate page for unauthorized access
- ACCESS GRANTED / ACCESS DENIED system messages
- Protected routing for novels section

### Security
- Implemented basic front-end access protection layer
- Added session persistence for authenticated state
- Prevented direct navigation bypass to protected pages

### UI / UX
- Introduced authentication UI layer consistent with archive aesthetic
- Added feedback system for login state (success / error)
- Improved interaction flow between gate and novels

---

## [0.3.0] - 2026-05-22 4:42
### Added
- Core archive structure foundation completed
- Novel system architecture established (data-driven entry system)
- Individual novel reading page routing (multi-page support)
- Basic Library index page (static fallback version)

### Changed
- Removed dynamic Home Library module (moved to future data system phase)
- Simplified Home page architecture for performance and stability

### Planned Features
- JSON-based unified content system (Library + Latest Updates + Novels)
- Interactive “archive unlock” animation system for novels
- Chapter-based reading system (multi-chapter loader)
- Metadata system (title / status / tags / progress)
- Archive viewer mode (immersive reading UI)
- Transition animations between Library ↔ Novel pages

### UI / UX Direction
- Evolve from “static pages” → “data-driven archive system”
- Introduce structured hierarchy:
  Home → Library Index → Novel Archive → Chapter View
- Improve consistency between all content entry points

## [0.3.1] - 2026-05-22 4:48
### Changed
-Resolve Issue 404 page did not show correctly

## [0.4.0] - planned

### Added
- Complete novel reading system foundation (Reader Engine v1)
- Chapter-based architecture for all novels
- Dedicated novel reading page template (unified layout)
- JSON-driven story content system (novel + chapter metadata)

### Core System
- Implemented chapter routing system (URL-based navigation)
  - Example: /novels/tne.html?chapter=1
- Structured chapter data model (title, content, order)
- Dynamic chapter loader (fetch-based content injection)
- Reading state management (current chapter tracking)

### UI / UX
- Built immersive reading mode (focus-first layout)
- Added chapter navigation controls (prev / next)
- Added progress indicator (chapter index display)
- Improved typography for long-form reading
- Reduced UI distraction during reading mode

### Changed
- Library system now acts as entry gateway only (no content rendering)
- Removed static chapter pages (fully replaced by dynamic loader system)
- Separated “Archive Index” and “Reading Experience” layers

### Planned Features
- Animated page transitions between chapters (fade / slide / glitch)
- Bookmark system (save last reading position)
- Auto-scroll reading mode (optional immersive mode)
- Chapter unlock progression system
- Text segmentation system (scene-based breaks inside chapters)
- Reading memory system (previously read highlighting)

### Architecture Direction
- Home → Index Gateway
- Library → Archive Entry System
- Novel Page → Dynamic Reader Engine
- Chapter → JSON-driven content blocks

This version marks the transition from static archive UI → full dynamic reading system.

## [1.0.0] - future release

### Vision
- Fully interactive "Reverie Archive System"
- Complete narrative-driven website experience
- Multi-layer story unlocking system
- Persistent user progression system (session-based)
- Fully cohesive archive operating system aesthetic
