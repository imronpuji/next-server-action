import React from 'react';
import Text from '@/components/ui/Text';

function Footer() {
  return (
    <div className="border h-14 px-4 flex items-center">
      <Text size="medium" weight="semibold" color="muted">
        © {new Date().getFullYear()} Muhamad Imron
      </Text>
    </div>
  );
}

export default Footer;
