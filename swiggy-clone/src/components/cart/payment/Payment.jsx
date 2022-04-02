// import React from 'react';
// import axios from "axios";
// import {razorpay as Razorpay} from "razorpay";



// const razorpay=new Razorpay({
//     key_id:process.env.RAZORPAY_ID,
//     key_secret:process.env.RAZORPAY_SECRET
//     })
    
//    router.post("/order",async(req,res)=>{
//    try{
//         const user = req.user;
//         const currentuser = user._id;

//       const checkoutPrice = await Checkout.find({userId:currentuser}).lean().exec();
//       const totalPrice = checkoutPrice[0].totalPrice;
//     const options = {
//         amount: totalPrice * 100 ,  // amount in the smallest currency unit
//         currency: "USD",
    
//       };
//       razorpay.orders.create(options, function(err, order) {
//           order_id_var=order.id;
//         res.json(order)
//       });
  


//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Payment;