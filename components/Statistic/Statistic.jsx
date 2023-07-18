'use client';

import { Stats } from "react-daisyui";

export default function Statistic({ list = [] }) {
  return (
    <Stats className='stats-vertical lg:stats-horizontal'>
      {list.map(({ title, value }) => (
        <Stats.Stat key={title}>
          <Stats.Stat.Item variant='title'>{title}</Stats.Stat.Item>
          <Stats.Stat.Item variant='value'>{value}</Stats.Stat.Item>
        </Stats.Stat>
      ))}
    </Stats>
  );
}
