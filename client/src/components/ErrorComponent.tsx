import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export function validateGender(gender: string) {
  if (gender === "Male" || gender === "Female") return true;
  return false;
}

export const Error = ({ errors }: any) => {
  console.log("this is errors from component");
  console.log(errors);
  return errors !== undefined ? (
    <Tippy content={errors.message}>
      <div className="Error-Info-Icon">
        <FaInfoCircle />
      </div>
    </Tippy>
  ) : (
    <p></p>
  );
};
