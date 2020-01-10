import React from "react";

export default class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classes: "", style: {} };
  }
  static getDerivedStateFromProps(props, state) {
    //console.log(props, state);
    if (props.children || !state.content) return { content: props.children };
    else {
      return {
        ...state,
        remove: true
      };
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // let el = this.ref;
    let name = this.props.name;
    let styles = this.props.styles;
    if (!prevState.content && this.state.content) {
      //  el.classList.add(`${this.props.name}-enter`);
      this.setState({ classes: `${name}-enter`, style: styles.enter });
      setTimeout(() => {
        this.setState({
          classes: `${name}-enter-active`,
          style: styles.enterActive
        });
        //  el.classList.add(`${this.props.name}-enter-active`);
      }, 0);
      this.cleanupTimer = setTimeout(() => {
        if (this.cleanupTimer) this.cleanUp();
      }, this.props.time);
    }
    if (!prevState.remove && this.state.remove) {
      this.setState({
        classes: `${name}-leave ${name}-leave-active`,
        style: { ...styles.leave, ...styles.leaveActive }
      });
      //  el.classList.add(`${this.props.name}-leave`);
      // el.classList.add(`${this.props.name}-leave-active`);
      this.cleanupTimer = setTimeout(() => {
        if (this.cleanupTimer) this.cleanUp();
      }, this.props.time);
    }
  }

  cleanUp = e => {
    clearTimeout(this.cleanupTimer);
    this.setState({ classes: "" });
    this.cleanupTimer = false;
    if (!this.props.children) {
      this.setState({ content: null, remove: false });
    } else {
      //  this.ref.classList.remove(`${this.props.name}-enter`);
      // this.ref.classList.remove(`${this.props.name}-enter-active`);
    }
    e && e.persist();
    //console.log(e);
  };
  render() {
    if (this.state.content) {
      let Content = this.state.content;
      const childElement = React.Children.only(Content);
      return React.cloneElement(childElement, {
        ref: el => (this.ref = el),
        onTransitionEnd: this.cleanUp,
        className: ` ${childElement.props.className} ${this.state.classes}`,
        style: { ...childElement.props.style, ...this.state.style }
      });
    }
    return null;
  }
}
Transition.defaultProps = {
  time: 300,
  styles: {
    enter: {},
    enterActive: {},
    leave: {},
    leaveActive: {}
  }
};
