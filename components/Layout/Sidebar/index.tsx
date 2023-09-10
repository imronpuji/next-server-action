import Icon from '@/components/ui/Icon';
import Text from '@/components/ui/Text';
import Link from 'next/link';
import React from 'react';

function Sidebar() {
  return (
    <div className="h-full">
      <div className="border-b h-14 w-full flex items-center px-4">
        <Text size="large" color="warning" weight="bold" align="center">
          Monitoring
        </Text>
      </div>
      <div className="p-4">
        <a
          className="flex gap-2 bg-primary items-center p-2 rounded"
          href="/dashboard"
        >
          <Icon iconName="dashboard" color="#fff" />
          <Text color="light" weight="medium" size="medium">
            Dashboard
          </Text>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
