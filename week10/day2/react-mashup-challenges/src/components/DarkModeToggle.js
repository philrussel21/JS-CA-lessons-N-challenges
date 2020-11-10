import React, { useState, useEffect } from 'react';
import Brightness6Icon from '@material-ui/icons/Brightness6';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const handleToggle = () => {
    if (isDark === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setIsDark(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setIsDark(false);
    }
  };

  return (
    <div>
      <Brightness6Icon onClick={handleToggle}>
      </Brightness6Icon>
    </div>
  );
}

export default DarkModeToggle;
