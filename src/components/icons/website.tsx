// tslint:disable:no-http-string
import React, { FC } from 'react';

const Website: FC<IconProps> = ({ height = '24', width = '24' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <path
      d="M23.5 11.957c0 6.375-5.163 11.544-11.532 11.544C5.599 23.5.5 18.125.5 11.75.5 5.542 5.37.758 11.505.511l.5-.011C18.374.5 23.5 5.582 23.5 11.957zM11.505.511c-6 6.5-6 14.98 0 22.98m1-22.98c6 6.5 6 14.977 0 22.977M2 17.479h20.063m-19.657-12h19.062m-20.968 6h22.938"
      stroke="#fff"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      fill="none"
    />
  </svg>
);
export default Website;
