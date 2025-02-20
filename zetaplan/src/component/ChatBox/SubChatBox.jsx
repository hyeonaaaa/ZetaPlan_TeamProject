import React from 'react';
import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import './subChatBox.css';

const SubChatBox = () => {
  return (
    <div id='SubChatBox'>
      <h2 className='chatbox-title'>Contact Us</h2>
      <div className='chatbox-content'>
        <span className='chatbox-subtitle'><BsTelephoneFill size='1rem' /> Tel</span>
        <p>02) 538 - 4801</p>
        <p>02) 561 - 6698</p>
        <p>070) 8129-5884, 5885</p>
        <span className='chatbox-subtitle'><HiMail size='1rem' /> E-mail</span>
        <p>zetabiz@zetaplan.com</p>
      </div>
      <a href="#" className='chatbox-btn'>상담신청하기<BiRightArrowAlt size='1.5rem' fill='#efefef' /></a>
    </div>
  );
};

export default SubChatBox;