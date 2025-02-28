import { Blockquote,Kbd,AlertDialog,Flex,Button } from "@radix-ui/themes";
import "./assets/styles/main.css"
function App() {
  return (
   <>
    <Blockquote>
	    Perfect typography is certainly the most elusive of all arts. Sculpture in
	    stone alone comes near it in obstinacy.
    </Blockquote>
    <Kbd size="4">ctrl + c</Kbd>
    <Kbd size="4">ctrl + v</Kbd>
        <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Revoke access</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Revoke access</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This application will no longer be accessible and any
          existing sessions will be expired.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              Revoke access
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
   </>
  )
}

export default App
