'use client';
import Text from '@/components/UI/Text';
import fetcher from '@/lib/fetcher';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Chart from 'chart.js/auto';
import CardDashboardUser from '@/components/Common/CardDashboardUser';

type responseFetchAttendances = {
  dates: Array<string>;
  counts: Array<number>;
};

const Index = () => {
  const canvaRef = useRef<HTMLCa>();
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

  useEffect(() => {
    if (attendancesGraph.counts.length > 0) {
      const ctx = document.getElementById('attendanceChart');
      const labels = attendancesGraph.dates;
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Users Attendance',
            data: attendancesGraph.counts,
            fill: false,
            tension: 0.1,
            backgroundColor: ['#F06400'],
            borderColor: ['#F06400'],
          },
        ],
      };

      const config = {
        type: 'line',
        data: data,
      };

      new Chart(ctx as HTMLCanvasElement, config);
    }
  }, [attendancesGraph]);
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
        <canvas ref={canvaRef} id="attendanceChart"></canvas>
      </div>
    </div>
  );
};

export default Index;
