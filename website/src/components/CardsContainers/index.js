import React from 'react';
import NavCard from '../NavCard';
import styles from './styles.module.css';
import LogoSVG from '@site/static/img/near_logo.svg';
import logo from '@site/static/img/near_logo.svg';
const cardData = {

  chooseYourPath: [
    {
      title: 'User',
      icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Learn how to use NEAR and the NEAR ecosystem
        </>
      ),
      link: '/overview/getting-started',
      level: 'easy',
      cardType: 'profile',
      profile: 'user'
    },
    {
      title: 'Developer',
      icon: require('@site/static/img/icons/icon_dev.svg').default,
      text: (
        <>
          Collection of tools and resources for developers building on NEAR
        </>
      ),
      link: '/development/dev-overview',
      level: 'easy',
      cardType: 'profile',
      profile: 'developer'
    },
    {
      title: 'Founder',
      icon: require('@site/static/img/icons/icon_founder.svg').default,
      text: (
        <>
          Connect with funding, talent, and resources to launch your project
        </>
      ),
      link: '/',
      level: 'easy',
      cardType: 'profile',
      profile: 'founder'
    },
  ],
  browseByDomain: [
    {
      title: 'Governance',
      icon: require('@site/static/img/icons/icon_governance.svg').default,
      text: (
        <>
          Explore how NEAR is governed and how you can participate
        </>
      ),
      link: '/governance/near-forum/near-forum-guidelines',
      level: 'easy'
    },
    {
      title: 'Education',
      icon: require('@site/static/img/icons/icon_edu.svg').default,
      text: (
        <>
          Discover learning resources to help you get started on NEAR
        </>
      ),
      link: '/support/hr-education',
      level: 'easy'
    },
    {
      title: 'dApps',
      icon: require('@site/static/img/icons/icon_dapps.svg').default,
      text: (
        <>
          Find dApps built on NEAR and learn how to build your own
        </>
      ),
      link: '/ecosystem/dapps',
      level: 'easy'
    },
    {
      title: 'Essential tools',
      icon: require('@site/static/img/icons/icon_etools.svg').default,
      text: (
        <>
          Quickly get started with NEAR Explorer, Wallet, and NEAR CLI
        </>
      ),
      link: '/overview/essentials',
      level: 'easy'
    },
    {
      title: 'Developer tools',
      icon: require('@site/static/img/icons/icon_devtools.svg').default,
      text: (
        <>
          Essential tools for developers building on NEAR
        </>
      ),
      link: '/development/tools-infrastructure',
      level: 'easy'
    },
    {
      title: 'Grants & Funding',
      icon: require('@site/static/img/icons/icon_funding.svg').default,
      text: (
        <>
          Learn about NEAR Grants and other funding opportunities
        </>
      ),
      link: '/support/funding',
      level: 'easy'
    },
  ],
  browseByProduct: [
    {
      title: 'NEAR Wallet',
      icon: require('@site/static/img/icons/icon_wallet.svg').default,
      text: (
        <>
          Get started with a NEAR Wallet and learn how to use it
        </>
      ),
      link: '/overview/tokenomics/creating-a-near-wallet',
      level: 'easy'
    },
    {
      title: 'Governance forum',
      icon: require('@site/static/img/icons/icon_forum.svg').default,
      text: (
        <>
          Participate in decision-making and governance on NEAR
        </>
      ),
      link: '/governance/near-forum/near-forum-guidelines',
      level: 'easy'

    },
    {
      title: 'Astro DAO',
      icon: require('@site/static/img/icons/icon_astro.svg').default,
      text: (
        <>
          Easily create and manage your own DAO on NEAR
        </>
      ),
      link: '/governance/dao-guide/astrodao',
      level: 'easy'
    },
    {
      title: 'NEAR CLI',
      icon: require('@site/static/img/icons/icon_cli.svg').default,
      text: (
        <>
          Start building local environments and deploy dApps to NEAR
        </>
      ),
      link: '/development/tools-infrastructure#developer-tools',
      level: 'easy'
    },
    {
      title: 'JS SDK',
      icon: require('@site/static/img/icons/icon_jssdk.svg').default,
      text: (
        <>
          Write smart contracts in JavaScript and deploy them to NEAR
        </>
      ),
      link: '/development/tools-infrastructure#javascript-stack',
      level: 'easy'
    },
    {
      title: 'RUST SDK',
      icon: require('@site/static/img/icons/icon_rust.svg').default,
      text: (
        <>
          Write sophisticated smart contracts in Rust and deploy them to NEAR
        </>
      ),
      link: '/development/tools-infrastructure#rust-stack',
      level: 'easy'
    },
    {
      title: 'NEAR Explorer',
      icon: require('@site/static/img/icons/icon_explorer.svg').default,
      text: (
        <>
          See account balances, transactions, and more on NEAR Explorer
        </>
      ),
      link: '/overview/essential-tools#near-explorer',
      level: 'easy'
    },
    {
      title: 'NEAR Staking',
      icon: require('@site/static/img/icons/icon_staking.svg').default,
      text: (
        <>
          Earn rewards by staking your NEAR tokens
        </>
      ),
      link: '/development/tools-infrastructure#explorers--indexers',
      level: 'easy'
    },
    {
      title: 'Documentation',
      icon: require('@site/static/img/icons/icon_docs.svg').default,
      text: (
        <>
          Take a deep dive into NEAR's technology with tutorials, guides, and more
        </>
      ),
      link: 'https://docs.near.org',
      level: 'easy'
    },
  ]
}

function CardContainer(dataObj) {
  return (
    <div className={styles.cards_container}>
      {/* <div className={styles.card__row }> */}
        {dataObj.map((props, idx) => (
          <NavCard key={idx} {...props} />
        ))}
      {/* </div> */}
    </div>
  );
}

export function ChooseYourPath(){
  return CardContainer(cardData.chooseYourPath)
}
export function BrowseByDomain(){
  return CardContainer(cardData.browseByDomain)
}
export function BrowseByProduct(){
  return CardContainer(cardData.browseByProduct)
}


