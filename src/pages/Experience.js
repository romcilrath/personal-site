import React from 'react';
import '../styles/Experience.css'
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function Experience() {
  return (
    <div className="experience">
      <TimelineComponent
        itemAlignment="Alternate" // Items alternate on left and right
        dotSize={12} // Customize the dot size
      >
        <ItemsDirective>
          <ItemDirective
            content="Bachelors in Computer Science"
            oppositeContent="2011 - 2015"
            description="Studied computer science, focusing on software development, algorithms, and data structures."
            media={{
              type: 'IMAGE',
              source: { url: 'https://placekitten.com/200/300' },
            }}
          />
          <ItemDirective
            content="Software Engineer"
            oppositeContent="2016 - 2020"
            description="Worked as a full-stack developer, building web applications and optimizing user experiences."
            media={{
              type: 'IMAGE',
              source: { url: 'https://placekitten.com/200/300' },
            }}
          />
          <ItemDirective
            content="Software Engineer"
            oppositeContent="2016 - 2020"
            description="Worked as a full-stack developer, building web applications and optimizing user experiences."
            media={{
              type: 'IMAGE',
              source: { url: 'https://placekitten.com/200/300' },
            }}
          />
        </ItemsDirective>
      </TimelineComponent>

    </div>
  );
}

export default Experience;
