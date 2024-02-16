import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Core', 'Fundamental', 'Crucial'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}


function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}


function Header() {

  const description = reactDescriptions[genRandomInt(2)];
  console.log(genRandomInt(2));

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
         <h2>Core Concepts</h2>
            <ul>
              <CoreConcept 
                title={CORE_CONCEPTS[0].title} 
                image={CORE_CONCEPTS[0].image} 
                description={CORE_CONCEPTS[0].description}/>

              <CoreConcept 
                title={CORE_CONCEPTS[1].title}
                image={CORE_CONCEPTS[1].image}
                description={CORE_CONCEPTS[1].description}
              />
              <CoreConcept 
                title={CORE_CONCEPTS[2].title}
                image={CORE_CONCEPTS[2].image}
                description={CORE_CONCEPTS[2].description}
              />
              <CoreConcept 
                title={CORE_CONCEPTS[3].title}
                image={CORE_CONCEPTS[3].image}
                description={CORE_CONCEPTS[3].description}
              />
            </ul>
          
        </section>
      </main>
    </div>
  );
}

export default App;
