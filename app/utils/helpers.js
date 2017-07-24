function getDimensions (zoomLevelToFit, width, height, minZoom) {
  const zoomLevelLtMinimumZoom = zoomLevelToFit < minZoom

  if (zoomLevelLtMinimumZoom) {
    return calculateDimensions(width, height, minZoom)
  } else {
    const zoomLevelToApply = Math.round(zoomLevelToFit / 5) * 5
    return calculateDimensions(width, height, zoomLevelToApply)
  }
}

function calculateDimensions (width, height, zoomLevel) {
  const proportionalWidth = (width * zoomLevel) / 100
  const proportionalHeight = (height * zoomLevel) / 100

  return {
    'width': proportionalWidth,
    'height': proportionalHeight,
    zoomLevel
  }
}

module.exports = {
  getDimensions
}
