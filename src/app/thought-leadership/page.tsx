import React from 'react';

const ThoughtLeadership = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Thought Leadership</h1>
      
      {/* Section 1: Digital Decoupling (Valtech + Your Video) */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Digital Decoupling: Flipping the Script</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 rounded-lg">
          <div className="aspect-video bg-black rounded shadow-lg overflow-hidden">
             {/* This is where your uploaded video goes */}
            <video controls className="w-full h-full">
              <source src="/1720547813300.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="mb-4 text-gray-700">
              Modernizing legacy systems doesn't have to be a "rip and replace" nightmare. 
              In collaboration with Valtech, this whitepaper explores how digital decoupling 
              allows organizations to innovate on the front-end while stabilizing the back-end.
            </p>
            <a href="https://www.valtech.com/whitepapers/digital-decoupling/" target="_blank" className="text-blue-600 font-bold hover:underline">
              Read the Full Whitepaper →
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Tech and Ethics Webinar */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tech & Ethics: Navigating the New Frontier</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="mb-4 text-gray-700">
            A deep dive session with Thoughtworks experts on the ethical implications 
            of emerging tech and how executives can build responsible innovation frameworks.
          </p>
          <a href="https://www.thoughtworks.com/en-us/about-us/events/webinars/tech-and-ethics-webinar" target="_blank" className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Watch the Webinar
          </a>
        </div>
      </section>

      {/* Section 3: Digital Transformation Blog */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Boosting OEM Resilience through Digital Transformation</h2>
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
          <p className="italic text-gray-700 mb-4">
            "Three digital transformation opportunities helping OEMs boost resilience..."
          </p>
          <a href="https://www.thoughtworks.com/en-us/insights/articles/three-digital-transformation-opportunities-helping-oems-boost-re" target="_blank" className="text-blue-600 font-bold hover:underline">
            Read Article on Thoughtworks →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ThoughtLeadership;