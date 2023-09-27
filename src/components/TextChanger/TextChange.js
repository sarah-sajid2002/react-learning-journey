import React, { useState } from "react";
import "./TextChanger.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import clipboard from "clipboard-copy";
import Swal from "sweetalert2";
export default function TextChange() {
  const [text, setTExt] = useState("enter your text");
  const UpFunction = (e) => {
    const upText = text.toUpperCase();
    setTExt(upText);
  };
  const lowerFunction = (e) => {
    const lowerText = text.toLowerCase();
    setTExt(lowerText);
  };
  const countFunction = (e) => {
    const countText = text.length;
    return countText;
  };
  const removeFunction = (e) => {
    setTExt("");
  };
  const copyToClipboardFunc = (e) => {
    clipboard(text);
    Swal.fire("copied!!!");
  };
  const onChange = (e) => {
    setTExt(e.target.value);
  };
  return (
    <>
      <div className="parentDiv">
        <div className="mainDiv">
          <h1>text changer</h1>
          <div className="showWord">no of words: {countFunction()}</div>
          <textarea
            name="textBox"
            id="textBox"
            cols="60"
            rows="10"
            value={text}
            onChange={onChange}
          ></textarea>
          <div className="buttonDiv">
            <button onClick={UpFunction} className="upperCase">
              upper case
            </button>
            <button onClick={lowerFunction} className="lowerCase">
              lower case
            </button>

            <button onClick={removeFunction} className="remove">
              remove
            </button>
            <button onClick={copyToClipboardFunc} className="copyToClipboard">
              copy to clipboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
