import './EventCard.css';

export const EventCard = () => {
  return (
    <div className="card">
      <div className="body">
        <img
          alt="event"
          src={
            'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
          }
          className="card__image"
        />
        <div className="card-text-container">
          <h2 className="card__title">{'BBQ Time'}</h2>
          <p className="card__date">{'xx/xx/xxxx'}</p>
          <p className="card__countdown">{'0:00'}</p>
        </div>
      </div>
    </div>
  );
};
import { Link } from 'react-router-dom';
import moment from 'moment';

import './EventCard.css';

import { IEvents } from '../../types/app-types';

interface IProps {
  event: IEvents;
}

export const EventCard = ({ event }: IProps) => {
  return (
    <div className="eventCard__container">
      <Link to={`/single-event/${event.id}`}>
        <div className="eventCard__bodyInfo">
          <img alt={event.eventName} src={event.picUrl} className="eventCard__image" />
          <div className="eventCard__textContainer">
            <h2 className="eventCardText__title">{event.eventName}</h2>
            <p className="eventCardText__date">{moment(event.eventDate).format('LL')}</p>
            <p className="eventCardText__time">{moment(event.eventDate).format('LT')}</p>
            <p className="eventCardText__countdown">Starts {moment(event.eventDate).endOf('day').fromNow()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
