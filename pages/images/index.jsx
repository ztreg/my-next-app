import React from 'react'
import Imagelist from '../../components/Imagelist'

function fetchImageList( ) {
  const url = 'https://image-mock-data.firebaseio.com/images.json'
  return fetch(url)
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

export default function index(props) {
  return (
    <div>
      <Imagelist imageList={props.imageList}/>
    </div>
  )
}

