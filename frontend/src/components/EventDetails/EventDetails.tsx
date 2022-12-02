import { MemberCard } from '../MemberCard/MemberCard';
import './EventDetails.css';

export const EventDetails = () => {
  return (
    <div className="event-details-container">
      <form className="description-container">
        <textarea
          className="description-input"
          name="description"
          id="descrInput"
          placeholder="Event Description..."
          value={'This is our event!!!!!!'}
        ></textarea>
      </form>
      <MemberCard />
    </div>
  );
};
