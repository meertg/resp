import './Header.css';
export default function Header(){

  return(
    <header>
    <div className="left">
      <img src="imgs/logo.svg" />
      <span>Start</span>
    </div>
    <div className="right">
      <ul>Home</ul>
      <ul>Portfolio</ul>
      <ul>Services</ul>
      <ul>Contact</ul>
    </div>
    <div className="hamburgericon">
      <img src="./imgs/hamburger.svg" alt="" />
    </div>
    </header>
  );
}