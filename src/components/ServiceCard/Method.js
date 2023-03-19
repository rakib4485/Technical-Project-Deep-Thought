import React from 'react';
import Accordion from '../Accordion/Accordion';
import MethodAccordion from '../Accordion/MethodAccordion';

const Method = () => {
    const items = {
        title: '4SA Method ',
        content: 'To explore more read more ',
    }

    const methods = [
        {
            id: 0,
            title: "Introduction",
            content: "The 4SA Method, How to bring a idea into process?",
            examples:[]
        },
        {
            id: 1,
            title: "Thread A",
            content: "How are you going to develop your strategy? Which method are you going to use to develop a strategy?What if the project is lengthy? ",
            examples: [
                {
                    id: 0,
                    exTitle: "Example 1",
                    exContent: "You have a concept; how will you put it into practice to create a product? How will you organize the final product? Can the product's MVP be created in a week?How will you come up with a plan? Do you need a strategy or just a plan to succeed?"
                }
            ]
        },
        {
            id: 2,
            title: "Translation 1",
            content: "For preparing the strategy from the concept and build it into product one of the methods used is the 4SA approach.",
            examples:[]
        },
        {
            id: 3,
            title: "Thread B",
            content: "",
            examples: [
                {
                    id: 0,
                    exTitle: "Example 1",
                    exContent: "Story for Alignment: Using the concepts we already have, let's create a toy story to explain why the project is being built. By including Raju Chitu in the narrative, let's provide a real-world illustration of how that product will be used by actual customers. That will be a macro story in which we develop an actual product from a concept. But what about the product's finer points? How can we illustrate real-world examples of Raju and Chitu using our product? Here is the micro story where the product's uses are explained. We now have a local, global, and macro perspective of the product.Micro and macro stories are interconnected; as we construct one, we may end up with the other.?"
                },
                {
                    id: 1,
                    exTitle: "Example 2",
                    exContent: "Scope of Agility: Because there was no visual representation of the product, we failed to account for four key factors: user value, functionality, UX flow, and user emotions.In order to determine the scope of agility, we define the fundamental aesthetics and wireframe of the product. To provide a clear image for creating a mental map of the product, the wireframe would be as straightforward as is practical."
                },
                {
                    id: 2,
                    exTitle: "Example 3",
                    exContent: "Specific Accountable:Everything is clear in the idea, concept, and flow diagram. The product is ready for use. But how? What is lacking and what can cause the product to stop? The product's architecture does not exist right now. We described market placed visuals as having everything but the product's backbone.We will outline every aspect of the product in this step. The figures for data modals, APIs, and front-end screens will all be defined in this part of the accountability process."
                },
                {
                    id: 3,
                    exTitle: "Example 4",
                    exContent: "Staggered approach:Up until this point in the product's management, we are gathering everything. Everything is currently in our hands. However, how are we going to approach it, what are dependencies, and how do we determine an element's dependence on the product? Which would come in first and which second? What are the product's phases, steps, and breakdown, and how many of them are there? This product management step will determine each milestone."
                }   
            ]
        },
        {
            id: 4,
            title: "Conclusion",
            content: "The product is now ready to launch; we have a strategy-based plan from an innovative concept.",
            examples:[]
        }
    ]
    return (
        <div className='rounded-2xl h-[550px] border-2 my-12 shadow-md pb-12'>
            <Accordion
                items={items}
            />
            <div className='max-h-[400px] w-full overflow-auto'>
              <div className="max-h-[500px] w-full overflow-auto">
              {
                methods.map((method, index) => <MethodAccordion
                    key={index}
                    method={method}
                />)
              }
              </div>
            </div>
            
        </div>
    );
};

export default Method;