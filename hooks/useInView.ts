
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView<T extends Element>(
  ref: RefObject<T>,
  options: UseInViewOptions = { once: false, threshold: 0.1 }
): boolean {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once && observerRef.current) {
          observerRef.current.disconnect();
        }
      } else {
        if (!options.once) {
          setIsInView(false);
        }
      }
    }, options);

    const { current: observer } = observerRef;
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isInView;
}
