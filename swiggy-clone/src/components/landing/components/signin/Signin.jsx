
import React from 'react';
import styled from 'styled-components';
import AuthLoginDrawer from '../drawer/LoginDrawer';
import RegisterDrawer from '../drawer/RegisterDrawer';
import { SearchBar } from '../search/SearchBar';
import Typewriter from 'typewriter-effect';



 export const Div = styled.div`
     overflow: hidden;
 `;
 
 export const CardContainer = styled.div`
     background-color: #2b1e16;
 `;
 
 export const Card = styled.div`
     border: none;
     background-color: #2b1e16;
 `;
 
 export const CardImg = styled.img`
     width: 128px;
     height: 206px;
 `;
 
 export const InnerDiv = styled.div`
     margin-top: 8%;
 `;
 
 export const Search = styled.div`
     border: 1px solid grey;
     overflow: visible;
     margin-top: 4%;
     height: 60px;
 `;
 
 export const City = styled.div`
     overflow: visible;
     margin-top: 4%;
     li {
         cursor: pointer;
     }
 `;
 
 export const MainImg = styled.img`
     height: 570px;
     width: 100%;
 `;
 
 export const Logo = styled.img`
     height: 80px;
     width: auto;
 `;
 
 const Header = () => {
  //  const isLoggedIn = useSelector(state => state.authentication.loggedIn);
   // alert(isLoggedIn);
   return (
     <Div className="container-fluid">
       <div className="row">
         <div className="col-6  ml-auto">
           {/* LOGO */}
           <InnerDiv className="container">
             <div className="row ">
               <div className="col-1 mr-auto align-self-start">
                 <Logo
                   src="https://d2sj89osparb2a.cloudfront.net/images/media/swiggy-cashback-coupons.png"
                   alt="logo"
                 />
               </div>
               <div
                 className="col-lg-2 btn btn-lg align-self-center font-weight-bold "
                 style={{ textAlign: 'right' }}
               >
                 <AuthLoginDrawer />
                 {/* Login */}
               </div>
               <div
                 className="col-lg-3 btn btn-lg align-self-center font-weight-bold"
                 style={{
                  //  border: '1px solid red',
                   textAlign: 'left'
                 }}
               >
                 <RegisterDrawer />
               </div>
             </div>
           </InnerDiv>
 
           {/* SOME TEXT & TAG LINE */}
           <InnerDiv className="container">
             <div className="row align-self-start row-cols-1">
               <div className="col text-left text-wrap  mb-1">
                 <p className="h2 font-weight-bold"> <Typewriter
                      options={{
                        strings: ['Late Night office ?', 'Cooking gone wrong ?','Hungry ?', 'Unexpected guests ?'],
                        autoStart: true, 
                        loop: true,
                        delay: 50,
                        deleteSpeed: 50,
                      }}/> </p>
               </div>
               <div className="col text-left text-wrap">
                 <p className="h4 text-muted">Order food from favourite restaurants near you.</p>
               </div>
             </div>
           </InnerDiv>
 
           {/* SEARCH BAR */}
           <div className="container">
             <SearchBar />
           </div>
 
           {/* POPULAR CITIES */}
           <City className="container">
             <div className="row row-cols-1">
               <div className="col text-left text-wrap mb-1 text-uppercase h6 text-muted ">
                 Popular cities in India
               </div>
               <div
                 className="container"
                 style={{
                   marginLeft: '0px'
                 }}
               >
                 <ul
                   className="list-inline"
                   style={{
                     marginLeft: '0px',
                     textAlign: 'left'
                   }}
                 >
                   <li
                     className="list-inline-item font-weight-bold"
                     style={{
                       marginLeft: '0px'
                     }}
                   >
                     Ahmedabad
                   </li>
                   <li className="list-inline-item font-weight-bold text-muted">Bangalore</li>
                   <li className="list-inline-item font-weight-bold">Chennai</li>
                   <li className="list-inline-item font-weight-bold text-muted">Delhi</li>
                   <li className="list-inline-item font-weight-bold">Gurgaon</li>
                   <li className="list-inline-item font-weight-bold text-muted">Hyderabad</li>
                   <li className="list-inline-item font-weight-bold">Kolkata</li>
                   <li className="list-inline-item font-weight-bold text-muted">Mumbai</li>
                   <br />
                   <li className="list-inline-item font-weight-bold">Pune</li>
                   <li className="list-inline-item font-weight-bold text-muted">&more</li>
                 </ul>
               </div>
             </div>
           </City>
         </div>
         {/* MAIN IMAGE */}
         <div className="col-5" style={{'padding': '0px'}}>
           <MainImg
             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Breakfast1-new_q6cje7"
             height="570px" width="100%"
             alt="swiggy main"
           />
         </div>
       </div>
       {/* <Feature /> */}
     </Div>
   );
 };
 
 export default Header;

 
 