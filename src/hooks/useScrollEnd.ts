import { useEffect } from "react";

export const useScrollEnd = (
  ref: React.MutableRefObject<HTMLElement | null>,
  onScrollEnd: () => void
) => {
  useEffect(() => {
    if (ref.current === null) {
      return;
    }
    const element = ref.current;

    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            onScrollEnd();
          }
        });
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 1.0
      }
    );

    intersectionObserver.observe(element);

    return () => intersectionObserver.unobserve(element);
  }, [ref.current]);
};
