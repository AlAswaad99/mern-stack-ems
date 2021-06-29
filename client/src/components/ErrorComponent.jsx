import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "react-datepicker/dist/react-datepicker.css";
import "tippy.js/dist/tippy.css";

export function validateGender(gender) {
  if (gender === "Male" || gender === "Female") return true;
  return false;
}

export const Error = ({ errors }) => {
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
