import { CogIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Button } from './components';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './libs';

function App() {
  const [toggleButton, setToggleButton] = useState<boolean>(false);
  return (
    <main className="mx-auto flex h-[100vh] items-center justify-center gap-4">
      <TooltipProvider>
        <Tooltip open={false}>
          <TooltipTrigger>
            <Button
              loading={toggleButton}
              onClick={() => setToggleButton((item) => !item)}
              size="md"
              variant="primary"
            >
              Click Me
              {!toggleButton && <CogIcon className="w-5" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            sideOffset={0}
            className="relative left-[7rem] border-none bg-marble-700 text-sm font-normal text-white"
          >
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </main>
  );
}

export default App;
