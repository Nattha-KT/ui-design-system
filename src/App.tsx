import { CogIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Button, Input, StrengthIndicator } from './components';
import { Textarea } from './components/textarea/textarea';
import {
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './libs';

function App() {
  const [toggleButton, setToggleButton] = useState<boolean>(false);
  return (
    <main className="mx-auto flex h-[100vh] flex-col items-center justify-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              loading={toggleButton}
              onClick={() => setToggleButton((item) => !item)}
              size="md"
              variant="primary"
            >
              {/* Click Me */}
              {!toggleButton && <CogIcon className="w-5" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={0} variant={'suggest'}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Email</Label>
        <Input color="primary" type="password" placeholder="Email" />
        <Textarea placeholder="Type your message here." />
      </div>
      <div className="w-[300px]">
        <StrengthIndicator input="4sd345@542" />
      </div>
    </main>
  );
}

export default App;
