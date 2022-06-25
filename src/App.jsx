import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";

function App() {

  const { date: localDate, localTimezone, localOffset } = useClock();
  console.log(localDate);

  return (
    <div>
      {
        localDate !== null && (
          <LocalClock date={localDate} timezone={localTimezone} offset={-localOffset} />
        )
      }
      <ClockList />
    </div>
  );
}

export default App;
