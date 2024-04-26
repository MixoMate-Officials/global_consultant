import React from 'react';
import businness from "./../assets/bg-1.jpg";
import unity from "./../assets/bg-2.jpg";
import { ChevronForwardOutline, Play } from 'react-ionicons';
import AnimatedButton from './common/AnimatedButton';

function AboutCompany() {
  return (
    <div className="w-full min-h-screen lg:px-24 py-10 lg:flex block gap-x-24">
      <div className="lg:w-1/2 w-full h-full p-10 relative">
        <img
          src={businness}
          width={200}
          height={200}
          className="w-full h-full rounded-2xl shadow-sm"
        />
        <div className="absolute lg:w-96 w-52 lg:h-52 h-36 rounded-lg lg:right-0 right-4 bottom-0  ">
          <img src={unity} className="w-full h-full rounded-2xl shadow-sm" />
          <span className="absolute top-1/2 left-1/2 flex justify-center items-center h-10 w-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
            <button className="absolute">
              <Play
                color={"#fff"}
                height="10px"
                width="10px"
                cssClasses={"text-hite"}
              />
            </button>
          </span>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-full">
        <div className="p-12">
          <p className="text-primary font-medium text-xl">ABOUT COMPANY</p>
          <h1 className="text-black lg:text-5xl text-2xl leading-tight font-semibold my-4">
            Strategic partner for Finance and Business Strategy.
          </h1>
          <p className="text-secondary my-2">
            Your strategic partner in navigating the complexities of Finance and
            Business Strategy. We offer comprehensive solutions tailored to your
            unique business needs, ensuring excellence and integrity in every
            engagement. Discover how our expertise in Internal Audit, Tax
            Services, Feasibility Studies, Fractional CFO Services, and
            Valuation Reports can propel your business forward.
          </p>

          <div className="my-14">
            <div className="pb-5">
              <h1 className="lg:text-3xl text:xl font-semibold">
                {" "}
                <ChevronForwardOutline
                  color={"#000"}
                  cssClasses={"text-primary-light inline-block mb-1 mr-4"}
                />
                Our Vision
              </h1>
              <p>
                Global Strategy Finance Consultants, we're committed to
                empowering businesses with insightful financial strategies and
                robust analyses. Our team of seasoned professionals brings a
                wealth of experience across diverse industries, dedicated to
                delivering measurable results and unparalleled value.
              </p>
            </div>
            <div>
              <h1 className="lg:text-3xl text:xl font-semibold">
                {" "}
                <ChevronForwardOutline
                  color={"#000"}
                  cssClasses={"text-primary-light inline-block mb-1 mr-4"}
                />
                Our Mission
              </h1>
              <p>
                To be recognized as the trusted advisor for businesses seeking
                innovative Financial and Strategic Solutions, contributing to
                their sustainable growth and success.
              </p>
            </div>

            {/* <div>
              <h1 className="lg:text-3xl text-xl font-semibold">Our Mission</h1>
              <ul className="my-8">
                <li className="my-2">
                  <ChevronForwardOutline
                    color={"#000"}
                    cssClasses={"text-primary-light inline-block mb-1 mr-4"}
                  />
                  <span className="text-secondary">
                    Nulla congue aliquet vulputate
                  </span>
                </li>
                <li className="my-2">
                  <ChevronForwardOutline
                    color={"#000"}
                    cssClasses={"text-primary-light inline-block mb-1 mr-4"}
                  />
                  <span className="text-secondary">
                    Nulla congue aliquet vulputate
                  </span>
                </li>
                <li className="my-2">
                  <ChevronForwardOutline
                    color={"#000"}
                    cssClasses={"text-primary-light inline-block mb-1 mr-4"}
                  />
                  <span className="text-secondary">
                    Nulla congue aliquet vulputate
                  </span>
                </li>
                <li className="my-2">
                  <ChevronForwardOutline
                    color={"#000"}
                    cssClasses={"text-primary-light inline-block mb-1 mr-4"}
                  />
                  <span className="text-secondary">
                    Nulla congue aliquet vulputate
                  </span>
                </li>
              </ul>
            </div> */}
          </div>

          <AnimatedButton text={"More About Us"} />
        </div>
      </div>
    </div>
  );
}

export default AboutCompany