import React from 'react'

const Rules = () => {
  return (
    <div >
        <div>
            <div className="block p-6 rounded-lg">
                <h1 style={{ height:"73px", fontWeight: 700, fontSize: "60px", lineHeight: "75px", textAlign:"center", letterSpacing: "-0.06em",color: "#000000"}} >
                    Who Can Participate ?
                </h1>
            </div> 
        </div>

        <div className='flex justify-center'>
            <p style={{textAlign:"center",color: "#000000"}}> 
                Open to Students of Sri Lankan Institute of Information Technology (SLIIT) 
                         <br></br>from the following batches;<br></br>
            </p>
            <br></br>  
        </div>

        <div className='flex justify-center' >
            <p style={{marginTop:20}}>
                <b style={{ fontSize: "20px"}}>All 1st Years | All 2nd Years</b> <br />
            </p>
        </div>

        <div className='flex justify-center'>
            <a href='/'>
                <button style={{marginTop:25,width:200, height:50,borderRadius:10,background:"black",color:'white'}}>
                    Get full instructions
                </button>
            </a>
        </div>
                              
    </div>
  )
}

export default Rules