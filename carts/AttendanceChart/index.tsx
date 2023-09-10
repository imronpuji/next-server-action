import React, { useEffect } from 'react';
import Chart, { ChartTypeRegistry, registerables } from 'chart.js/auto';

interface AttendanceChartProps {
  attendancesGraph: {
    counts: Array<number>;
    dates: Array<string>;
  };
}

function AttendanceChart({ attendancesGraph }: AttendanceChartProps) {
  useEffect(() => {
    if (attendancesGraph.counts.length > 0) {
      const ctx = document.getElementById('attendanceChart');

      Chart.register(...registerables);

      const labels = attendancesGraph.dates;
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Users Attendance',
            data: attendancesGraph.counts,
            fill: false,
            tension: 0.1,
            backgroundColor: '#F06400',
            borderColor: '#F06400',
          },
        ],
      };

      const config = {
        type: 'line' as keyof ChartTypeRegistry,
        data: data,
      };
      new Chart(ctx as HTMLCanvasElement, config);
    }
  }, [attendancesGraph]);

  return <canvas id="attendanceChart"></canvas>;
}

export default AttendanceChart;
