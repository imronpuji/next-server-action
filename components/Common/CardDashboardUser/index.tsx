import Text from '@/components/UI/Text';
import { Color } from '@/components/types';
import React from 'react';
import { motion } from 'framer-motion';

interface CardDashboardUserProps {
  color: Color;
  title: string;
  total: number;
}

function CardDashboardUser({ color, title, total }: CardDashboardUserProps) {
  let bgColor = 'bg-primary';

  switch (color) {
    case 'primary':
      bgColor = 'bg-primary';
      break;
    case 'secondary':
      bgColor = 'bg-secondary';

      break;
    case 'dark':
      bgColor = 'bg-black';
      break;
    case 'warning':
      bgColor = 'bg-warning';
      break;
    case 'danger':
      bgColor = 'bg-danger';
      break;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
      <div className={` p-4 rounded-lg ${bgColor}`}>
        <Text size="large" weight="bold" color="light">
          {title}
        </Text>
        <Text color="light">{`${total} Visitor`}</Text>
      </div>
    </motion.div>
  );
}

export default CardDashboardUser;
