"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

//การใช้ useRef เพื่อจัดเก็บที่อยู่ของ ข้อมูล และที่อยู่ของรููปภาพที่เราจะจัดเก็บ
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function handleClickPickImage() {
    imageInput.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleClickPickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
