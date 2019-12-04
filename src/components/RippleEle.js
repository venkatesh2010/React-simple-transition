import React from "react";

export default class RippleEle extends React.PureComponent {
  timeout = 0;
  state = {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      overflow: "hidden",
      display: "none",
      height: "100%",
      width: "100%",
      backgroundColor: "blue"
    },
    innerStyle: {
      top: 0,
      position: "absolute",
      left: 0
    }
  };
  onClick = (...args) => {
    if (this.timeout) return;
    this.placeAnimatedDivOnTop(args[0]);
    this.timout = setTimeout(() => {
      this.props.onClick(...args);
      this.timeout = 0;
    }, 300);
  };
  placeAnimatedDivOnTop = e => {
    let { pageX, pageY } = e;
    let rect = this.el.getBoundingClientRect();
    console.log(rect.top, pageX, pageY);
    this.setState({ style: { ...this.state.style, display: "block" } });
    setTimeout(() => {
      this.setState({ style: { ...this.state.style, display: "none" } });
    }, 300);
  };

  render = () => {
    let RenderEle = this.props.renderEle;
    return (
      <div
        style={{ position: "relative", display: "inline-block" }}
        ref={el => (this.el = el)}
      >
        <RenderEle onClick={this.onClick} />
        <div style={this.state.style}>
          <div style={this.state.innerStyle} />
        </div>
      </div>
    );
  };
}
