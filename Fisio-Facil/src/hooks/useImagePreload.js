import { useEffect } from "react";

const DEFAULT_IMAGE_SIZES = "(max-width: 768px) 92vw, 420px";

export const useImagePreload = ({
  href,
  srcSet,
  sizes = DEFAULT_IMAGE_SIZES,
  media,
}) => {
  useEffect(() => {
    if (!href) {
      return undefined;
    }

    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = href;

    if (srcSet) {
      preloadLink.setAttribute("imagesrcset", srcSet);
    }

    if (sizes) {
      preloadLink.setAttribute("imagesizes", sizes);
    }

    if (media) {
      preloadLink.media = media;
    }

    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, [href, srcSet, sizes, media]);
};
