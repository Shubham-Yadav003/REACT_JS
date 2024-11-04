import React from "react";
import PropTypes from "prop-types";

const Student = (props)=>{
    return( 
    <>
    <h3>{props.name}</h3>
    <h3>{props.age}</h3>

    </>
    );
}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number
}

Student.defaultProps={
    name: "Amit",
    age: 32

}

export default Student;