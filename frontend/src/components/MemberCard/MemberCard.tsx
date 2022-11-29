import './MemberCard.css';

export const MemberCard = () => {
  return (
    <div className="member-card">
      <div className="member-body">
        <img
          alt="event"
          src={
            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
          className="member__image"
        />
        <h2 className="member__title">{'Steven'}</h2>
      </div>
    </div>
  );
};
