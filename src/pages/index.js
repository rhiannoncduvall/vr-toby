import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/data-chart.jpeg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            What we do
          </h2>
          <p>
            We bridge the gap between NLP research and the industry. With our open-source software, we enable developers to use the latest language models & transfer learning techniques for their individual tasks. Our additional features & services help enterprises to build, run and maintain production-ready NLP applications.
          </p>
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Our Services
          </h2>
          <p>
            We bring you up to speed with latest developments in NLP. For executives we focus on concepts, business opportunities, market structures and integration approaches. 
          </p>
          <ul className="icons major">
            <li>
              <span className="icon solid fa-gem  style1">
                <span className="label">Lorem</span>
              </span>
              <span className="margin-left">
                Use case discovery
              </span>
            </li>
            <li>
              <span className="icon solid fa-heart style1">
                <span className="label">Ipsum</span>
              </span>
              <span className="margin-left">
                Proof of concept
              </span>
            </li>
            <li>
              <span className="icon solid fa-code style1">
                <span className="label">Dolor</span>
              </span>
              <span className="margin-left">
                Productization
              </span>
            </li>
          </ul>
        </div>
      </section>
      {/* <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section> */}
      {/* <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section> */}
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>What NLP Can Do For You</h2>
          <p>
            No magic. Just cutting-edge NLP driven by Transfer Learning.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-file">
            <h3>Document Classification</h3>
            <p>
              Automatically detect and tag different types of documents.
            </p>
          </li>
          <li className="icon solid fa-filter">
            <h3>Summarization</h3>
            <p>
              Condense texts to their absolute essence.
            </p>
          </li>
          <li className="icon solid fa-lightbulb">
            <h3>Cognitive Search</h3>
            <p>
              Search for content not just for keywords.
            </p>
          </li>
          <li className="icon solid fa-comment">
            <h3>Topic Extraction</h3>
            <p>
              Detect the key topics across large corpora of documents.
            </p>
          </li>
          <li className="icon fa-caret-square-right">
            <h3>Content Extraction</h3>
            <p>
              Detect & extract structured data like products, proteins or liability sums from your documents with customized entity recognition.
            </p>
          </li>
          <li className="icon fa-question-circle">
            <h3>Question Answering</h3>
            <p>
              Automatically reply to frequently occurring questions.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Interested in our services?</h2>
          <p>
            See how VR Toby can provide solutions for your company.
          </p>
        </header>
        <ul className="actions stacked">
          <li className="hidden">
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
          <li>
            <a href={config.contactInfo.emailUrl} className="button fit primary">
              Contact us
            </a>
          </li>

        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
