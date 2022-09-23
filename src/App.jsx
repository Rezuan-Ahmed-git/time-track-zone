import { useState } from 'react';
import { generate } from 'shortid';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';

const LOCAL_CLOCK_INIT = {
  title: 'My Clock',
  timezone: '',
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  //state lifting to update the local clock
  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  //state lifting to create single clock
  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  //state lifting to update the single clock
  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;
      return clock;
    });
    setClocks(updatedClocks);
  };

  //to delete a single clock
  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />

      <ClockList
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
        localClock={localClock.date}
      />
    </div>
  );
}

export default App;
