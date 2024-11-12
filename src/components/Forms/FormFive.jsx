import React from 'react';
import {Button} from '../';

const FormFive = ()=> { 

  const formHandle = (event)=> {
    event.preventDefault();
  }

  return (
    <form action="#" className="vs-contact-form" >
      <div className="row gx-20">
        <div className="col-md-6 form-group">          
          <input type="text" placeholder="Your Name"/>
          <i className="fal fa-user"/>
        </div>
        <div className="col-md-6 form-group">          
          <input type="email" placeholder="Email Address"/>
          <i className="fal fa-envelope"/>
        </div>
        <div className="col-12 form-group">
          <select>
            <option defaultValue="nothing">Select subject</option>
            <option defaultValue="Web Development">Web Development</option>
            <option defaultValue="UI Design">UI Design</option>
            <option defaultValue="CMS Development">CMS Development</option>
            <option defaultValue="Theme Development">Theme Development</option>
            <option defaultValue="Wordpress Development">Wordpress Development</option>
          </select>
        </div>
        <div className="col-12 form-group">          
          <textarea placeholder="Type Your Message"/>
        </div>
        <div className="col-12">
          <Button onclick={formHandle}>Submit Message<i className="far fa-arrow-right"/></Button>
        </div>
      </div>
    </form>
  );
}

export default FormFive;