'use client';

import { useContent } from '../contexts/ContentContext';
import { staffList } from '../data/staff';

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
      </div>
      <div className="style-center-div" style={{padding: '10px 10px 30px 10px'}} id="float">
        Brewtendo Staff:
        <hr style={{width: '100%'}} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ul style={{listStyleType: 'none', margin: 0, padding: 0, float: 'left'}}>
            {firstHalf.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
          <ul style={{listStyleType: 'none', margin: 0, padding: 0, float: 'left'}}>
            {secondHalf.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}