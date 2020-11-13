import React from 'react'
import ImageDetails from '../../components/ImageDetails';

function fetchImageDetails(id) {
  const url = `https://image-mock-data.firebaseio.com/images/${id}.json`
  return fetch(url)
}

export default function imageid(props) {
  return (
    <div>
      <h1>Info about image {props.id}</h1>
      {props.imageDetails && (
        <ImageDetails imageDetails={props.imageDetails}/>
      )}
    </div>
  )
}

export async function getServerSideProps(nextctx){
  const data = await fetchImageDetails(nextctx.query.imageid)
  const imageDetails = await data.json()
  return {
    props: {
      imageDetails: imageDetails,
      id: nextctx.query.imageid
    }
  }
}

