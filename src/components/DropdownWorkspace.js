import React from "react";
import { Dropdown } from "./Dropdown";
export const DropdownWorkspace = props => {
  return (
    <div>
      <Dropdown>
        <button className="button">Trigger</button>
        <article className="message">
          <div className="message-header">
            <p>Hello World</p>
            <button className="delete" aria-label="delete" />
          </div>
          <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </div>
        </article>
      </Dropdown>
      <Dropdown>
        <button className="button">Trigger</button>
        <div
          style={{
            boxShadow: "1px 1px 15px 2px #8d8d8d",
            borderRadius: 6
          }}
        >
          {[...Array(5)].map((a, i) => {
            return <div style={{ padding: 10, width: 200 }}> item {i}</div>;
          })}
        </div>
      </Dropdown>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Dropdown>
          <button className="button">Trigger</button>
          <article className="message">
            <div className="message-header">
              <p>Hello World</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
              porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
              Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
              efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor
              ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
              sem eget, facilisis sodales sem.
            </div>
          </article>
        </Dropdown>
      </div>
    </div>
  );
};
