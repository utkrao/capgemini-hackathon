import {React} from 'react';
import "./about.css";

const About = () => {
  return (
    <div className='background'>
      <section class="about-section">
        <h1>About</h1>
        
        <p class="text-big">
          Capgemini is a global leader in partnering with companies to transform
          and manage their business by harnessing the power of technology. The
          Group is guided everyday by its purpose of unleashing human energy
          through technology for an inclusive and sustainable future. It is a
          responsible and diverse organization of over 325,000 team members more
          than 50 countries. With its strong 55-year heritage and deep industry
          expertise, Capgemini is trusted by its clients to address the entire
          breadth of their business needs, from strategy and design to
          operations, fueled by the fast evolving and innovative world of cloud,
          data, AI, connectivity, software, digital engineering and platforms.
          The Group reported in 2021 global revenues of €18 billion.
        </p>
      </section>
      <p class="text-small">Get The Future You Want | <a href="https://www.capgemini.com/" target="_blank">www.capgemini.com</a> </p>
      <footer class="footer">
        <p class="bottom">
          This presentation contains information that may be privileged or
          confidential and is the property of the Capgemini Group. Copyright ©
          2022 Capgemini. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default About;