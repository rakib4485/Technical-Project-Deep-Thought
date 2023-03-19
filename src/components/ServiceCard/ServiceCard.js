import React from 'react';
import Accordion from '../Accordion/Accordion';

const ServiceCard = () => {
    const items = {
        title: 'Technical Project Management ',
        content: 'Story of Alignment Scope of Agility Specific Accountable Staggering Approach ',
      }
    return (
        <div className='rounded-2xl h-[600px] border-2 my-12 shadow-md'>
            <Accordion 
                items={items}
            />
            <div>
            <iframe height="315"  src="https://www.youtube.com/embed/TiMRwri1xJ8" className='w-full' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default ServiceCard;