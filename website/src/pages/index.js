import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import SearchBox from '@site/src/components/SearchBox';
import { ChooseYourPath, BrowseByDomain, BrowseByProduct } from '@site/src/components/CardsContainers';

import styles from './index.module.css';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <main>
        <div className="header__container">
          <center className="header"> <h1>Welcome to the <br /> NEAR Wiki</h1> </center>
          <center className="subheader"><p>This <a href="https://github.com/near/wiki">open-source</a>, collaborative wiki connects you to information about everything the protocol has to offer including usage, infrastructure, opportunities, and guilds.</p></center>
          
          <div class="header__links">
            <a href="#path">Choose a path</a>
            <a href="#domain">Browse by domain</a>
            <a href="#product">Browse by product</a>
          </div>
        </div>

        <section id="path" className="choosePath__section landing__section">
          <div className="choosePath__title">
            <h2>Choose your path:</h2>
          </div>
          <div className="section__cards__container">
            <div className="section__cards">
              <ChooseYourPath />
            </div>
          </div>

          <center class="section__footer"><p>Just looking around? <a href="/overview/getting-started">Enter NEAR Wiki</a></p></center>
        </section>

        <section id="domain" className="browseByDomain__section landing__section">
          <div className="browseByDomain__title">
            <h2>Browse by Domain</h2>
          </div>
          <div className="section__cards">
            <BrowseByDomain />
          </div>
        </section>

        <section id="product" className="browseByProduct__section landing__section">
          <div className="browseByProduct__title">
            <h2>Browse by Product</h2>
          </div>
          <div className="section__cards">
            <BrowseByProduct />
          </div>
          <center class="section__footer"><p>Just looking around? <a href="/overview/getting-started">Enter NEAR Wiki</a></p></center>
        </section>

      </main>
    </Layout>
  );
}
