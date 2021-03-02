import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import ZoomControls from "../components/ZoomControls";

describe("rendering ZoomControls", () => {
  it("should render ZoomControls without crashing", () => {
    const zoomLevel = 75;
    const mockHandleZoomDecrease = jest.fn();
    const mockHandleZoomIncrease = jest.fn();

    const div = document.createElement("div");
    ReactDOM.render(
      <ZoomControls
        zoomLevel={zoomLevel}
        handleZoomDecrease={mockHandleZoomDecrease}
        handleZoomIncrease={mockHandleZoomIncrease}
      />,
      div
    );
  });

  it("should render ZoomControls with correct information", () => {
    const zoomLevel = 75;
    const mockHandleZoomDecrease = jest.fn();
    const mockHandleZoomIncrease = jest.fn();

    const imageSelect = shallow(
      <ZoomControls
        zoomLevel={zoomLevel}
        handleZoomDecrease={mockHandleZoomDecrease}
        handleZoomIncrease={mockHandleZoomIncrease}
      />
    );

    expect(imageSelect.instance().props.zoomLevel).toEqual(zoomLevel);
  });
});
