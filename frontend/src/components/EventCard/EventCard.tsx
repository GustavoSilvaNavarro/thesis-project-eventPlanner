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
