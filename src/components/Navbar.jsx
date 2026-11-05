import { useEffect, useRef, useState } from "react";

const pages = [
  ["about", "About"], ["experience", "Experience"], ["stack", "Stack"],
  ["projects", "Projects"], ["certifications", "Certifications"],
  ["recommendations", "Recommendations"], ["affiliations", "Affiliations"],
];

export default function Navbar({ onNavigate, activePage }) {
  const drawer = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 801px)");
    const closeOnDesktop = () => {
      if (desktop.matches) drawer.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function navigate(page) {
    onNavigate(page);
    drawer.current?.close();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function content() {
    return <>
      <a className="sidebar-name" href="#about" onClick={event => { event.preventDefault(); navigate("about"); }}>Gabrielle Sacluti</a>
      <nav className="sidebar-links" aria-label="Main navigation">
        {pages.map(([page, label]) => <button key={page} aria-current={activePage === page ? "page" : undefined} onClick={() => navigate(page)}>{label}</button>)}
      </nav>
      <div className="sidebar-contact">
        <p className="sidebar-contact-text">For work, opportunities and any related queries, please reach me at</p>
        <a href="mailto:gabriellesac07@icloud.com">gabriellesac07@icloud.com</a>
      </div>
    </>;
  }

  return <>
    <header className="sidebar desktop-sidebar">{content()}</header>
    <header className="mobile-bar">
      <button className="mobile-menu-button" aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { drawer.current.showModal(); setOpen(true); }}>
        <span className="menu-lines" aria-hidden="true"><i /><i /><i /></span>
      </button>
      <a href="#about" className="font-pixel" onClick={event => { event.preventDefault(); navigate("about"); }}>Gabrielle Sacluti</a>
    </header>
    <dialog id="mobile-navigation" ref={drawer} className="mobile-drawer" aria-label="Navigation" onClose={() => setOpen(false)} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) drawer.current.close();
    }}>
      <button className="mobile-menu-close" aria-label="Close navigation" onClick={() => drawer.current.close()} autoFocus>×</button>
      {content()}
    </dialog>
  </>;
}
