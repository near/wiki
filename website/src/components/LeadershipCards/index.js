import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { ExternalLink } from 'react-external-link';

const LeadershipResourceData = {
  "leadership" : [
      {
      "title" : "DAC: The Role of a Leader",
      "link": "https://nearhorizonassets.s3.amazonaws.com/dac.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/role_of_a_leader.gif",
      "description" : "Understand the different parts of your role and how to be a successful leader.",
      "topic" : "Leadership"
    },
    {
      "title" : "DAC: Assess your team",
      "link": "https://nearhorizonassets.s3.amazonaws.com/dac_survey.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/assess_team.gif",
      "description" : "This simple tool allows you to recognize strangths and areas for improvement in your team.",
      "topic" : "Leadership"
    },
    {
      "title" : "Picture of Success",
      "link": "https://nearhorizonassets.s3.amazonaws.com/Picture+of+Success_DAC.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/picture_of_success.gif",
      "description" : "Working with your team to find Direction, Alignment, and Commitment (DAC).",
      "topic" : "Leadership"
    },
    {
      "title" : "A Great Boss according to Google",
      "link": "https://nearhorizonassets.s3.amazonaws.com/A+great+boss+according+to+Google.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/good_boss_google.gif",
      "description" : "How to refresh your behaviors to strengthen your team and leadership.",
      "topic" : "Leadership"
    },
    {
      "title" : "5 Dysfunctions of a Team",
      "link": "https://youtu.be/GCxct4CR-To",
      "image": "https://nearhorizonassets.s3.amazonaws.com/team_dysfunction.gif",
      "description" : "Understanding the fundamental causes of organizational politics and team failure.",
      "topic" : "Leadership"
    },
  ],
  "communication" : [
    {
      "title": "Active Listening",
      "link": "https://www.ccl.org/articles/leading-effectively-articles/coaching-others-use-active-listening-skills/#",
      "image": "https://nearhorizonassets.s3.amazonaws.com/active_listening.gif",
      "description": "Coaching others with active listening.",
      "topic": "Effective Communication"
    },
    {
      "title": "Feedback (COIN model)",
      "link": "https://nearhorizonassets.s3.amazonaws.com/coin_model.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/coin_model.gif",
      "description": "Practicing effective feedback using the COIN model.",
      "topic": "Effective Communication"
    },
    {
      "title": "Preparing for Difficult Conversations",
      "link": "https://nearhorizonassets.s3.amazonaws.com/Preparing+Difficult+Conversation.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/difficult_convos.gif",
      "description": "Preparation tool to create the best outcomes from difficult conversations.",
      "topic": "Effective Communication"
    },
    {
      "title": "List of Powerful Questions for 1:1s",
      "link": "https://nearhorizonassets.s3.amazonaws.com/1o1+Powerful+Questions.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/questions_for_101.gif",
      "description": "Build better relationships with your team by asking powerful questions.",
      "topic": "Effective Communication"
    },
    {
      "title": "Buildig Trust with your Audience",
      "link": "https://hbr.org/2022/03/to-win-over-an-audience-focus-on-building-trust?hide_intromercial=true&tpcc=email.circ_newbusiness.content.SEGB&deliveryName=DM181852",
      "image": "https://nearhorizonassets.s3.amazonaws.com/building_trust.gif",
      "description": "Cultivating competencies to build trust with your audience.",
      "topic": "Effective Communication"
    },
    {
      "title": "Influencing: The Skill of Persuasion",
      "link": "https://nearhorizonassets.s3.amazonaws.com/Influencing-the-skill-of-persuasion.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/influencing.gif",
      "description": "Achieving your goals by inspiring, motivating, and engaging others effectively.",
      "topic": "Effective Communication"
    },
  ],
  "resilience" : [
    {
      "title": "Practicing Resilience",
      "link": "https://nearhorizonassets.s3.amazonaws.com/Practicing+Resilience.pdf",
      "image": "https://nearhorizonassets.s3.amazonaws.com/reslience.gif",
      "description": "Understanding the 5 factors of resilience.",
      "topic": "Resilience"
    },
    {
      "title": "Resilience when Staring in the Face of Fear",
      "link": "http://insights.hudsoninstitute.com/resilience-when-staring-in-the-face-of-fear?_hsmi=88597051#",
      "image": "https://nearhorizonassets.s3.amazonaws.com/fear_resilience.gif",
      "description": "Learning how to adapt your leadership skills in every situation",
      "topic": "Resilience"
    },
  ]

};

function LeadershipCards(arr) {
  return (
    <Row xs={1} md={2} className="g-4">
      {arr.map((resource, idx) => (
      <div style={{postion: `relative`,display: `flex`, alignItems: `center`, justifyContent: `center`, margin: `0 auto`}}>
          <Card key={idx} style={{minHeight: `400px`, margin: `10px`}}>
            <Card.Header>{resource.topic}</Card.Header>
            <hr style={{border: `1px solid #aaa`}}/>
            <Card.Img style={{width: `80%`, height: `125px`, margin: `auto`}} variant="top" src={resource.image} />
            <Card.Body>
              <ExternalLink href={resource.link}>
                <Card.Title style={{ fontSize: `100%` }}>{resource.title}</Card.Title>
              </ExternalLink>
              <hr style={{ border: `1px solid #aaa` }} />
              <Card.Text style={{fontSize: `90%`}}>
                {resource.description}
              </Card.Text>
      
            </Card.Body>
          </Card>
      </div>
      ))}
    </Row>
  );
}

export function LeadershipResources() {
  return LeadershipCards(LeadershipResourceData.leadership)
}

export function CommunicationResources() {
  return LeadershipCards(LeadershipResourceData.communication)
}

export function ResilienceResources() {
  return LeadershipCards(LeadershipResourceData.communication)
}