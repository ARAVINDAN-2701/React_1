import "../../css/local.css";
import Swal from "sweetalert2";
const About = ()=> {
    const handleClick1 = (busno) => {
        Swal.fire({
           html: `<div class="container">
           <div class="upp">
           <div class="loc1">KEC</div>
           
           <div class="loc3">Perundurai GH</div>
           
           <div class="loc5">Perundurau busstand</div>
           </div>
           <div class="line"></div>
           <div class="low">
           <div class="loc2">Girls Hostel</div>
           <div class="loc4">market</div>
           </div>
           <br>
         </div>
           `
        });
        // You can replace the alert with any custom popup or modal window
     };
     const handleClick2 = (busno) => {
        Swal.fire({
           html: `<div class="container">
           <div class="upp">
           <div class="loc1">KEC</div>
           
           <div class="loc3">Perundurai</div>
           
           <div class="loc5">Erode</div>
           </div>
           <div class="line"></div>
           <div class="low">
           <div class="loc2">Girls Hostel</div>
           <div class="loc4">Tindal</div>
           </div>
           <br>
         </div>
           `
        });
        // You can replace the alert with any custom popup or modal window
     };
    
    return(
    <div className="local-trip">
    <div className="Perundurai">
        <h1>LOCAL TRIP TO PERUNDURAI</h1>
        <h6>Next Trip: 5:00pm</h6>
        <button onClick={() => handleClick1(3)}>Current Bus</button>
    </div>
    <div className="Erode">
    <h1>LOCAL TRIP TO PERUNDURAI</h1>
        <h6>Next Trip: 6:00pm</h6>
        <button onClick={() => handleClick2(3)}>Current Bus</button>
    </div>
    </div>)
}
export default About;