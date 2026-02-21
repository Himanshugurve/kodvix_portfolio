import KodVixCover from './Components/KodVixCover'
import KodVixAbout from './Components/KodVixAbout'
import KodVixServices from './Components/KodVixServices'
import KodVixTechStack from './Components/KodVixTechStack'
import KodVixWhyUs from './Components/KodVixWhyUs'
import KodVixPartner from './Components/KodVixPartner'
import KodVixGlobal from './Components/KodVixGlobal'
import KodVixContact from './Components/KodVixContact'

const sections = [
  { id: 'cover',    label: 'Cover',    Component: KodVixCover },
  { id: 'about',    label: 'About',    Component: KodVixAbout },
  { id: 'services', label: 'Services', Component: KodVixServices },
  { id: 'tech',     label: 'Tech',     Component: KodVixTechStack },
  { id: 'why',      label: 'Why Us',   Component: KodVixWhyUs },
  { id: 'partner',  label: 'Partner',  Component: KodVixPartner },
  { id: 'global',   label: 'Global',   Component: KodVixGlobal },
  { id: 'contact',  label: 'Contact',  Component: KodVixContact },
]

export default function App() {
  return (
    <div style={{ backgroundColor: '#050505' }}>
      {/* Each section fills entire screen */}
      {sections.map(({ id, Component }) => (
        <section 
          key={id} 
          id={id}
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            margin: 0,
            padding: 0,
          }}
        >
          <Component />
        </section>
      ))}

      {/* Dot navigation */}
      <nav style={{
        position: 'fixed', right: '1.25rem', top: '50%',
        transform: 'translateY(-50%)', display: 'flex',
        flexDirection: 'column', gap: '0.6rem', zIndex: 100,
      }}>
        {sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} title={label}
            style={{
              width: '7px', height: '7px', borderRadius: '50%',
              backgroundColor: 'rgba(34,211,238,0.3)', display: 'block',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#22d3ee'; e.currentTarget.style.transform = 'scale(1.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
        ))}
      </nav>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: #050505; }
        section { width: 100%; }
      `}</style>
    </div>
  )
}