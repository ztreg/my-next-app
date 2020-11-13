import React, { useState } from 'react'
import { StyledImageList } from '../styles/styledComponents'
import ImageItem from './ImageItem'


export default function Imagelist(props) {

  return (
    <StyledImageList>
      {props.imageList && (
        props.imageList.map((item, index) => {
         return(
           <ImageItem key={index} item={item} idToFetch={index}/>
         ) 
        })
      )}
    </StyledImageList>
  )
}

