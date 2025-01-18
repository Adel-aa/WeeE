import React, { useState, useEffect } from 'react';
import { Bell, Sun, Moon } from 'lucide-react';

export default function Header({ darkMode, setDarkMode }) {
  const [hasNotification, setHasNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotificationBox, setShowNotificationBox] = useState(false);

  useEffect(() => {
    // Automatically show notification after 10 seconds
    const timer = setTimeout(() => {
      setNotificationMessage('Welcome to Portal again!');
        setHasNotification(true);
      setShowNotificationBox(true); // Show message

      // Automatically hide message after 7 seconds
      const hideMessageTimer = setTimeout(() => {
        setShowNotificationBox(false); // Hide message
      }, 7000);

      return () => clearTimeout(hideMessageTimer); // Clear hide timer
    }, 10000);

    return () => clearTimeout(timer); // Clear initial timer
  }, []);

  const handleNotificationClick = () => {
    if (showNotificationBox) {
      // If the message is active, hide it and clear the red alert
      setShowNotificationBox(false);
      setHasNotification(false);
    } else if (hasNotification) {
      // If there is a notification, show the message
      setShowNotificationBox(true);
    }
  };

  const closeNotificationBox = () => {
    setShowNotificationBox(false);
    setHasNotification(false); // Clear red alert
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b shadow-sm h-16 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-black border-gray-200'
    }`}>
      <div className="flex items-center justify-between px-6 h-full">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">
            <img
              src="https://techrevieweg.com/wp-content/uploads/2024/01/We_logo.svg_.png"
              alt="WE Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center text-lg font-bold">
            <span>KPIS</span>
            <span className="mx-2">|</span>
            <span className="text-[#8860D0]">Perform</span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4 relative">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode
                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notification Icon */}
          <button
            onClick={handleNotificationClick}
            className={`p-2 rounded-lg transition-colors duration-300 relative ${
              darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-500'
            }`}
          >
            <Bell className="w-5 h-5" />
            {hasNotification && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            )}
          </button>

          {/* Notification Box */}
          {showNotificationBox && (
            <div
              className={`absolute top-12 right-0 w-64 rounded-lg shadow-lg border p-4 z-50 ${
                darkMode
                  ? 'bg-gray-800 border-gray-700 text-gray-200'
                  : 'bg-white border-gray-200 text-gray-600'
              }`}
            >
              <button
                onClick={closeNotificationBox}
                className={`absolute top-2 right-2 ${
                  darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                ×
              </button>
              <p className="text-sm">{notificationMessage}</p>
            </div>
          )}

          <div className="text-right">
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              CEO
            </p>
          </div>
          <img
            src="https://techrevieweg.com/wp-content/uploads/2024/01/We_logo.svg_.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
