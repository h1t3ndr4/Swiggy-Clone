import "./Stickybar.css";
import { useState, useEffect } from "react";

export const StickyBar = () => {
const [value, setValue] = useState("");

const checkSroll = () => {

    if( 1000 > window.pageYOffset ){
        setValue("sticky");
    }else{
        setValue(null);
    }
}

useEffect(() => {
   window.addEventListener("scroll", checkSroll);
}, [])


  return (
    <>
      <div className  = {`${value} bar`}></div>
    </>
  );
};
