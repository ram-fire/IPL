import React from "react";
import ImageArray from "./ImageArray";
import CARD from "./CARD";
function PageDefault()
{
    return (
           <div className="PD">
             {ImageArray.map((image,index)=>(
                 <CARD
                 key={index}
                 url={image.url}
                 title={image.title}    
                 />
             ))}
           </div>
    );
}
export default PageDefault;