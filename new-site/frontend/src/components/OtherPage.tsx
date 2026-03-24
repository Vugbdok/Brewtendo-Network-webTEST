'use client';

import { useContent } from '../contexts/ContentContext';

export default function OtherPage() {
  const { changeContent, playAudio, swapStyleSheet } = useContent();

  return (
    <div>
      <div className="navi-bar">
        <div id="center-navi">
          <h4 onClick={() => { changeContent('home'); swapStyleSheet('/css/main.css'); playAudio('decide'); }}>Brewtendo</h4>
          <h4 onClick={() => { changeContent('guide'); swapStyleSheet('/css/guide.css'); playAudio('decide'); }}>Install Guide</h4>
          <h4 onClick={() => { changeContent('badgearcade'); swapStyleSheet('/css/guide.css'); playAudio('decide'); }}>Badge Arcade</h4>
          <h4 onClick={() => { changeContent('other'); swapStyleSheet('/css/main.css'); playAudio('decide'); }} style={{border: 'none'}}>Other Info</h4>
        </div>
      </div>
      <div className="style-center-div" style={{padding: '10px 10px 30px 10px'}} id="float">
        Brewtendo Staff:
        <hr style={{width: '100%'}} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ul style={{listStyleType: 'none', margin: 0, padding: 0, float: 'left'}}>
            <li>Adrian (VugbKat)</li>
            <li>Andrea</li>
            <li>Bunnyzluver1998</li>
            <li>FunDog</li>
            <li>HEXADUCK</li>
            <li>John N. Brewtendo</li>
            <li>Khentendo</li>
            <li>KittenPeng</li>
            <li>Meng</li>
            <li>Mr.Ghosty</li>
            <li>Preblox</li>
            <li>Drag0n_A13</li>
            <li>Thom</li>
          </ul>
          <ul style={{listStyleType: 'none', margin: 0, padding: 0, float: 'left'}}>
            <li>SatellaGuy</li>
            <li>Somarix</li>
            <li>Technet</li>
            <li>cannedfart</li>
            <li>cool guy</li>
            <li>gilberr</li>
            <li>nebulagamez</li>
            <li>very broken ps3</li>
            <li>vista</li>
            <li>ENO yosh :3</li>
            <li>synikers</li>
            <li>sam.</li>
            <li>Ragy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}