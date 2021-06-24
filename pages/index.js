import Head from 'next/head'
import { Center, Heading, Text, PinInput, PinInputField, HStack, Button, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import { useState } from 'react'

export default function Home() {
  let [verifying, setVerifying] = useState(false)
  let startVerifying = () => setVerifying(true)

  return (
    <Center w="100vw" h="100vh" style={{ flexDirection: 'column' }}>
      <Heading style={{ marginBottom: '5px' }}>Verify yourself</Heading>
      <Text>We sent a code to your phone</Text>
      <br />
      <HStack spacing="8px">
          <PinInput otp type="alphanumeric" onComplete={startVerifying} isDisabled={verifying}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
      </HStack>
      <br />
      <Button isverifying={verifying} loadingText="Verifying" colorScheme="teal" onClick={startVerifying}>Verify</Button>
    </Center>
  )
}
