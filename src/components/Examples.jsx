import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import { useState } from 'react'
import Section from './Section';

export default function Examples() {
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        
    }
    let [ selectedTopic, setSelectedTopic ] = useState('');
    return (
        <Section title='Examples' id='examples'>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
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
        </Section>
    );
}