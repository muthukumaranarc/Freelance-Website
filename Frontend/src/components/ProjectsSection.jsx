import React, { useRef, useEffect, useLayoutEffect } from 'react';
import './ProjectsSection.css';

/* ─── Project data (all 4 used in both rows) ─── */
const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully functional online store with advanced search, secure checkout, and vendor management.',
    image: '/project_ecommerce.png',
    siteUrl: '#',
    codeUrl: '#'
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    description: 'A data-intensive monitoring tool with custom reporting, interactive charts, and real-time alerts.',
    image: '/project_dashboard.png',
    siteUrl: '#',
    codeUrl: '#'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A scalable task scheduling server supporting concurrent operations and task dependency.',
    image: '/project_task_manager.png',
    siteUrl: '#',
    codeUrl: '#'
  },
  {
    id: 4,
    title: 'Corporate Branding Website',
    description: 'A stunning corporate website with brand identity, animated sections and dynamic query forms.',
    image: '/project_corporate.png',
    siteUrl: '#',
    codeUrl: '#'
  }
];

/* Row 1 = normal order, Row 2 = reversed for visual variety */
const row1Projects = allProjects;
const row2Projects = [...allProjects].reverse();

/* ─── Single project card ─── */
const ProjectCard = ({ project, uid }) => (
  <div className="proj-card">
    <img
      src={project.image}
      alt={project.title}
      className="proj-card-img"
      draggable={false}
    />
    <div className="proj-card-overlay">
      <h3 className="proj-card-title">{project.title}</h3>
      <p className="proj-card-desc">{project.description}</p>
      <div className="proj-card-btns">
        <a
          href={project.siteUrl}
          className="proj-btn proj-btn-site"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Site</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
        <a
          href={project.codeUrl}
          className="proj-btn proj-btn-code"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Code</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   InfiniteRow
   ─────────────────────────────────────────────────────────────────
   direction: 'ltr'  → content moves LEFT→RIGHT  (translateX: -loop → 0)
              'rtl'  → content moves RIGHT→LEFT  (translateX: 0 → -loop)

   Track layout: [set × REPEATS]  (e.g. 4 repeats = ABCD ABCD ABCD ABCD)
   loopWidth  = scrollWidth / REPEATS  (width of exactly one set)

   The position stays inside [ -loopWidth , 0 ].
   Resetting at the boundary is invisible because every set looks identical.
   ───────────────────────────────────────────────────────────────── */
const REPEATS = 4;   // number of times the set is duplicated in the track
const SPEED   = 0.55; // px per animation frame

const InfiniteRow = ({ rowProjects, direction }) => {
  const wrapperRef   = useRef(null);
  const trackRef     = useRef(null);
  const rafRef       = useRef(null);
  const pos          = useRef(0);            // current translateX value
  const loopW        = useRef(0);            // width of one set (calculated after layout)
  const hoverPaused  = useRef(false);        // paused because mouse is hovering
  const dragPaused   = useRef(false);        // paused because user is dragging
  const drag         = useRef({ active: false, startX: 0, startPos: 0 });
  const resumeTimer  = useRef(null);

  /* Build the full repeated card list once */
  const displayCards = Array.from({ length: REPEATS }, (_, i) =>
    rowProjects.map((p) => ({ ...p, _uid: `${direction}-${p.id}-rep${i}` }))
  ).flat();

  /* ── Set initial position synchronously after layout so there's no flash ── */
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const lw = track.scrollWidth / REPEATS;
    loopW.current = lw;
    /* LTR starts at -loopW (will animate toward 0)
       RTL starts at  0     (will animate toward -loopW) */
    pos.current = direction === 'ltr' ? -lw : 0;
    track.style.transform = `translateX(${pos.current}px)`;
  }, []); // eslint-disable-line

  /* ── Animation loop ── */
  useEffect(() => {
    const tick = () => {
      const track = trackRef.current;
      if (track && !hoverPaused.current && !dragPaused.current) {
        /* Re-read loopW every frame so it's always accurate */
        const lw = track.scrollWidth / REPEATS;
        loopW.current = lw;

        if (direction === 'ltr') {
          pos.current += SPEED;
          if (pos.current >= 0) pos.current = -lw;       // reset: 0 → -lw (seamless)
        } else {
          pos.current -= SPEED;
          if (pos.current <= -lw) pos.current = 0;        // reset: -lw → 0 (seamless)
        }

        track.style.transform = `translateX(${pos.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resumeTimer.current);
    };
  }, [direction]);

  /* ── Drag helpers ── */
  const scheduleResume = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      dragPaused.current = false;
    }, 1500);
  };

  const onDragStart = (clientX) => {
    clearTimeout(resumeTimer.current);
    dragPaused.current = true;
    drag.current = { active: true, startX: clientX, startPos: pos.current };
    if (wrapperRef.current) wrapperRef.current.style.cursor = 'grabbing';
  };

  const onDragMove = (clientX) => {
    if (!drag.current.active) return;
    const track = trackRef.current;
    if (!track) return;
    const lw  = loopW.current;
    const delta = clientX - drag.current.startX;
    let next = drag.current.startPos + delta;
    /* Clamp inside the seamless range */
    next = Math.max(-lw, Math.min(0, next));
    pos.current = next;
    track.style.transform = `translateX(${next}px)`;
  };

  const onDragEnd = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    if (wrapperRef.current) wrapperRef.current.style.cursor = 'grab';
    scheduleResume();
  };

  return (
    <div
      ref={wrapperRef}
      className="proj-row-wrapper"
      style={{ cursor: 'grab' }}

      /* ── Hover pause / resume ── */
      onMouseEnter={() => { hoverPaused.current = true; }}
      onMouseLeave={() => {
        hoverPaused.current = false;
        /* Also end any active drag if cursor leaves the row */
        if (drag.current.active) {
          drag.current.active = false;
          if (wrapperRef.current) wrapperRef.current.style.cursor = 'grab';
          scheduleResume();
        }
      }}

      /* ── Mouse drag ── */
      onMouseDown={(e) => { if (e.button === 0) onDragStart(e.clientX); }}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}

      /* ── Touch drag ── */
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => { e.preventDefault(); onDragMove(e.touches[0].clientX); }}
      onTouchEnd={onDragEnd}
    >
      <div className="proj-row" ref={trackRef}>
        {displayCards.map((project) => (
          <ProjectCard key={project._uid} project={project} />
        ))}
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const ProjectsSection = () => (
  <section id="projects" className="projects-section">
    <div className="projects-section-header">
      <h2 className="projects-section-title">My Works</h2>
      <p className="projects-section-subtitle">
        Explore a selection of my latest projects, showcasing modern design, clean code, and real-world functionality.
      </p>
    </div>

    {/* Row 1 — left to right */}
    <InfiniteRow rowProjects={row1Projects} direction="ltr" />

    {/* Row 2 — right to left */}
    <InfiniteRow rowProjects={row2Projects} direction="rtl" />
  </section>
);

export default ProjectsSection;
