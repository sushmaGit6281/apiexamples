import React from "react";
import { Link } from "react-router-dom";

function FormStatus(){
    return (
      <>
        <h1>Form Status Page</h1>
        <Link to="/">
          <button>form</button>
        </Link>
      </>
    )
  }

export default FormStatus;