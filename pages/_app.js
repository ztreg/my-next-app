import Nav from '../components/Nav/Nav'
import '../styles/globals.css'
import { StyledMainContainer } from '../styles/styledComponents'
let test123 = 'hej'

// const [imageList, setImageList] = useState(null)



function MyApp({ Component, pageProps}) {
  
  return (
    <StyledMainContainer>
      <Nav/>
      <Component {...pageProps} />
    </StyledMainContainer>
  )
}

export default MyApp
