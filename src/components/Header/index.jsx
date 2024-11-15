import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="left">
        <img src="imgs/logo.svg" alt="Logo" />
        <span>Start</span>
      </div>
      <div className="right">
        <ul>Home</ul>
        <ul>Portfolio</ul>
        <ul>Services</ul>
        <ul>Contact</ul>
        <div className="hamburger">
          <img src="./imgs/hamburger.png" alt="Menu" />
        </div>
      </div>
    </header>
  );
}
