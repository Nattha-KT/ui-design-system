import { CogIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import './App.css';
import { Button } from './components';

function App() {
  const [toggleButton, setToggleButton] = useState<boolean>(false);
  return (
    <main className="mx-auto flex h-[100vh] items-center justify-center">
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
    </main>
  );
}

export default App;
