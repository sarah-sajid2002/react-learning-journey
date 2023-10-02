import React, { useState } from "react";
import "./TextChanger.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import clipboard from "clipboard-copy";
import Swal from "sweetalert2";
export default function TextChange() {
  // use states
  const [text, setTExt] = useState("enter your text");
  const [fontWeight, changeFontWeight] = useState("normal");
  // functions
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
  // on change
  const onChange = (e) => {
    setTExt(e.target.value);
  };

  return (
    <>
      <h1>project 2 use state hook</h1>
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
            <button onClick={() => changeFontWeight("bold")} className="bold">
              B
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
