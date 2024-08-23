'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
        <CountUp 
        duration={4}
        decimals={2}
        decimal='.'
        prefix='P '
        end={amount}
        />
    </div>
  )
}

export default AnimatedCounter