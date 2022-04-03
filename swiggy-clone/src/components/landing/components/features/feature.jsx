/**
 *
 * Feature
 *
 */
 import React, { Fragment } from 'react'
 import styled from 'styled-components';

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

 
 const Feature = () => {
     return (
         <Fragment>
             <CardContainer className="row justify-content-around pb-2">
                 <div className="col-3 ml-2 mt-3 pb-5">
                     <Card className="card">
                         <CardImg
                             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
                             className="card-img-top align-self-center"
                             alt="No Minimum Order"
                         />
                         <div className="card-body" style={{ color: 'white' }}>
                             <p className="card-title h4 font-weight-bold mt-2">No Minimum Order</p>
                             <p className="card-text">
                                 Order in for yourself or for the group, with no restrictions on order value
                             </p>
                         </div>
                     </Card>
                 </div>

                 <div className="col-3 mt-3">
                     <Card className="card">
                         <CardImg
                             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
                             className="card-img-top align-self-center"
                             alt="Live Order Tracking"
                         />
                         
                         <div className="card-body" style={{ color: 'white' }}>
                             <h5 className="card-title h4 font-weight-bold mt-2">Live Order Tracking</h5>
                             <p className="card-text">
                                 Know where your order is at all times, from the restaurant to your doorstep
                             </p>
                         </div>
                     </Card>
                 </div>

                 <div className="col-3 mr-2 mt-3">
                     <Card className="card">
                         <CardImg
                             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
                             className="card-img-top align-self-center"
                             alt="Lightning-Fast Delivery"
                         />

                         <div className="card-body" style={{ color: 'white' }}>
                             <h5 className="card-title h4 font-weight-bold mt-2">Lightning-Fast Delivery</h5>
                             <p className="card-text">
                                 Experience Swiggy's superfast delivery for food delivered fresh & on time
                             </p>
                         </div>
                     </Card>
                 </div>
             </CardContainer>
         </Fragment>
     );
 };
 
 export default Feature;
 