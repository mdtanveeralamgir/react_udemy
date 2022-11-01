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

function Popover(prop) {
  const [show, setShow] = useState(false);
  const [filteredPass, setFilteredPass] = useState(passwordRFequirements);
  const [displayToolkit, setDisplayToolkit] = useState(classes.toolKitDisplay);
  const target = useRef(null);

  useEffect(() => {
    if (prop.passVal.length > 0) {
      if (prop.passVal.length > 5 && prop.passVal.length < 19) {
        setFilteredPass((prev) => {
          return prev.filter((item) => item.id !== 1);
        });
      } else if (!filteredPass.some((item) => item.id === 1)) {
        filteredPass.some((item) => console.log(typeof item.id));
        setFilteredPass((prev) => {
          return [...prev, { id: 1, item: "Length should be between 6 to 20" }];
        });
      }
      if (/[A-Z]/.test(prop.passVal)) {
        setFilteredPass((prev) => {
          return prev.filter((item) => item.id !== 2);
        });
      } else if (!filteredPass.some((item) => item.id === 2)) {
        filteredPass.some((item) => console.log(typeof item.id));
        setFilteredPass((prev) => {
          return [...prev, { id: 2, item: "At least one upper case letter." }];
        });
      }
      if (/[a-z]/.test(prop.passVal)) {
        setFilteredPass((prev) => {
          return prev.filter((item) => item.id !== 3);
        });
      } else if (!filteredPass.some((item) => item.id === 3)) {
        filteredPass.some((item) => console.log(typeof item.id));
        setFilteredPass((prev) => {
          return [...prev, { id: 3, item: "At least one lower case letter." }];
        });
      }
      if (/\d/.test(prop.passVal)) {
        setFilteredPass((prev) => {
          return prev.filter((item) => item.id !== 4);
        });
      } else if (!filteredPass.some((item) => item.id === 4)) {
        filteredPass.some((item) => console.log(typeof item.id));
        setFilteredPass((prev) => {
          return [...prev, { id: 4, item: "At least one number." }];
        });
      }
      setShow(true);
      setDisplayToolkit("");
    //   if (filteredPass.length === 0) {
    //     setShow(false);
    //     setDisplayToolkit(classes.toolKitDisplay);
    //   } else {
    //     setShow(true);
    //     setDisplayToolkit("");
    //   }
    } else {
      setShow(false);
      setDisplayToolkit(classes.toolKitDisplay);
    }
  }, [prop.passVal, filteredPass]);
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
