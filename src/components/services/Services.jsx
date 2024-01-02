import { useEffect } from 'react';
import { useState } from 'react';
import AdminData from '../../store/AdminData';
import {observer} from "mobx-react";
import Store from '../../store/Store';
import AddService from '../addService/AddService';
import './Services.css'
import { UnfoldLess } from '@mui/icons-material';

const Services=(observer(()=> {

    return (
      <>
       {AdminData.isLogin? <AddService/> :<></>}
  <ul className='serviceList'>
  <div className="div8">
    {AdminData.services.map(service => (
      <li key={service.id} className="service-item">
        <h2> {service.name}:שם השרות </h2>
        <p> {service.description}: תאור</p>
        <p>מחיר:   {service.price}</p>
        <p>משך זמן: {service.during} </p>
      </li>
    ))}
    </div>
  </ul>

      </>
    )
  }))

  export default Services
  