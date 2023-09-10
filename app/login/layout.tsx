import React from 'react';

interface LayoutAuthenticationProps {
  children: React.ReactNode;
}

function LayoutAuthentication({ children }: LayoutAuthenticationProps) {
  return <div>{children}</div>;
}

export default LayoutAuthentication;
