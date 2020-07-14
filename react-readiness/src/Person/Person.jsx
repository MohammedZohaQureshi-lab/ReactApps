import React from "react";
import styled from 'styled-components';
const Person = (props) => {
    const StyledDiv = styled.div`
    width: 100%;
    background: #fff;
    border: 1px solid #eeee;
    padding:10px 0 20px;
    margin-bottom: 10px;
    border-radius: 4px;

    @media (max-width:600px) {       
        border: 1px solid red;
      }
    `
    return (
        <StyledDiv>
            <p onClick={props.click} >
                My Names is {props.name}, I'm {props.age} years of age.
            </p>
            <div>
                <label>Edit Name</label>
                <input type="text" onChange={props.changeHandler} value={props.name} />
            </div>
            <div>{props.children}</div>

        </StyledDiv>

    );
};

export default Person;
