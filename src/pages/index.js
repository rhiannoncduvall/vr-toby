import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import Team from '../components/Team';
import datapic from '../assets/images/data-analysis.jpg';
import sandiegopic from '../assets/images/sandiego-min.jpeg';
import datapic2 from '../assets/images/market_research-min.jpeg';
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
              <span className="label">Document</span>
            </span>
          </li>
          <li>
            <span className="icon fa-code solid major style2">
              <span className="label">Code</span>
            </span>
          </li>
          <li>
            <span className="icon fa-lightbulb major style1">
              <span className="label">Idea</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={datapic} alt="" />
        </div>
        <div className="content">
          <h2>
            Our Services
          </h2>
          <p className="services-content">
            We assist with discovering how your textual data can be utilized to its full potential.
            <br /><br />
            We determine proof of concept viability by applying NLP technologies to your real data.
            <br /><br />
            We transform proof of concepts into suitable products that integrate with the tech architecture of your organization.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={datapic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Use Cases
          </h2>
          <ul id="services-icon-list" className="icons">
            <li>
              <span className="icon solid fa-chart-line style1">
                <span className="label">Predictions</span>
              </span>
              <span className="margin-left">
                Predictions
              </span>
            </li>
            <li>
              <span className="icon solid fa-user-friends style1">
                <span className="label">Customer Service</span>
              </span>
              <span className="margin-left">
                Customer Service
              </span>
            </li>
            <li>
              <span className="icon solid fa-globe style1">
                <span className="label">Reputation Monitoring</span>
              </span>
              <span className="margin-left">
                Reputation Monitoring
              </span>
            </li>
            <li>
              <span className="icon solid fa-lightbulb style1">
                <span className="label">Ad Placement & Personalization</span>
              </span>
              <span className="margin-left">
                Ad Placement & Personalization
              </span>
            </li>
            <li>
              <span className="icon solid fa-chart-pie style1">
                <span className="label">Market Intelligence</span>
              </span>
              <span className="margin-left">
                Market Intelligence
              </span>
            </li>
          </ul>
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
          <li className="icon solid fa-file-alt">
            <h3>Categorization</h3>
            <p>
              Analyze and categorize high-volume incoming document streams.
            </p>
          </li>
          <li className="icon solid fa-filter">
            <h3>Summarization</h3>
            <p>
              Reduce documents to the most necessary information.
            </p>
          </li>
          <li className="icon solid fa-search">
            <h3>Contextual Search</h3>
            <p>
              Intelligent context-based document search and retrieval.
            </p>
          </li>
          <li className="icon solid fa-info-circle">
            <h3>Topic Discovery</h3>
            <p>
              Recognize the key topics across a large corpora of documents.
            </p>
          </li>
          <li className="icon solid fa-lightbulb">
            <h3>Content Extraction</h3>
            <p>
              Automatically detect and extract from structured data by identifying entities, relations, and events.
            </p>
          </li>
          <li className="icon solid fa-comment-dots">
            <h3>Response System</h3>
            <p>
              Interactive bots and automated responses to emails and response forms.
            </p>
          </li>
        </ul>
      </div>
      </section>
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={sandiegopic} alt="" />
        </div>
        <div className="content">
          <h2>
            About Us
          </h2>
          <p>
            We are a team of tech enthusiasts that came together because of our time together at SoftStack Factory, a non-profit coding school and incubator.
          </p>
          <p>
            We started VR Toby to share our passion for Natural Language Processing and provide solutions for everyday problems.
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
