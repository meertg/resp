import './Team.css';
export default function Team(){
  return(
    <div className="team">
      <span>
        <p>team</p>
        <h1>Our Talents</h1>
        <h2>Lorem ipsum, dolor sit amet consectetur
        Suscipit nemo hic quos, ab,</h2>
      </span>
      <section>
        <ul><img src="./imgs/person1.svg"/>
        <p className='name'>Peg Legge</p>
        <p>ceo</p>
        </ul>
        <ul><img src="./imgs/person2.svg"/>
        <p className='name'>Peg Legge</p>
        <p>ceo</p>
        </ul>
        <ul><img src="./imgs/person3.svg"/>
        <p className='name'>Peg Legge</p>
        <p>ceo</p>
        </ul>
        <ul><img src="./imgs/person4.svg"/>
        <p className='name'>Peg Legge</p>
        <p>ceo</p>
        </ul>
      </section>
      <button>View Team</button>
    </div>
  );
}