import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import Team from '../components/Team';
import pic1 from '../assets/images/data-analysis.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
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
            Using state-of-the-art NLP technology driven by transfer learning, we help organizations achieve deeper insights and better understanding from their textual data. We work with our clients to create applications that transform their data into viable solutions
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-file major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-code solid major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon fa-lightbulb major style1">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
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
            We assist with discovering how your textual data can be utilized to its full potential.
            <br /><br />
            We determine proof of concept viability by applying NLP technologies to your real data.
            <br /><br />
            We transform proof of concepts into suitable products that integrate with the tech architecture of your organization.
          </p>
          {/* <ul id="services-icon-list" className="icons major">
            <li>
              <span className="icon solid fa-lightbulb  style1">
                <span className="label">Use case discovery</span>
              </span>
              <span className="margin-left">
                Use case discovery
              </span>
            </li>
            <li>
              <span className="icon solid fa-file style1">
                <span className="label">Proof of concept</span>
              </span>
              <span className="margin-left">
                Proof of concept
              </span>
            </li>
            <li>
              <span className="icon solid fa-code style1">
                <span className="label">Productization</span>
              </span>
              <span className="margin-left">
                Productization
              </span>
            </li>
          </ul> */}
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Use Cases
          </h2>
          <p>
            We assist with discovering how your textual data can be utilized to its full potential.
            <br /><br />
            We determine proof of concept viability by applying NLP technologies to your real data.
            <br /><br />
            We transform proof of concepts into suitable products that integrate with the tech architecture of your organization.
          </p>
          {/* <ul id="services-icon-list" className="icons major">
            <li>
              <span className="icon solid fa-lightbulb  style1">
                <span className="label">Use case discovery</span>
              </span>
              <span className="margin-left">
                Use case discovery
              </span>
            </li>
            <li>
              <span className="icon solid fa-file style1">
                <span className="label">Proof of concept</span>
              </span>
              <span className="margin-left">
                Proof of concept
              </span>
            </li>
            <li>
              <span className="icon solid fa-code style1">
                <span className="label">Productization</span>
              </span>
              <span className="margin-left">
                Productization
              </span>
            </li>
          </ul> */}
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>NLP Applications</h2>
          <p>
            See how today’s cutting edge NLP technology can drive innovation for you
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-file">
            <h3>Categorization</h3>
            <p>
              Automatically detect and tag different types of documents.
            </p>
          </li>
          <li className="icon solid fa-filter">
            <h3>Summarization</h3>
            <p>
              Reduce documents to the most necessary information.
            </p>
          </li>
          <li className="icon solid fa-lightbulb">
            <h3>Contextual Search</h3>
            <p>
              Intelligent context-based document search and retrieval.
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
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            About Us
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>
    <section id="two" className="wrapper alt style1">
      <section className="spotlight" id="our-team-section">
        <div className="content" id="our-team-content">
          <h2>
            Our Team
          </h2>
          {/* <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p> */}
          <Team></Team>
        </div>
      </section>
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
