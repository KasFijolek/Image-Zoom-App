import { useEffect, useState } from "react";
import { getZoomLevel } from "../utils/helpers";

export function useImageSize(imgUrl, updateZoomLevel) {
  const [actualSize, setActualSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let img = new Image();

    img.onload = () => {
      const imageSize = {
        width: img.width,
        height: img.height,
      };
      setActualSize(imageSize);
      img = null;

      const zoomLevelToApply = getZoomLevel(imageSize.width, window.innerWidth);
      updateZoomLevel(zoomLevelToApply);
    };

    img.src = imgUrl;
  }, [imgUrl]);
  return actualSize;
}
