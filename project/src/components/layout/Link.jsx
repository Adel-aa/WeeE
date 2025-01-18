              import React from 'react';

export function Link({ href, icon: Icon, children }) {
  return (
    <a
        href={href}
            className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-[#8860D0]/10 rounded-lg hover:text-[#8860D0] transition-colors"
        >
        <Icon size={20} />
          <span>{children}</span>
        </a>
  );
                                }