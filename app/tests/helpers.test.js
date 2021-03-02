import React from "react";
import { shallow } from "enzyme";

import App from "../components/App";

const getDimensions = require("../utils/helpers").getDimensions;
const getZoomLevel = require("../utils/helpers").getZoomLevel;

describe("get zoom level", () => {
  it("should return 100 when image width is less than viewport width", () => {
    const expectedZoomLevel = 100;
    const imgWidth = 500;
    const viewportWidth = 1000;
    const result = getZoomLevel(imgWidth, viewportWidth);
    expect(result).toEqual(expectedZoomLevel);
  });

  it("should return 50 when image width is double the viewport width", () => {
    const expectedZoomLevel = 50;
    const imgWidth = 1000;
    const viewportWidth = 500;
    const result = getZoomLevel(imgWidth, viewportWidth);
    expect(result).toEqual(expectedZoomLevel);
  });

  it("should round down 64.35 to 60 when image width is 777 and viewport width is 500", () => {
    const expectedZoomLevel = 60;
    const imgWidth = 777;
    const viewportWidth = 500;
    const result = getZoomLevel(imgWidth, viewportWidth);
    expect(result).toEqual(expectedZoomLevel);
  });

  it("should return zoom level unchanged if passed in to getZoomLevel", () => {
    const zoomLevel = 65;
    const imgWidth = 500;
    const viewportWidth = 1000;
    const result = getZoomLevel(imgWidth, viewportWidth, zoomLevel);
    expect(result).toEqual(zoomLevel);
  });
});

describe("get dimensions", () => {
  it("should return dimenions at 50% when zoom level is less than min zoom", () => {
    const expectedDimensions = { width: 500, height: 500 };
    const zoomLevel = 40;
    const width = 1000;
    const height = 1000;
    const minZoom = 50;
    const result = getDimensions(zoomLevel, width, height, minZoom);
    expect(result).toEqual(expectedDimensions);
  });

  it("should return dimenions at 70% when zoom level is 70%", () => {
    const expectedDimensions = { width: 700, height: 700 };
    const zoomLevel = 70;
    const width = 1000;
    const height = 1000;
    const minZoom = 50;
    const result = getDimensions(zoomLevel, width, height, minZoom);
    expect(result).toEqual(expectedDimensions);
  });
});
