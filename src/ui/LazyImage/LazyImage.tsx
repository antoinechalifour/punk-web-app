import React, { useEffect, createRef, useState } from "react";

export type LazyImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  placeholderSrc: string;
  src: string;
};

export const LazyImage: React.FunctionComponent<LazyImageProps> = ({
  src,
  placeholderSrc,
  ...props
}) => {
  const ref = createRef<HTMLImageElement>();
  const [currentSrc, setCurrentSrc] = useState("");

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const image = ref.current;
    const observer: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          setCurrentSrc(src);
          intersectionObserver.unobserve(entry.target);
        }
      });
    };
    const intersectionObserver = new IntersectionObserver(observer, {
      root: null,
      rootMargin: "0px",
      threshold: 0
    });

    intersectionObserver.observe(image);

    return () => intersectionObserver.unobserve(image);
  }, [src]);

  return <img {...props} ref={ref} src={currentSrc || placeholderSrc} />;
};
