# Reverie Archive — Changelog

All notable changes to this project are documented here.

This project follows semantic versioning:
MAJOR.MINOR.PATCH (e.g. 0.1.0)

---

## [0.1.0] - 2026-05-20

### Added
- Initial homepage structure with glassmorphism UI design
- Typewriter system for rotating quotes
- Scroll-based reveal animation system
- Library section with novel entry cards
- Navigation between Home and Library pages
- Basic archive-style layout structure

### UI / UX
- Apple-inspired frosted glass design system
- Ambient gradient background animation
- Smooth fade-in transitions
- Hidden scrollbar aesthetic
- Subtle hover interactions

---

## [0.1.1] - 2026-05-21

### Fixed
- Gate authentication input alignment issues
- Layout spacing inconsistencies in auth UI
- Responsive layout improvements

### Changed
- Improved glass transparency layering
- Typography spacing refinements

---

## [0.2.0] - 2026-05-22

### Added
- Terminal-style gate authentication system
- sessionStorage-based access control
- Protected routing for archive pages
- ACCESS GRANTED / DENIED feedback system

### Security
- Basic front-end access protection layer
- Session persistence for authenticated state
- Prevented direct navigation bypass

---

## [0.3b] - 2026-05-22

### Core System Stabilized
- Core archive structure finalized
- Novel system architecture established
- Multi-page reading system introduced
- Basic library index page implemented

### Changed
- Simplified homepage architecture
- Separated UI layers for performance stability
- Removed early unstable dynamic library experiment

---

## [1.0.0] - 2026-05-23

### Vision
Fully transitioned from static archive UI → dynamic data-driven system.

---

### Core System (Implemented)

#### Database Layer (Supabase)
- Introduced Supabase as single source of truth
- Implemented `books` table for library system
- Implemented `chapters` table for novel content
- Migrated all JSON-based content into database
- Removed static library.json dependency

#### Library System
- Fully dynamic book grid powered by Supabase
- Book cards generated from database entries
- Status system (active / sealed / unstable)
- Dynamic routing via `/book.html?id=xxx`

#### Reader Engine v1
- Chapter-based reading system (Supabase-driven)
- Dynamic chapter loader using REST API
- URL-based navigation:
  `/reader.html?book=tne&chapter=c1`
- Sequential chapter indexing support
- Automatic chapter preloading system

#### Data Model Standardization
- Unified book schema:
  - id
  - title
  - desc
  - cover / cover-p
  - status
- Unified chapter schema:
  - id (string-based, e.g. tne_c1)
  - book_id
  - chapter_index (int)
  - title
  - content

---

### UI / UX

- Immersive reading mode (distraction-free layout)
- Chapter navigation (prev / next)
- Progress tracking via chapter index
- Improved typography for long-form reading
- Consistent archive aesthetic across pages

---

### Architecture Transition

System evolution:

Static Archive → Hybrid System → Full Data-Driven Archive

Structure:

Home → Library (Books) → Book Page → Chapter Reader

## [1.1.0] - Upcoming Content Expansion

### Added (Planned Content Updates)

#### Oathborne Expansion
- New chapters added to Oathborne storyline
- Expanded “oath / consequence / truth cost” narrative layer
- Improved chapter structuring for sealed narrative flow
- Metadata refinement for story-state tracking

#### Re: The Nonexistent World (Re:TNE) Expansion
- Additional recursive chapters added
- Strengthened looped narrative structure
- Enhanced instability / echo-based storytelling system
- Improved chapter indexing consistency for branching flow

---

### System Improvements
- Better separation between multiple book narratives
- Preparation for multi-story scaling system
- Improved chapter metadata handling for future dynamic features

---

### UI / UX
- Minor improvements to reader navigation stability
- Better chapter loading performance for larger story sets

---

### Direction
Shift from:
Single archive system → Multi-narrative ecosystem