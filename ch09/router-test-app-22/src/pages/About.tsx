import React from 'react';
import { useLocation } from 'react-router';

type Props = {};

const About = (props: Props) => {
  const location = useLocation();
  const pathname = location.pathname.replaceAll('/', '');

  return (
    <div className='card card-body'>
      <h2>
        {pathname.charAt(0).toLocaleUpperCase() +
          pathname.substring(1, location.pathname.length)}
      </h2>
    </div>
  );
};

export default About;
