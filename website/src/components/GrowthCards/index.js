import React from 'react';
import NavCard from '../NavCard';
import styles from './styles.module.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ExternalLink } from 'react-external-link';



const growthCardsData = {
  ecosystemResources:  [
    {
      title: 'Project Growth & Marketing Toolkit',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Overview of best practices and proven strategies for growth & marketing your project
        </>
      ),
      link: 'https://docs.google.com/presentation/d/1Abjnbw6qNSC7hu3vAqWqo9hn5pOArakIfU9ZRR0SQTI/edit?usp=sharing',
      level: 'easy'
    },
    {
      title: 'Ecosystem Marketing Activation Workflow',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Enables new projects entering the NEAR Ecosystem to request marketing support
        </>
      ),
      link: 'https://drive.google.com/file/d/1NsMDzKxFHoKopgEOpf2JGVXI8NzvDrsc/view',
      level: 'easy'
    },
    {
      title: 'NEAR Medium',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Publication guidelines for top stories and project launches
        </>
      ),
      link: 'https://docs.google.com/document/d/1MNy9PikQWHLiXQyDs-E7ijeA79rsBZ2TY3wzh6GGG08/edit?usp=sharing',
      level: 'easy'
    },
    {
      title: 'NEARWEEK',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          The largest marketing & news platform in the NEAR ecosystem
        </>
      ),
      link: 'https://nearweek.com/',
      level: 'easy'
    },
    {
      title: 'NEARStarter',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Next generationg launchpad built on NEAR
        </>
      ),
      link: 'https://nearstarter.fi/',
      level: 'easy'
    },
    {
      title: 'NEAR Insider',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      // icon: require('@site/static/img/icons/nearinsider.jpg').default,
      text: (
        <>
          NEAR ecosystem focused digital marketing and social media agency
        </>
      ),
      link: 'https://link3.to/nearinsider',
      level: 'easy'
    },
    {
      title: 'NEAR Stars',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Promotion of NEAR ecosystem projects to the NEAR community
        </>
      ),
      link: 'https://t.me/nearstarsguild',
      level: 'easy'
    },
    {
      title: 'Flying Rhino',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      // icon: require('@site/static/img/icons/flyingrhino.jpg').default,
      text: (
        <>
          Social media marketing support focused on the NEAR ecosystem
        </>
      ),
      link: 'https://flyingrhinoweb3.com/',
      level: 'easy'
    },
    {
      title: 'NEAR NFT Club',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      // icon: require('@site/static/img/icons/nearnftclub.jpg').default,
      text: (
        <>
          Collaborate with all the developed and ongoing developing NFT dapps on NEAR. 
        </>
      ),
      link: 'https://nearnft.club/',
      level: 'easy'
    },
    {
      title: 'NEAR News Twitter Accounts',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Curated Twitter list of the many accounts focused on pushing out NEAR ecosystem news 
        </>
      ),
      link: 'https://twitter.com/i/lists/1590678464478208001',
      level: 'easy'
    },
  ],
  communitySpaces: [
    {
      title: 'Ready Layer One',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Web3 podcast focused on the NEAR ecosystem. Educating users and bringing together the community
        </>
      ),
      link: 'https://near.social/#/mob.near/widget/MyPage?accountId=readylayerone.nea',
      level: 'easy'
    },
    {
      title: 'NEAR is Nao',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          A series of Twitter Spaces hosted by Nao(mi), bringing together founders and thought-leaders from the NEAR ecosystem and other chains 
        </>
      ),
      link: 'https://twitter.com/Naomi_fromhh',
      level: 'easy'
    },
    {
      title: 'Chill & Shill',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Twitter space promoting NEAR Protocol through AMAs and educational sessions. Hosted by <a href="https://twitter.com/waxnear">Wax</a>
        </>
      ),
      link: 'https://linktr.ee/chillandshill',
      level: 'easy'
    },
    {
      title: 'GM $NEAR',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          community-led event highlighting projects and communities based on NEAR and beyond hosted by the <a href="https://loozr.io">Loozr</a> team and community
        </>
      ),
      link: 'https://twitter.com/officialloozr',
      level: 'easy'
    },
    {
      title: 'Next Creators',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          a podcast interviewing creators forging a new path for themselves and others on the internet
        </>
      ),
      link: 'https://nextcreators.simplecast.com/',
      level: 'easy'
    },
    {
      title: 'NPKguild',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Events, AMAs, influencer outreach, translation, promotion & marketing
        </>
      ),
      link: 'https://t.me/damboy22',
      level: 'easy'
    },
    {
      title: 'Ru guild',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Russian-based events, AMAs, influencer outreach, translation, promotion & marketing
        </>
      ),
      link: 'https://t.me/yu1ian',
      level: 'easy'
    },
    {
      title: 'NEAR Workshops',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Free live educational content series tailored to teaching developers the latest tooling, SDKs, and APIs across the NEAR Ecosystem
        </>
      ),
      link: 'https://nearworkshops.com/watch',
      level: 'easy'
    },
  ],
  nearweek: [
    {
      title: 'Activation Workflow',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          NEAR Ecosystem Marketing 
        </>
      ),
      link: 'https://drive.google.com/file/d/1NsMDzKxFHoKopgEOpf2JGVXI8NzvDrsc/view',
      level: 'easy'
    },
    {
      title: 'Ecosystem Calendar',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          For wider visibility into upcoming events, launches, Twitter Spaces, campaigns, etc... Make sure to submit yours!
        </>
      ),
      link: 'https://nearweek.com/calendar',
      level: 'easy'
    },
    {
      title: 'Swag shop',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          NEARWEEK's NEAR ecosystem swag shop
        </>
      ),
      link: 'https://store.nearweek.com/',
      level: 'easy'
    },
    {
      title: 'NEAR Twitter Spaces',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          For Twitter Spaces and podcast recordings & discovery. Make sure to upload yours!
        </>
      ),
      link: 'https://open.spotify.com/show/2zp3qdHYbKR7V8Xm8ySN3y',
      level: 'easy'
    },
    {
      title: 'Submit your news',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          This is the easiest way to make sure that your news is picked up by NEARWEEK for inclusion in the daily and weekly newsletter.
        </>
      ),
      link: 'https://docs.nearweek.com/start/newsletter/newsletter/news-submission-twitter#twitter-bot-command',
      level: 'easy'
    },
  ],
  marketingDAO: [
    {
      title: 'MarketingDAO Handbook',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Understand the Marketing DAO and how to get involved
        </>
      ),
      link: 'https://docs.google.com/document/d/1i1PbFQKlwyWzjGZMoeUIM3gy3ghWKH3Yo4iOi-D8N_U/view',
      level: 'easy'
    },
    {
      title: 'Guidelines',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Guidelines for Assessment MarketingDAO Proposals
        </>
      ),
      link: 'https://gov.near.org/t/guidelines-for-assessment-marketing-dao-proposals/31645',
      level: 'easy'
    },

  ],
  eventFunding: [
    {
      title: 'Grants Application',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Submit the Ecosystem Marketing Grants application form
        </>
      ),
      link: 'https://airtable.com/shrm92EDb6ydLrSxr',
      level: 'easy'
    },
    {
      title: 'Event Playbook Toolkit',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Create a copy and complete the sections that are relevant to your event/GTM push. Then email your copy to <a href="mailto:events@near.foundation" target="_blank" rel="noopener noreferrer">events@near.foundation</a>
        </>
      ),
      link: 'https://docs.google.com/presentation/d/1MysTwrdWgwd7DdEGD-O6CCIwZZ68YxpZWIqzba3k0jk/edit#slide=id.g13072457ef4_0_0',
      level: 'easy'
    },
    {
      title: 'Retro Form',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          After the event, please complete the post-event retro form for the remainder of the funding.
        </>
      ),
      link: 'https://docs.google.com/document/d/1wGYvxcEIgocgj32NnRnnfCycCQFNKp3iwvfThKwp73E/edit',
      level: 'easy'
    },
  ],
  legal: [
    {
      title: 'CavenwellDAO',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          End-to-end managed corporate & legal structuring solutions that are specifically tailored to web 3.0 projects and their digital entrepreneurs
        </>
      ),
      link: 'https://www.google.com/url?q=https%3A%2F%2Fgov.near.org%2Ft%2Fhello-we-are-cavenwell-dao-corporate-structuring-specialists%2F12607&sa=D&sntz=1&usg=AOvVaw1_QjBdGJUAYiAZRKgMFgIs',
      level: 'easy'
    },
    {
      title: 'Legal Nodes',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Legal Nodes connects founders with multiple legal professionals, all in one place.
        </>
      ),
      link: 'https://legalnodes.com/',
      level: 'easy'
    },
    {
      title: 'DAObox',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Provides a legal framework for DAOs including establishment, accounting, and payments 
        </>
      ),
      link: 'https://www.google.com/url?q=https%3A%2F%2Fdaobox.org%2F&sa=D&sntz=1&usg=AOvVaw30NfKF0u-wJIce2Kn_SvB3',
      level: 'easy'
    },
  ],
  idoPlatforms: [
    {
      title: 'NearStarter',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          NEAR native launchpad
        </>
      ),
      link: 'https://twitter.com/near_starter',
      level: 'easy'
    },
    {
      title: 'Skyward Finance',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          NEAR native launchpad
        </>
      ),
      link: 'https://skyward.finance/',
      level: 'easy'
    },
    {
      title: 'BocaChica',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Aurora launchpad
        </>
      ),
      link: 'https://bocachica.io/',
      level: 'easy'
    },
    {
      title: 'Pad.fi',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Aurora launchpad
        </>
      ),
      link: 'https://pad.fi/',
      level: 'easy'
    },
    {
      title: 'Eros Ventures',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          NFT launchpad
        </>
      ),
      link: 'https://www.eros.ventures/',
      level: 'easy'
    },
    {
      title: 'Few and Far',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          NFT launchpad
        </>
      ),
      link: 'https://fewfar.com/launchpad/',
      level: 'easy'
    },
    {
      title: 'Secret Skellies Society Utopia Token',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          NFT launchpad
        </>
      ),
      link: 'https://secretskelliessociety.com/',
      level: 'easy'
    },
    {
      title: 'SmartPad',
      // icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          NEAR & Aurora Launchpad
        </>
      ),
      link: 'https://smartpad.network/',
      level: 'easy'
    },
  ]
}

