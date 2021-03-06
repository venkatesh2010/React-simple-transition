import React from "react";
const innerStyle = {
  top: 0,
  position: "absolute",
  height: 0,
  width: 0,
  borderRadius: "50%",
  left: 0
};
const outerStyle = {
  position: "relative",
  overflow: "hidden"
};
// const timingFunction = "cubic-bezier(.12,1.15,.83,1.39)";
const timingFunction = "linear";
export default class RippleEle2 extends React.PureComponent {
  timeout = 0;
  state = {
    style: outerStyle,
    innerStyle: innerStyle,
    show: false
  };
  onClick = (...args) => {
    const [e, onClick, ...rest] = args;
    if (this.timeout) return;
    this.placeAnimatedDivOnTop(e);
    // const onClick = args[1];
    this.timout = setTimeout(() => {
      onClick && onClick(...[e, ...rest]);
      this.timeout = 0;
    }, this.props.time);
  };
  placeAnimatedDivOnTop = e => {
    const { pageX, pageY } = e;
    const X = pageX - window.scrollX;
    const Y = pageY - window.scrollY;
    const { top, left, width, height } = this.ele.getBoundingClientRect();
    const { borderRadius, display: d } = window.getComputedStyle(this.ele);
    const display = d.indexOf("inline") > -1 ? "inline-flex" : "block";
    // console.log(top, pageY, left, pageX);
    const a = Math.max(Y - top, height + top - Y);
    const b = Math.max(X - left, width + left - X);
    const rippleRadius = Math.sqrt(a * a + b * b);
    //const rippleRadius = Math.max(height, width) * 2;
    this.setState({
      style: { ...this.state.style, borderRadius, height, width, display },
      innerStyle: {
        ...this.state.innerStyle,
        top: Y - top,
        left: X - left,
        opacity: 0.5,
        transform: "translate3d(0,0,0)",
        transition: `width ${this.props.time}ms ${timingFunction},opacity ${
          this.props.time
        }ms cubic-bezier(1,0,.99,.13), height ${
          this.props.time
        }ms ${timingFunction},transform ${this.props.time}ms ${timingFunction}`
      },
      show: true
    });
    setTimeout(() => {
      this.setState({
        innerStyle: {
          ...this.state.innerStyle,
          width: rippleRadius * 2,
          height: rippleRadius * 2,
          opacity: 0,
          transform: `translate3d(-${rippleRadius}px,-${rippleRadius}px,0)`
        }
      });
    }, 0);
    setTimeout(() => {
      this.setState({
        innerStyle: innerStyle,
        style: outerStyle,
        show: false
      });
    }, this.props.time);
  };

  render = () => {
    const childElement = React.Children.only(this.props.children);
    //console.log(childElement.props);
    //return childElement;
    const onClick = childElement.props.onClick;
    const clone = React.cloneElement(childElement, {
      ...childElement.props,
      ref: el => (this.ele = el),
      onClick: e => this.onClick(e, onClick),
      style: { ...childElement.props.style }
    });
    //return clone;
    if (!this.state.show) return clone;
    return (
      <div style={this.state.style}>
        {clone}
        <div
          style={{
            ...this.state.innerStyle,
            backgroundColor: this.props.bgColor
          }}
        />
      </div>
    );
  };
}

RippleEle2.defaultProps = {
  bgColor: "black",
  time: 300
};
