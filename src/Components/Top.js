import React from 'react';
import HomeDesign from "./HomeDesign";
import TopDesign from "./TopDesign";
let categoris=['food','clothing','Shoes'];

const Top = () => {
    return (
        <div>
            {
                categoris.map((item,index)=>{
                    return <TopDesign datafromTop={item}/>
                })
            }

        </div>
    );
};

export default Top;