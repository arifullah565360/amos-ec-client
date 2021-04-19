import React from 'react';
import './HeaderMain.css'
import teacher from '../../../Image/teacher.jpg'

const HeaderMain = () => {
    return (
        <div className="header-container">
        <div className="row ms-5">
            <div className="col-md-5">
                <img style={{width:"70%"}} class="mt-5" src={teacher} alt=""/>
            </div>
            <div className="col-md-5 mt-5">
               <h1 class="text-light fs-1"> We Are Trusted <br/> Institution</h1>
               <p class="text-light" >This Quick And Free Online Test Will Tell Your Language Label And HelpChoose The Best Group Course</p>
            </div>
        </div>
        </div>
    );
};

export default HeaderMain;