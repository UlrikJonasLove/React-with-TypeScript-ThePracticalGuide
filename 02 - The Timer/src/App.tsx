import { useRef } from "react";
import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import Input from "./components/UI/Input";
import Form, { formHandle } from "./components/UI/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<formHandle>(null)
  function handleSave(data: unknown) { // the extracted values will always be a string
    const extractedData = data as {name: string, age: string}; // here we know what type we use
    console.log(extractedData);
    customFormRef.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customFormRef}>
        <Input label="Test" id="test" ref={input}/>
        <Input id="name" label="Your name" type="test" />
        <Input id="age" label="Your age" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
      
      <p>
        <Container as={Button} el="button" type="button">Click me</Container>
      </p>
      <p>
        <Container as={Button} el="anchor">Link</Container>
      </p>
    </main>
  )
}

export default App;
