/**
 * Returns the zoomLevel to be applied to the image
 * @param {imgWidth} imgWidth actual width of the current image
 * @param {viewportWidth} viewportWidth viewport with
 */
export function getZoomLevel(imgWidth, viewportWidth) {
  const elementFitsInViewport = imgWidth < viewportWidth;
  if (elementFitsInViewport) {
    return 100;
  }
  return calculateZoomLevel(viewportWidth, imgWidth);
}

/**
 * Calculates zoom level rounded (down) to the nearest 5
 * @param {viewportWidth} viewportWidth viewport width
 * @param {imgWidth} imgWidth actual width of the current image
 */
function calculateZoomLevel(viewportWidth, imgWidth) {
  const zoomLevel = (viewportWidth * 100) / imgWidth;
  const roundedZoom = Math.floor(zoomLevel / 5) * 5;
  return roundedZoom;
}

/**
 * Returns the dimensions an image should be rendered at using the image size
 * and the greater of the current zoom level or minimum zoom level.
 * @param {zoomLevel} zoomLevel zoom level to be applied to the image
 * @param {width} width actual width of the current image
 * @param {height} height actual height of the current image
 * @param {minZoom} minZoom minimum zoom level to be applied to the image
 */
export function getDimensions(zoomLevel, width, height, minZoom) {
  const zoomLevelLtMinimumZoom = zoomLevel < minZoom;

  if (zoomLevelLtMinimumZoom) {
    return calculateDimensions(width, height, minZoom);
  } else {
    return calculateDimensions(width, height, zoomLevel);
  }
}

/**
 * Calculates dimensions that are based on the passed in zoomLevel
 * @param {width} width actual width of the image
 * @param {height} height actual height of the image
 * @param {zoomLevel} zoomLevel zoom level to be applied to the image
 */
function calculateDimensions(width, height, zoomLevel) {
  const proportionalWidth = (width * zoomLevel) / 100;
  const proportionalHeight = (height * zoomLevel) / 100;

  return {
    width: proportionalWidth,
    height: proportionalHeight,
  };
}
