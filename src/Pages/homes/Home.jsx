import React from 'react'

export const Home = ({ items }) => {
  return (
    <>
        <div className='homeContainer'>
          {Items.map((item)=> (
            <HomeCard key={item.id} item={item} />
          ))}
        </div>

    </>
  )
}
