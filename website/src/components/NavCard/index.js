import React, {use} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styles from './styles.module.css';

function NavCard(props) {
  return (
    <Card className={[styles.card, props.cardType]}>
      <Link to={props.link}>
        <div className={styles.level}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* <Card.Img variant="top" src={props.icon} /> */}
        <props.icon className={styles.card__icon}/>
        <Card.Body className={styles.card__body}>
          <Card.Title className={styles.card__title}>{props.title}</Card.Title>
          <Card.Text className={styles.card__text}>
          {props.text}
          </Card.Text>
          <div className={props.profile}></div>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default NavCard;