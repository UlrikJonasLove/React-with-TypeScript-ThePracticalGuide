import { useRef } from 'react';

import Button from './UI/Button.tsx';
import Form, { formHandle } from './UI/Form.tsx';
import Input from './UI/Input.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function AddTimer() {
  const form = useRef<formHandle>(null);
  const {addTimer} = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    addTimer({name: extractedData.name, duration: +extractedData.duration});
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button el="button">Add Timer</Button>
      </p>
    </Form>
  );
}