import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <div>
      <HStack  padding='12px'>
        <Image src={ logo } boxSize='60px'></Image>
        <SearchInput />
        <ColorModeSwitch/>
      </HStack>
    </div>
  )
}

export default NavBar
