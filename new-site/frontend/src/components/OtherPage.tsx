'use client';

import { useContent } from '../contexts/ContentContext';

export default function OtherPage() {
  const { changeContent, swapStyleSheet } = useContent();

  const midPoint = Math.ceil(staffList.length / 2);
  const firstHalf = staffList.slice(0, midPoint);
  const secondHalf = staffList.slice(midPoint);

  return (
    <div>
      <div className="navi-bar">
        <div id="center-navi">
          <h4 onClick={() => { changeContent('home'); swapStyleSheet('/css/main.css'); }}>Brewtendo</h4>
          <h4 onClick={() => { changeContent('guide'); swapStyleSheet('/css/guide.css'); }}>Install Guide</h4>
          <h4 onClick={() => { changeContent('badgearcade'); swapStyleSheet('/css/guide.css'); }}>Badge Arcade</h4>
          <h4 onClick={() => { changeContent('other'); swapStyleSheet('/css/main.css'); }} style={{border: 'none'}}>Other Info</h4>
        </div>
        <div>
          <img src="new-site/frontend/public/images/miis/Adrian_render_headshot_2026-03-24T22_43_30.373Z.png" width="100" alt="Brewtendo" />
        </div>
      </div>
    </div>
  );
}
