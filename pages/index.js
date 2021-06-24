import Head from 'next/head'
import { Center, Heading, Text, PinInput, PinInputField, HStack, Button } from "@chakra-ui/react"
import { useState } from 'react'

export default function Home() {
  let [loading, setLoading] = useState(false)
  let startLoader = () => setLoading(true)

  return (
      <Center w="100vw" h="100vh" style={{flexDirection: 'column'}}>
          <Heading style={{marginBottom: '5px'}}>Verify yourself</Heading>
          <Text>We sent a code to your phone</Text>
          <br />
          <HStack spacing="8px">
            <PinInput otp type="alphanumeric" onComplete={startLoader} isDisabled={loading}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
          </HStack>
          <br />
          <Button isLoading={loading} loadingText="Verifying" colorScheme="teal" onClick={startLoader}>Verify</Button>
      </Center>
  )
}
