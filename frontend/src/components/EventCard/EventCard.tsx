import './EventCard.css';
import moment from 'moment';
import { IEvents } from '../../types/app-types';

interface Props {
  event: IEvents;
}

export const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div className="card">
      <div className="body">
        <img alt="event" src={event.picUrl} className="card__image" />
        <div className="card-text-container">
          <h2 className="card__title">{event.eventName}</h2>
          <p className="card__date">{moment(event.eventDate).format('LL')}</p>
          <p className="card__time">{moment(event.eventDate).format('LT')}</p>
          <p className="card__countdown">Starts {moment(event.eventDate).endOf('day').fromNow()}</p>
        </div>
      </div>
    </div>
  );
};
