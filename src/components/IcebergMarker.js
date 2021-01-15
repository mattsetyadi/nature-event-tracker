import { Icon } from '@iconify/react';
import snowIcon from '@iconify/icons-mdi/snowflake';

const IcebergMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={snowIcon} className='location-icon snow-color' />
    </div>
  );
};

export default IcebergMarker;
