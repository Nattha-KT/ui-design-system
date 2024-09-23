import { CogIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import './App.css';
import { Button } from './components';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './libs';

function App() {
  const [toggleButton, setToggleButton] = useState<boolean>(false);
  return (
    <main className="mx-auto flex h-[100vh] items-center justify-center">
      <TooltipProvider>
        <Tooltip open={false}>
          <TooltipTrigger>
            <Button
              icon={'right'}
              loading={toggleButton}
              onClick={() => setToggleButton((item) => !item)}
              size="md"
              variant="primary"
              useIcon={<CogIcon className="w-5" />}
            >
              Click Me
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
    </main>
  );
}

export default App;
