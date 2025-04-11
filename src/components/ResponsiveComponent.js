import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const ResponsiveComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </>
  );
};

export default ResponsiveComponent;