// function CardContainer(dataObj) {

//   return (
//     <div className="growth_cards">
//     {/* <div className={classes `${styles.cards_container} ${styles.growth_cards}`}> */}
//       {/* <div className={styles.card__row }> */}
//       {dataObj.map((props, idx) => (
//         <NavCard key={idx} {...props} />
//       ))}
//       {/* </div> */}
//     </div>
//   );
// }

function CardsContainer(dataArr) {
  return (
    <Row xs={1} md={2} className="g-3 growth_cards" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {Array.from(dataArr).map((obj, idx) => (
        <Card border="light">
        {/* <Card border="light" style={{ width: '18rem' }}> */}
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title>{obj.title}</Card.Title>
            <Card.Text>
             {obj.text}
            </Card.Text>
            <ExternalLink href={obj.link} style={{ display: 'block', position: 'absolute', bottom: '15px' }}>Visit Link</ExternalLink>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}


export function EcosystemResources() {
  // return CardContainer(growthCardsData.ecosystemResources)
  return CardsContainer(growthCardsData.ecosystemResources)
}

export function CommunitySpaces() {
  return CardsContainer(growthCardsData.communitySpaces)
}

export function NearWeek() {
  return CardsContainer(growthCardsData.nearweek)
}

export function EventFunding() {
  return CardsContainer(growthCardsData.eventFunding)
}

export function MarketingDAO() {
  return CardsContainer(growthCardsData.marketingDAO)
}

export function LegalResources() {
  return CardsContainer(growthCardsData.legal)
}

export function IDOPlatforms() {
  return CardsContainer(growthCardsData.idoPlatforms)
}