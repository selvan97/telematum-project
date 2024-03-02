import React from 'react';
import "./CustomName.css";

const CustomName = ({ userImage, mobile_number, patient_name }) => {
  return (
    <div>
      {/* section starts */}
      <div className="customize_person  ">
        <div className="profile_picture whitespace-nowrap  mx-1">
          <img  src={userImage} className="whitespace-nowrap " alt="pic" />
        </div>
        {/*  */}
        <div className="customize_name text-left whitespace-nowrap mx-1">
          <div className='font-bold text-black  tracking-tighter'>{patient_name}</div>
          <div className='font-light text-xs tracking-tighter'>{mobile_number}</div>
        </div>
        {/*  */}
      </div>
      {/* section ends */}
    </div>
  )
}

export default CustomName;
