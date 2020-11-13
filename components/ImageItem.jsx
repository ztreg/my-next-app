import Link from 'next/link';
import React, { useState } from 'react'
import { LinkToButton, StyledImageBackground, StyledImageListItem, StyledPrimaryButton } from '../styles/styledComponents';

export default function ImageItem(props) {
  const [likes, setLikes] = useState(props.item.likes)
  function handleLike () {
    console.log(likes);
    props.item.likes = props.item.likes + 1
    setLikes(likes + 1)
  }
  return (
    <>
      {console.log(props.item)}
      {props.item && (
         <StyledImageListItem>
          <StyledImageBackground image={props.item.imageURL}></StyledImageBackground>
          <h5>{props.item.title}</h5>
          <p>{props.item.description}</p>
          <StyledPrimaryButton onClick={handleLike}>Likes:  👍{likes}</StyledPrimaryButton>
          <LinkToButton><Link href={`images/${props.idToFetch}`}>Check it out</Link></LinkToButton>
        </StyledImageListItem>
      )}
    </>
  )
}
