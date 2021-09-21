import React from "react";
import './hadith.css';

const Hadith=()=>{
    

    return(<div className="hadeth">
        <h3>الاحاديث</h3>
      <div className="container">
        <div className="hadeth-container">
          <input type="text" placeholder="1" className="number" />
          <div className="ha"></div>
        </div>
        <div className="buttons">
          <div className="prev"><i className="fas fa-caret-right"></i>التالى</div>
          <div className="next">السابق<i className="fas fa-caret-left"></i></div>
        </div>
      </div>
    </div>);
}
export default Hadith;