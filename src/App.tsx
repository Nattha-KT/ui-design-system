import './App.css';
import { Button } from './components';

function App() {
  return (
    <>
      <Button size="lg" variant="primary" disabled>
        M default{' '}
        <img
          className="animate-spin-slow"
          src="../public/icons/loading-circle-white.svg"
          alt="spinloading"
        />
      </Button>
    </>
  );
}

export default App;
