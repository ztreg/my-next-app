import Link from 'next/link'
import React from 'react'
import { StyledNav } from '../../styles/styledComponents'

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <Link href="/about/me"> About me</Link>
      <Link href="/images"> Images</Link>
    </StyledNav>
  )
}
