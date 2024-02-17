import { useState } from 'react';

import { EXAMPLES } from './data';
import Header from './components/Header';
import TabButton from './components/TabButton';
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS } from './data';

function App() {
  let [ selectedTopic, setSelectedTopic ]= useState('');

  let tabContent = 'Please press a button';

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          { selectedTopic ? (<div id='tab-content'>
            <h3>
              {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>) : <p>Click a button to begin exploring these core topics!</p> }
        </section>
      </main>
    </>
  );
}

export default App;
