import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-primary h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-purple-400">
              About
            </p>
          </div>
        </div>
        <div></div>
        <div>
          <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi, I'am Samjot, nice to meet you!</p>
            </div>
            <div>
              <p>
                I have experience working with languages/frameworks such as
                HTML, CSS, Typescript, JavaScript, React, Redux, Next.js, Vue,
                Node.js, Express.js, GraphQL, Apollo, WordPress. From optimizing
                single-page web applications to successfully implementing
                company-wide system updates I've gained valuable hands-on
                experience meeting client's business requirements and fulfilling
                brand-building needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
