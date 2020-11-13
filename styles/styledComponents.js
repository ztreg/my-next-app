import styled from 'styled-components'

export const StyledImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 30px;
 
` 

export const StyledImageListItem = styled.div`
height: 600px;
 padding: 10px;
  img {
    max-width: 400px;
    max-height: 300px;
  }
`

export const StyledMainContainer = styled.div`
  padding: 10px;
`

export const StyledSingleImage = styled.div`

`

export const StyledImageBackground = styled.div`  
  width: 100%;
  height: 250px;
  background:url(${({image}) => (image)}) no-repeat;
  background-size: contain;
`

export const StyledNav = styled.div`
  background-color: black;
  color: white;
  padding: 40px;
  font-size: 1.3em;
`

export const StyledPrimaryButton = styled.button`
color: white;
padding: 10px;
font-size: 1.3em;
background-color: blue;
border-radius: 14%;
`
export const LinkToButton = styled(StyledPrimaryButton)`
  background-color: darkred;
`