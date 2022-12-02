import { EventCard } from '../EventCard/EventCard';
import './MainPage.css';
import { useState, useEffect } from 'react';
import { getAllEvents } from '../../services/fetch-events';
import { IEvents } from '../../types/app-types';

export const MainPage = () => {
  const [eventList, setEventList] = useState<IEvents[] | undefined>([]);

  useEffect((): void => {
    const fetchData = async () => {
      const eventData = await getAllEvents();
      setEventList(eventData);
    };
    fetchData();
  }, []);
  return (
    <div className="main-page-container">
      {eventList &&
        eventList.map(event => {
          return <EventCard key={event.id} event={event} />;
        })}
    </div>
  );
};
