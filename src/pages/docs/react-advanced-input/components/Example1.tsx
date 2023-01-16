import type React from "react";
import { useRef } from "react";
import Input, { useSyncedInput } from 'react-advanced-input';
import { ExampleCard } from "../../../../components/global/ExampleCard/ExampleCard";

const uncontrolledInputCode =
`<label htmlFor="target">Example</label>
<Input type="text" id="target" name="example" placeholder="Enter some text" />`

const uncontrolledSyncedInputsCode =
`const Example = () => {
  const secondaryRef = useRef<HTMLInputElement | null>(null);

  const { onPrimaryInputChange, onSecondaryInputChange } = useSyncedInput({
    setSecondaryValue: (v) => {
      if (secondaryRef.current) {
        secondaryRef.current.value = v.toUpperCase();
      }
    }
  });

  return (
    <>
      <div>
        <Input
          type="text"
          name="primary"
          placeholder="primary"
          onChange={onPrimaryInputChange}
        />
      </div>
      <div>
        <Input
          ref={secondaryRef}
          type="text"
          name="secondary"
          placeholder="secondary"
          onChange={onSecondaryInputChange}
        />
      </div>
    </>
  );
}`

export const Example1: React.FC = () => {
  const secondaryRef = useRef<HTMLInputElement | null>(null);

  const { onPrimaryInputChange, onSecondaryInputChange } = useSyncedInput({
    setSecondaryValue: (v) => {
      if (secondaryRef.current) {
        secondaryRef.current.value = v.toUpperCase();
      }
    }
  });

  return (
    <>
      <ExampleCard className="mb-4" title="Text Input" code={uncontrolledInputCode}>
        <label htmlFor="target">Example</label>
        <Input type="text" id="target" name="example" placeholder="Enter some text" />
      </ExampleCard>
      <ExampleCard title="Uncontrolled Synced Inputs" code={uncontrolledSyncedInputsCode}>
        <div>
          <Input type="text" name="primary" placeholder="primary" onChange={onPrimaryInputChange} />
        </div>
        <div>
          <Input ref={secondaryRef} type="text" name="secondary" placeholder="secondary" onChange={onSecondaryInputChange} />
        </div>
      </ExampleCard>
    </>
  );
}