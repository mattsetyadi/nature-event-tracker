import { Icon } from '@iconify/react';
import triangleIcon from '@iconify/icons-mdi/triangle';

const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={triangleIcon} className='location-icon volcano-color' />
    </div>
  );
};

export default VolcanoMarker;
