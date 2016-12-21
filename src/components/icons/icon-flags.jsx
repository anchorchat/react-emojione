import React, { PropTypes } from 'react';

function IconFlags({ color }) {
  const fill = color || '#B3B3B3';

  return (
    <svg fill={fill} height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
    </svg>
  );
}

IconFlags.propTypes = {
  color: PropTypes.string
};

export default IconFlags;
