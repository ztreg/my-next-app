import Link from 'next/link'
import React from 'react'
import { StyledNav } from '../../styles/styledComponents'

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">Home</Link>
      <Link href="/images"> Images</Link>
    </StyledNav>
  )
}
