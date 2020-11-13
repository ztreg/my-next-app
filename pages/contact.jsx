import React, { useStatem, useEffect, useState } from 'react'


function fetchImageList( ) {
  const url = 'https://image-mock-data.firebaseio.com/images.json'
  return fetch(url)
}

export default function contact(props) {
  const [message, setMessage ] = useState('Hello')

  return (
    <div>
      <h1>Contact Page {message}</h1>
      {console.log('contact page')}


      {props.imageList && (
        props.imageList.map((item, index) => {
          return(
            <div key={index}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          )
        })
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const data = await fetchImageList()
  const imagelist = await data.json()
  return{
    props: {
      imageList: imagelist
    }
  }
}
