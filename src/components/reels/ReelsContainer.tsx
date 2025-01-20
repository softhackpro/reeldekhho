import { useEffect, useRef, useState } from 'react';
import ReelCard from './ReelCard';
import useLoadReels from '../../hooks/reels/useLoadReels';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const PAGE_SIZE = 5;

export default function ReelsContainer() {
  const [hasMore, setHasMore] = useState(true);
  const { loadReels, reels } = useLoadReels();

  const containerRef = useRef<HTMLDivElement>(null);
  const reelRefs = useRef<(HTMLDivElement | null)[]>([]);


  const lastDiv = useIntersectionObserver(
    () => loadReels(),
    () => { },
    { threshold: 1 }
  )

  return (
    <div className="h-[100dvh] w-full max-w-md m-auto bg-black overflow-hidden">
      <div
        ref={containerRef}
        className="h-full scrollbar-hide overflow-y-scroll snap-start snap-mandatory snap-y"
      >
        {reels.map((reel, index) => (
          <div
            ref={(el) => (reelRefs.current[index] = el)}
            key={index}
            className="snap-start w-full h-full"
          >
            <ReelCard reel={reel} />
          </div>
        ))}
        <div
          ref={lastDiv}
          className="relative flex justify-center items-center dark:text-white text-black z-10 h-8 w-full snap-start bg-black overflow-hidden"
        >
          {hasMore ? <p>Loading more reels...</p> : <p>No more reels!</p>}
        </div>
      </div>
    </div>
  );
}
