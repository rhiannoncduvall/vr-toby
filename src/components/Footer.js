import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url, label } = social;
          return (
              <a href={url} className={`icon ${style} ${icon}`}>
              </a>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; 2020 VR Toby</li>
      </ul>
    </footer>
  );
}
