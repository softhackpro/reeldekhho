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
  const currentReelIndex = useRef<number>(0);

  const scrollToReel = (index: number) => {
    const reel = reelRefs.current[index];
    if (reel) {
      reel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleReelIndex = -1;

        // Find the first visible reel
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = reelRefs.current.findIndex((reel) => reel === entry.target);
            if (index !== -1) {
              visibleReelIndex = index;
            }
          }
        });

        if (visibleReelIndex !== -1 && visibleReelIndex !== currentReelIndex.current) {
          currentReelIndex.current = visibleReelIndex;
          scrollToReel(visibleReelIndex);
        }
      },
      {
        threshold: 0.6,
      }
    );

    reelRefs.current.forEach((reel) => {
      if (reel) observer.observe(reel);
    });

    return () => {
      observer.disconnect();
    };
  }, [reels]);

  const lastDiv = useIntersectionObserver(
    () => loadReels(),
    () => { },
    { threshold: 1 }
  )

  return (
    <div className="h-[100dvh] w-full max-w-md m-auto bg-black overflow-hidden">
      <div
        ref={containerRef}
        className="h-full scrollbar-hide overflow-y-scroll snap-mandatory snap-y"
      >
        {reels.map((reel, index) => (
          <div
            ref={(el) => (reelRefs.current[index] = el)}
            key={index}
            className="snap-start h-full"
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
