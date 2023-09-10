'use client';
import CardDashboardUser from '@/components/Common/CardDashboardUser';
import Text from '@/components/ui/Text';
import fetcher from '@/lib/fetcher';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AttendanceChart from '@/carts/AttendanceChart';

type responseFetchAttendances = {
  dates: Array<string>;
  counts: Array<number>;
};

const Index = () => {
  const [attendancesGraph, setAttendancesGraph] =
    useState<responseFetchAttendances>({ dates: [], counts: [] });

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const responseAttendances = (await fetcher(
          '/dashboard/graph',
          'GET',
        )) as responseFetchAttendances;

        setAttendancesGraph({
          counts: responseAttendances.counts,
          dates: responseAttendances.dates,
        });
      } catch (error) {
        toast.error('Failed to fetch');
      }
    };
    fetchAttendances();

    return () => {
      setAttendancesGraph({
        counts: [],
        dates: [],
      });
    };
  }, []);

  return (
    <div className="h-full">
      <Text size="large" weight="medium" color="muted">
        Dashboard
      </Text>
      <div className="grid grid-cols-4 gap-4 my-4">
        <CardDashboardUser total={20} color="primary" title="Today" />
        <CardDashboardUser total={50} color="danger" title="Yesterday" />
        <CardDashboardUser total={10} color="secondary" title="Last Week" />
        <CardDashboardUser total={80} color="warning" title="Last Month" />
      </div>
      <div>
        <AttendanceChart attendancesGraph={attendancesGraph} />
      </div>
    </div>
  );
};

export default Index;
