import React from 'react';
import HomeDesign from "./HomeDesign";
let categoris=['food','clothing','Shoes'];
const Home = () => {
    return (
        <div>
            {
                categoris.map((item,index)=>{
                return <HomeDesign datafromHome={item}/>
            })
            }

        </div>
    );
};

export default Home;