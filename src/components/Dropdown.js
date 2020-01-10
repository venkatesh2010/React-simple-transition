import React from "react";
import Transition from "./Transition";

export class Dropdown extends React.PureComponent {
  state = { show: false };
  toggle = (...args) => {
    if (!this.state.show) this.handlePlacement();
    this.setState({ show: !this.state.show });
    const [e, onClick, ...rest] = args;
    onClick && onClick(...[e, ...rest]);
  };
  handlePlacement = () => {
    const { top, left, width, height } = this.ele.getBoundingClientRect();
    const { innerWidth: w, innerHeight: h } = window;
    const bottom = h - top - height;
    const right = w - left - width;
    const style = {};
    if (top < bottom) {
      style.top = height + 10;
    } else {
      style.bottom = height + 10;
    }
    style.left = 0;
    this.setState({ style: style });
    //if()
  };

  render = () => {
    const Trigger = this.props.children[0];
    const Content = this.props.children[1];
    const TriggerClone = React.cloneElement(Trigger, {
      ...Trigger.props,
      onClick: e => this.toggle(e, Trigger.props.onClick),
      ref: ele => (this.ele = ele)
    });
    //  console.log(this.props.children);
    return (
      <div style={{ position: "relative" }}>
        {TriggerClone}
        <Transition
          name="dropdown"
          time={1000}
          styles={{
            enter: {
              opacity: ".0"
            },
            enterActive: {
              transition: "opacity 1s",
              opacity: "1"
            },
            leave: {
              opacity: "1"
            },
            leaveActive: {
              transition: "opacity 1s",
              opacity: "0"
            }
          }}
        >
          {this.state.show && (
            <div
              style={{
                position: "absolute",
                zIndex: 1000,
                ...this.state.style
              }}
            >
              {Content}
            </div>
          )}
        </Transition>
      </div>
    );
  };
}
