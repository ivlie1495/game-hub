import { Link } from 'react-router-dom'
import { Box, HStack, Image } from '@chakra-ui/react'

import logo from '@assets/logo.webp'

import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <HStack padding={5}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Box flex={1}>
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
