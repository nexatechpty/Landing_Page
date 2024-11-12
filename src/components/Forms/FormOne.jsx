import React from 'react';
import {Button} from '../';

const FormOne = ({className, title, btnText})=> {
  
  const formHandle = (event)=> {
    event.preventDefault();
  }
  
  return (
    <form className={`form-style1 ${className || ''}`}>
      <h2 className="form-title h4">{title}</h2>
      <div className="form-group">
        <input type="text" placeholder="Enter Full Name"/>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Email Address"/>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Appointment Subject"/>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Appointment Date"/>
      </div>
      <div className="form-group">
        <textarea placeholder="Write a short message..." />
      </div>
      <div className="form-btn">
        <Button className="style5" onclick={formHandle}>{btnText}<i className="far fa-arrow-right"/></Button>
      </div>
    </form>
  );
};

export default FormOne;