import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";

function App() {
  const { clock: local } = useClock();
  const { clock: est } = useClock('EST');
  const { clock: pst } = useClock('PST');
  const { clock: edt } = useClock('EDT');
  const { clock: british } = useClock('BST');
  const { clock: pakistan } = useClock('UTC', 5 * 60);

  console.log('Local: ', local.date);
  console.log('est: ', est.date);
  console.log('pst: ', pst.date);
  console.log('edt: ', edt.date);
  console.log('british: ', british.date);
  console.log('pakistan: ', pakistan.date);

  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  );
}

export default App;
