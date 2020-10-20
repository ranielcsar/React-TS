import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;
  border-radius: var(--border-radius);
  border: 0.5px solid var(--black);
  background: transparent;
  position: relative;
`

type ImgProps = {
  image?: string
}

export const ImageContainer = styled.section<ImgProps>`
  background: var(--gray) url(${(props) => (props ? props.image : '')})
    no-repeat center;
  background-size: cover;
  height: 100%;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
`

export const Footer = styled.footer`
  background: linear-gradient(to bottom, transparent, #292929);
  color: var(--white);
  width: 100%;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 0 0.625rem;
  z-index: 1;
  position: absolute;
  bottom: 0;
`

export const Name = styled.p``
