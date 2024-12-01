import { useState } from "react";

const Breeze = ()=>{
    const [isClicked,setisClicked] = useState(true)
    return(
        <div className=" flex justify-center items-center h-screen w-full bg-red-200 border border-green-950">
            <div className="w-[500px] h-[300px] border bg-white">
                {isClicked?(
                    <>
                     <h1 className="m-10 text-[20px]">How satisfied are you with our customer support performance?</h1>
                <div className="emoji flex justify-between m-10 ">
                    <p onClick={()=>setisClicked(false)} className=" cursor-pointer flex flex-col justify-center items-center text-black ">😁<span className="text-[15px]">Happy</span></p>
                    <p className="flex flex-col justify-center items-center text-black ">🥲<span className="text-[15px]">Sad</span></p>
                    <p className="flex flex-col justify-center items-center text-black ">🙁<span className="text-[15px]">None</span></p>
                </div>
                    </>
                ):
                <div className="w-full h-full happy flex flex-col justify-center items-center">
                    <p onClick ={()=>setisClicked(true)} className="cursor-pointer">❤️</p>
                    <p onClick  ={()=>setisClicked(true)}className="text-[20px] text-black">Thanks for your feedback</p>
                </div>
                }
            </div>

        </div>
    )
}

export default Breeze;