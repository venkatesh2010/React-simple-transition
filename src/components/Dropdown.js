import React from "react";
import Transition from "./Transition";
import delay from "../helpers/delay";
export class Dropdown extends React.PureComponent {
  state = { show: false };
  toggle = (...args) => {
    if (this.timer) return;
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.timer = false;
    }, 150);
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
      onClick: delay(e => this.toggle(e, Trigger.props.onClick), 1000),
      ref: ele => (this.ele = ele)
    });
    //  console.log(this.props.children);
    return (
      <div style={{ position: "relative" }}>
        {TriggerClone}
        <Transition
          name="dropdown"
          time={150}
          styles={{
            enter: {
              opacity: ".0",
              transform: "scale(0.2)",
              transformOrigin: "left top"
            },
            enterActive: {
              transition: "opacity 150ms, transform 150ms",
              opacity: "1",
              transform: "scale(1)",
              transformOrigin: "left top"
            },
            leave: {
              opacity: "1",
              transform: "scale(1)",
              transformOrigin: "left top"
            },
            leaveActive: {
              transition: "opacity 150ms, transform 150ms",
              opacity: "0",
              transform: "scale(0.2)",
              transformOrigin: "left top"
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
