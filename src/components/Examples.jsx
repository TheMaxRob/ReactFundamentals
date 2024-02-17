import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import { useState } from 'react'


export default function Examples() {
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        
    }
    let [ selectedTopic, setSelectedTopic ] = useState('');
    return (
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
    );
}