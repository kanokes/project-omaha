import { useAppStore } from '../app/store';
import { PhaserField } from '../game/PhaserField';

export function BattingSandbox() {
  const navigate = useAppStore((state) => state.navigate);
  return (
    <section className="sandbox">
      <header>
        <div>
          <p className="eyebrow">Practice mode</p>
          <h1>Batting Sandbox</h1>
        </div>
        <button className="secondary" onClick={() => navigate('title')}>
          Back to Title
        </button>
      </header>
      <PhaserField />
    </section>
  );
}
