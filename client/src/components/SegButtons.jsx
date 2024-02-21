import React, { useEffect } from 'react';
import './SegButtons.css';

const NavigationMenu = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a');
    const background = document.querySelector('.link-background');

    const clickHandler = (el) => {
      links.forEach((link) => {
        link.classList.remove('active');
      });
      el.classList.add('active');
    };

    links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        background.style.transform = `translateX(${128.25 * index}%)`;
        clickHandler(e.currentTarget);
      });
    });
  }, []); 

  return (
      <div className="upper_section">
        <div className="segmented_section">
            <button className="segmented_buttons" id="sb1">LawGuru</button>
            <button className="segmented_buttons" id="sb2">Legal Docs</button>
            <button className="segmented_buttons" id="sb3">Find Lawyer</button>
        </div>
      </div>
  );
};

export default NavigationMenu;
