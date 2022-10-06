import React from 'react'

function Home({data}) {
  console.log(data)
  const gymPics=data.map((everypic)=>(
    <>
    <div className='imageCard' >
      
       <img src={everypic.image_url} alt=""></img>
        <h1>Package:{everypic.package}</h1>
        <h3>Type:{everypic.type}</h3>
        <h3> Trainer: <span style={{color:"red"}}>{everypic.trainer}</span></h3>
        <p>{everypic.description}</p>
      </div>
      </>
    
  ))
  return (
    <div className='images'>
      {gymPics}
    </div>
  )
}

export default Home
