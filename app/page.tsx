'use client';
import { useEffect } from 'react';

function DashboardIndex() {
  useEffect(() => {
    window.location.href = '/dashboard';
  });
}

export default DashboardIndex;
