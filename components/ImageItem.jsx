import Link from 'next/link';
import React from 'react'
import { LinkToButton, StyledImageBackground, StyledImageListItem, StyledPrimaryButton } from '../styles/styledComponents';

export default function ImageItem(props) {
  return (
    <>
      {console.log(props.item)}
      {props.item && (
         <StyledImageListItem>
          <StyledImageBackground image={props.item.imageURL}></StyledImageBackground>
          <h5>{props.item.title}</h5>
          <p>{props.item.description}</p>
          <StyledPrimaryButton>Likes: {props.item.likes}</StyledPrimaryButton>
          <LinkToButton><Link href={`images/${props.idToFetch}`}>Check it out</Link></LinkToButton>
        </StyledImageListItem>
      )}
    </>
  )
}
