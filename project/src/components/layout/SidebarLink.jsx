import MaterialIcon from './MaterialIcon';

export default function SidebarLink({ icon, label, isActive, href = "#" }) {
  return (
    <a 
      href={href} 
      className={`
        flex items-center gap-4 py-3 relative w-[90%]
        text-[var(--color-info-dark)] hover:text-[var(--color-We)] 
        transition-all duration-300 hover:translate-x-2
        group
        ${isActive ? 'before:content-[""] before:w-1.5 before:h-full before:bg-[var(--color-We)] before:absolute before:left-0' : ''}
        ${isActive ? 'bg-[var(--color-light)]' : ''}
      `}
    >
        <MaterialIcon 
          name={icon} 
            className={`text-2xl ml-6 transition-colors duration-300
                ${isActive ? 'text-[var(--color-We)] opacity-100' : ''}
                group-hover:opacity-100
          `} 
        />
      <h3 className={`font-medium text-[0.87rem] transition-colors duration-300
        ${isActive ? 'text-[var(--color-We)] opacity-100' : ''}
        group-hover:opacity-100
      `}>
        {label}
      </h3>
      </a>
    );
  }