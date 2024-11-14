import './Footer.css';
export default function Footer(){


  return(
    <div className="footer">
      <div className="col">
        <img src="./imgs/fc.svg" className='facebooklogo'/>
        <img src="./imgs/insta.svg"/>
        <img src="./imgs/pint.svg"/>
        <img src="./imgs/yt.svg"/>
        <img src="./imgs/tiktok.svg"/>
        <img src="./imgs/twit.svg"/>
        <img src="./imgs/wp.svg"/>
      </div>
      <div className="col">
        <p>© Start, 2022. All rights reserved.</p>
      </div>
    </div>
  );
}