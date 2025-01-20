import { useEffect, useRef, useState } from 'react';
import ReelCard from './ReelCard';
import useLoadReels from '../../hooks/reels/useLoadReels';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const PAGE_SIZE = 5;

export default function ReelsContainer() {
  const [hasMore, setHasMore] = useState(true);
  const { loadReels, reels, loader } = useLoadReels();

  const containerRef = useRef<HTMLDivElement>(null);
  const reelRefs = useRef<(HTMLDivElement | null)[]>([]);


  const lastDiv = useIntersectionObserver(
    () => loadReels(),
    () => { },
    { threshold: .3 }
  )

  return (
    <div className="h-[100dvh] w-full max-w-md m-auto bg-black overflow-hidden">
      {
        loader ? (
          <div>Loading...</div>
        ) : (
          <div
            ref={containerRef}
            className="h-[100dvh] scrollbar-hide overflow-y-scroll snap-start snap-mandatory snap-y"
          >
            {reels && reels.length && reels.map((reel, index) => (
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
              className="relative flex dark:bg-black bg-white text-black dark:text-white justify-center items-center z-10 h-full w-full snap-start overflow-hidden"
            >
              {hasMore ? <p>Loading more reels...</p> : <p>No more reels!</p>}
            </div>
          </div>
        )
      }

    </div>
  );
}
