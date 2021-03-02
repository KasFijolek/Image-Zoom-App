import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "../components/App";

const testImages = [
  {
    url: "../app/images/Onboarding-invite.png",
    name: "iPhone Image",
  },
  {
    url: "../app/images/Onboarding-location.png",
    name: "iPad Image",
  },
  {
    url: "../app/images/Main-page.png",
    name: "Desktop Image",
  },
];

describe("rendering App", () => {
  it("should render App without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App images={testImages} />, div);
  });

  it("should render App with correct information", () => {
    const app = shallow(<App images={testImages} />);
    expect(app.instance().props.images).toEqual(testImages);
  });
});

describe("changing image", () => {
  it("should change the currentImgIndex", () => {
    const testEvent = { target: { value: 2 } };
    const app = shallow(<App images={testImages} />);
    app.instance().handleSelectChange(testEvent);
    expect(app.state("currentImgIndex")).toEqual(2);
  });
});

describe("changing zoom level", () => {
  it("should update zoomLevel to specified value", () => {
    const app = shallow(<App images={testImages} />);
    const zoomLevel = 75;
    app.instance().updateZoomLevel(zoomLevel);
    expect(app.state("zoomLevel")).toEqual(zoomLevel);
  });

  it("should not increase zoomLevel when zoomLevel is 100", () => {
    const app = shallow(<App images={testImages} />);
    app.instance().handleZoomIncrease();
    expect(app.state("zoomLevel")).toEqual(100);
  });

  it("should not decrease zoomLevel when zoomLevel is 50", () => {
    const app = shallow(<App images={testImages} />);
    const zoomLevel = 50;
    app.instance().updateZoomLevel(zoomLevel);
    app.instance().handleZoomDecrease();
    expect(app.state("zoomLevel")).toEqual(zoomLevel);
  });

  it("should increase the zoomLevel by 5 when handleZoomIncrease called", () => {
    const app = shallow(<App images={testImages} />);
    const zoomLevel = 75;
    app.instance().updateZoomLevel(zoomLevel);
    app.instance().handleZoomIncrease();
    expect(app.state("zoomLevel")).toEqual(80);
  });

  it("should decrease the zoomLevel by 5 when handleZoomDecrease called", () => {
    const app = shallow(<App images={testImages} />);
    const zoomLevel = 75;
    app.instance().updateZoomLevel(zoomLevel);
    app.instance().handleZoomDecrease();
    expect(app.state("zoomLevel")).toEqual(70);
  });

  it("should only be able to update zoomLevel to a multiple of 5", () => {
    const app = shallow(<App images={testImages} />);
    const initialZoomLevel = app.state("zoomLevel");
    const newZoomLevel = 73;
    app.instance().updateZoomLevel(newZoomLevel);
    expect(app.state("zoomLevel")).toEqual(initialZoomLevel);
  });
});
