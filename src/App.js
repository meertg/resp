import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">


    <Layout>
    <Header/>
    <Hero/>
    </Layout>
      
      
    </div>
  );
}

export default App;





function Layout({children}){

  const px = window.innerWidth;

  return(
  <div style={{width: '100%', padding: px > 768 ? '0 10%' : '10px'}}> 
  {children}
  </div>
  );
}