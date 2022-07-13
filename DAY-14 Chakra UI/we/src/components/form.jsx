import { Box, Button, Heading, Input, Menu, MenuButton, MenuItem, MenuList, PinInput, PinInputField, Select, Stack, Text } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  // create a FORM based on the output shown
  // explore the docs
  // Box, PinInput, Input, Select, Menu, Button
  function Form() {
    const [loading, setLoading] = useState(false);
    const [otp, setOTP] = useState("");
    return (
      <Box>
        <Heading>Form</Heading>
        <Stack direction="column" gap="0.5rem">
          <Box>
            <Input type="email" placeholder="email" />
          </Box>
          <Box>
            <Input type="password" placeholder="password" />
          </Box>
          <Box>
            <PinInput value={otp} onChange={(value) => setOTP(value)} otp>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </Box>
          <Box>
            <Text>{otp} </Text>
          </Box>
          <Box>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Button
              bg="brand.900"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 2000);
              }}
              isLoading={loading}
            >
              {" "}
              SIGN UP{" "}
            </Button>
          </Box>
        </Stack>
      </Box>
    );
  }
  
  export default Form;
  