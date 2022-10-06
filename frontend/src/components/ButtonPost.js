import {
  Flex,
  Box,
  Button,
  Text,
  Input,
  Modal,
  Avatar,
  Divider,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import PostCreate from "./PostCreate"

const ButtonPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        as="button"
        onClick={onOpen}
        borderTopRadius="20px"
        borderBottomRadius="20px"
        p="1rem"
        minW="400px"
        ml="1rem"
        color="#65676b"
        bg="#e4e6e9"
        _hover={{
          filter: "auto",
          brightness: "0.9",
        }}
      >
        No que você está pensando?
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Criar publicação</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Flex align="center">
              <Avatar src="https://bit.ly/sage-adebayo" />
              <Text ml="1rem">Adriano Barbosa</Text>
            </Flex>
            <PostCreate />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ButtonPost
