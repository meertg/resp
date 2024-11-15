import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Connections from "./components/Connections";
import Security from "./components/Security";
import Team from "./components/Team";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">


    <Layout Color={'var(--green)'}>
    <Header/>
    <Hero/>
    </Layout>
    <Layout>
    <Socials/>
    <Connections/>
    <Security/>
    <Team/>
    </Layout>
    <Layout Color={'var(--green)'}>
    <Footer/>
    </Layout>
      
      
    </div>
  );
}

export default App;





function Layout({children,Color}){
  const px = window.innerWidth;
  
  return(
  <div style={{width: '100%', padding: px > 760 ? '0 10%' : '10px', backgroundColor : Color ? Color : 'white'}}> 
  	{children}
  </div>
  );
}
