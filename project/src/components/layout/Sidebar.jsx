import React from 'react';
import MaterialIcon from './MaterialIcon';
import SidebarLink from './SidebarLink';
import './Sidebar.css';

export default function Sidebar({ darkMode }) {
  const links = [
    { icon: 'grid_view', label: 'Daily Performance', isActive: true },
    { icon: 'trending_up', label: 'Weekly Trend' },
    { icon: 'calendar_month', label: 'Monthly Trend' },
      { icon: 'inventory', label: 'KPIS' },
    { icon: 'groups', label: 'Teams' },
    { icon: 'crisis_alert', label: 'Targets' },
    { icon: 'account_circle', label: 'My Profile' },
      { icon: 'settings', label: 'Settings' },
    ];

  return (
    <aside
      className={`w-[16%] h-[calc(100vh-4rem)] fixed left-0 flex flex-col pl-4 ${
          darkMode ? 'bg-gray-900' : 'bg-[#f4f4f4]'
      } transition-colors duration-300`}
    >
      <nav className="flex-1 mt-6">
        {links.map((link) => (
          <SidebarLink
            key={link.label}
            icon={link.icon}
            label={link.label}
            isActive={link.isActive}
            darkMode={darkMode}
          />
        ))}
      </nav>

      <div className="mt-auto mb-8">
        <SidebarLink icon="logout" label="Logout" darkMode={darkMode} />
      </div>
    </aside>
  );
}