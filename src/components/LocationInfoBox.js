const LocationInfoBox = ({ info }) => {
  return (
    <div className='location-info'>
      <h2>Location Info</h2>
      <ul>
        <li>
          Id: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
        {info.description && (
          <li>
            Desc: <strong>{info.description}</strong>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LocationInfoBox;
