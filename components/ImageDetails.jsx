import React from 'react'
import { StyledPrimaryButton } from '../styles/styledComponents'

export default function ImageDetails(props) {
  return (
    <div>
      {props.imageDetails && (
        <>
        <h4>{props.imageDetails.title}</h4>
        <img src={props.imageDetails.imageURL} alt="" />
        <p>{props.imageDetails.description}</p>
        <p>changes</p>
        <StyledPrimaryButton>{props.imageDetails.likes} Likes</StyledPrimaryButton>
      </>
      )}
    </div>
  )
}
