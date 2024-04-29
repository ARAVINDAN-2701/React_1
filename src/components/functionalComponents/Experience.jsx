import React from 'react';
import "../../css/dayscholar.css";
import Swal from 'sweetalert2';
const Experience = () => {
   
   const handleClick1 = (busNo) => {
      Swal.fire({
         html: `<div class="container">
         <div class="upp">
         <div class="loc1">KEC</div>
         
         <div class="loc3">Kanjikovil</div>
         
         <div class="loc5">Velampalayam</div>
         </div>
         <div class="line"></div>
         <div class="low">
         <div class="loc2">Nasiynur</div>
         <div class="loc4">Kavindapadi</div>
         </div>
         <br>
         <button class="chat">ChatBox</button>
         <button class="check">Check Your child</button>
       </div>
         `
      });
      // You can replace the alert with any custom popup or modal window
   };
   const handleClick2 = (busNo) => {
      Swal.fire({
         html: `<div class="container">
         <div class="upp">
         <div class="loc1">KEC</div>
         
         <div class="loc3">Arachalur</div>
         
         <div class="loc5">Kodumudi</div>
         </div>
         <div class="line"></div>
         <div class="low">
         <div class="loc2">Vellode</div>
         <div class="loc4">Sivagiri</div>
         </div>
         <br>
         <button class="chat">ChatBox</button>
         <button class="check">Check Your child</button>
       </div>
         `
      });
      // You can replace the alert with any custom popup or modal window
   };
   const handleClick3 = (busNo) => {
      Swal.fire({
         html: `<div class="container">
         <div class="upp">
         <div class="loc1">KEC</div>
         
         <div class="loc3">Thindal</div>
         
         <div class="loc5">Erode GH</div>
         </div>
         <div class="line"></div>
         <div class="low">
         <div class="loc2">Nandha college</div>
         <div class="loc4">Collector Office</div>
         </div>
         <br>
         <button class="chat">ChatBox</button>
         <button class="check">Check Your child</button>
       </div>
         `
      });
      // You can replace the alert with any custom popup or modal window
   };
   const handleClick4 = (busNo) => {
      Swal.fire({
         html: `<div class="container">
         <div class="upp">
         <div class="loc1">KEC</div>
         <div class="loc3">Kanjikovil</div>
         <div class="loc5">Velampalayam</div>
         </div>
         <div class="line"></div>
         <div class="low">
         <div class="loc2">Nasiynur</div>
         <div class="loc4">Kavindapadi</div>
         </div>
         <button class="chat">ChatBox</button>
         <button class="check">Check Your child</button>
       </div>
         `
      });
      // You can replace the alert with any custom popup or modal window
   };
   
   return (
      <div className="dayscholar">
         <div className="search">
         <input type="text" id="search" placeholder="SEARCH" className='searchbox'></input>
         </div>
         <div className="buslist">
            <button className="bus" onClick={() => handleClick1(3)}>BUS NO: 3</button>
            <button className="bus" onClick={() => handleClick2(18)}>BUS NO: 18</button>
            <button className="bus" onClick={() => handleClick3(32)}>BUS NO: 32</button>
            <button className="bus" onClick={() => handleClick4(7)}>BUS NO: 7</button>
         </div>
      </div>
   );
};

export default Experience;
