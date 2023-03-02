import React, {use} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styles from './styles.module.css';
import { ExternalLink } from 'react-external-link';

function NavCard(props) {
  if (props.link.includes('https')) {
    return (
      <Card className={[styles.card, props.cardType]}>
        <ExternalLink href={props.link}>
          <div className={styles.level}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* <Card.Img variant="top" src={props.icon} /> */}
          {props.icon ? <props.icon className={styles.card__icon} /> : null}
          <Card.Body className={styles.card__body}>
            <Card.Title className={styles.card__title}>{props.title}</Card.Title>
            {props.text ? <Card.Text className={styles.card__text}>
              {props.text}
            </Card.Text> : null}
            <div className={props.profile}></div>
          </Card.Body>
        </ExternalLink>
      </Card>
    )
  }
  return (
    <Card className={[styles.card, props.cardType]}>
      <Link to={props.link}>
        <div className={styles.level}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* <Card.Img variant="top" src={props.icon} /> */}
        {props.icon ? <props.icon className={styles.card__icon}/> : null}
        <Card.Body className={styles.card__body}>
          <Card.Title className={styles.card__title}>{props.title}</Card.Title>
          {props.text ? <Card.Text className={styles.card__text}>
          {props.text}
          </Card.Text> : null}
          <div className={props.profile}></div>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default NavCard;