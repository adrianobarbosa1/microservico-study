import { Flex, Avatar } from "@chakra-ui/react"
import ButtonPost from "./ButtonPost"

const CardPostCreate = () => {
  return (
    <Flex boxShadow="md" p="1rem" rounded="md" bg="white" borderRadius="md">
      <Avatar src="https://bit.ly/sage-adebayo" />
      <ButtonPost />
    </Flex>
  )
}

export default CardPostCreate
