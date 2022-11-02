import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import classes from "./poper.module.css";
import PassRequirementUl from "../PassRequirementUl";

const passwordRFequirements = [
  { id: 1, item: "Length should be between 6 to 20" },
  { id: 2, item: "At least one upper case letter." },
  { id: 3, item: "At least one lower case letter." },
  { id: 4, item: "At least one number." },
];
const validPassword = (password) => {
  return (
    password.length > 5 &&
    password.length < 19 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password)
  );
};
function Popover(prop) {
  const [show, setShow] = useState(false);
  const [filteredPass, setFilteredPass] = useState(passwordRFequirements);
  //   const [displayToolkit, setDisplayToolkit] = useState(classes.toolKitDisplay);
  //   const [filteredPassChanged, setFilteredPassChanged] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    if (prop.passVal.length > 0) {
      if (prop.passVal.length > 5 && prop.passVal.length < 19) {
        setFilteredPass((prev) => {
          return prev.filter((item) => item.id !== 1);
        });
      } else {
        setFilteredPass((prev) => {
          if (!prev.some((item) => item.id === 1)) {
            return [
              ...prev,
              { id: 1, item: "Length should be between 6 to 20" },
            ];
          } else {
            return prev;
          }
        });
      }
      if (/[A-Z]/.test(prop.passVal)) {
        setFilteredPass((prev) => {
          return prev.filter((item) => item.id !== 2);
        });
      } else {
        setFilteredPass((prev) => {
          if (!prev.some((item) => item.id === 2)) {
            return [
              ...prev,
              { id: 2, item: "At least one upper case letter." },
            ];
          } else {
            return prev;
          }
        });
      }
      if (/[a-z]/.test(prop.passVal)) {
        setFilteredPass((prev) => {
          return prev.filter((item) => item.id !== 3);
        });
      } else {
        setFilteredPass((prev) => {
          if (!prev.some((item) => item.id === 3)) {
            return [
              ...prev,
              { id: 3, item: "At least one lower case letter." },
            ];
          } else {
            return prev;
          }
        });
      }
      if (/\d/.test(prop.passVal)) {
        setFilteredPass((prev) => {
          return prev.filter((item) => item.id !== 4);
        });
      } else {
        setFilteredPass((prev) => {
          if (!prev.some((item) => item.id === 4)) {
            return [...prev, { id: 4, item: "At least one number." }];
          } else {
            return prev;
          }
        });
      }
      if (validPassword(prop.passVal)) {
        setShow(false);
      } else {
        setShow(true);
      }
    } else {
      setShow(false);
    }
  }, [prop.passVal]);
  const displayToolkit = show ? "" : classes.toolKitDisplay;
  return (
    <>
      {/* {console.log(filteredPass)} */}
      <Button
        className={classes.poperButton}
        ref={target}
        // onClick={() =>
        //   setShow((prev) => {
        //     return !prev;
        //   })
        // }
      ></Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip className={displayToolkit} id="overlay" {...props}>
            <PassRequirementUl requirements={filteredPass} />
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

export default Popover;
