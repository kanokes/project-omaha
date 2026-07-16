import { BattingSandbox } from '../ui/BattingSandbox';
import { TitleScreen } from '../ui/TitleScreen';
import { useAppStore } from './store';

export function App() {
  const screen = useAppStore((state) => state.screen);
  return (
    <main className="app-shell">
      {screen === 'title' ? <TitleScreen /> : <BattingSandbox />}
    </main>
  );
}
