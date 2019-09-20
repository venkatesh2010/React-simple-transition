import React from "react";
import ReactDOM from "react-dom";

export default class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate->", prevProps.innerRef);
    //console.log("prevState->", prevState, this.state);
    let el = this.ref;
    if (!prevState.content && this.state.content) {
      console.log("inserted", this.ref);
      el.classList.add(`${this.props.name}-enter`);
      setTimeout(() => {
        el.classList.add(`${this.props.name}-enter-active`);
      }, 0);
    }
    // console.log("oldEl,el->", oldEl, el);
    if (!prevState.remove && this.state.remove) {
      el.classList.add(`${this.props.name}-leave`);
      el.classList.add(`${this.props.name}-leave-active`);
      // console.log("prevState->", prevState);
      // setTimeout(() => {
      //   //  this.props.innerRef.classList.remove("fade");
      //   el.classList.remove(`${this.props.name}-leave`);
      //   el.classList.remove(`${this.props.name}-leave-active`);
      //   this.setState({ content: null, remove: false });
      // }, 1000);
    }
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
  cleanUp = e => {
    if (!this.props.children) {
      this.setState({ content: null, remove: false });
    } else {
      this.ref.classList.remove(`${this.props.name}-enter`);
      this.ref.classList.remove(`${this.props.name}-enter-active`);
    }
    e.persist();
    console.log(e);
  };
  render() {
    if (this.state.content) {
      let Content = this.state.content;
      const childElement = React.Children.only(Content);
      return React.cloneElement(childElement, {
        ref: el => (this.ref = el),
        onTransitionEnd: this.cleanUp,
        className: ` ${childElement.props.className} extra-just-like-that`
      });
    }
    return null;
  }
}
