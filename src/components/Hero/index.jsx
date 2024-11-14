import './Hero.css' 
export default function Hero(){

  return(
    <div className="hero">
      <div className="col">
        <h2>welcome</h2>
        <h1>Lorem ipsum dolor sit amet consectetur </h1>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</h3>
        <button>Explore</button>
      </div>
      <div className="col">
        <img src="img1.svg" alt="" />
      </div>
    </div>
  );
}