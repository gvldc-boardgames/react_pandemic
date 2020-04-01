// from original version
const defaultMapDimensions = {
  width: 1506,
  height: 703,
};

// magic function to get the ratio to use
function getMapRatio(width, height) {
  if (width / height > defaultMapDimensions.width / defaultMapDimensions.height) {
    return height / defaultMapDimensions.height;
  } else {
    return width / defaultMapDimensions.width;
  }
}

// magic function to map coordinates on the map based on the width and height of the map
// and a pair of coordinates
export function getLocationOrigin([top, left], width, height) {
  const ratio = getMapRatio(width, height);
  return { top: top * ratio - 16, left: left * ratio - 16 };
  // I was thinking the ratios were off or something so played with this...
  // probably trash it all but who knows maybe its on to something
  /*return {
    top: top * (height / defaultMapDimensions.height),
    left: left * (width / defaultMapDimensions.width),
  };*/
}

// get the origin on the cubes
export function getCubeOrigin([top, left], width, height) {
  const ratio = getMapRatio(width, height);
  return { top: top * ratio - 12, left: left * ratio - 12 };
}

export function mapCoords(coords, width, height) {
  const ratio = getMapRatio(width, height);
  return [coords[0] * ratio, coords[1] * ratio];
}

// function used in Path drawing...
export function splitPath([x1, y1], [x2, y2], width) {
  const SPLIT_PATH_HEURISTIC = 0.25;

  if (x1 < SPLIT_PATH_HEURISTIC * width && x2 > (1 - SPLIT_PATH_HEURISTIC) * width) {
    return [
      [[x1, y1], [-(width - x2), y2]],
      [[width + x1, y1], [x2, y2]]
    ];
  } else if (x2 < SPLIT_PATH_HEURISTIC * width && x1 > (1 - SPLIT_PATH_HEURISTIC) * width) {
    return [
      [[x1, y1], [width + x2, y2]],
      [[-(width - x1), y1], [x2, y2]]
    ];
  } else {
    return null;
  }
}
