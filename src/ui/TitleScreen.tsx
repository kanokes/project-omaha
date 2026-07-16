import { useAppStore } from '../app/store';

export function TitleScreen() {
  const navigate = useAppStore((state) => state.navigate);
  return (
    <section className="title-screen">
      <p className="eyebrow">College baseball, built from the dirt up</p>
      <h1>Project Omaha</h1>
      <p className="subtitle">Step behind the pitcher and find your swing.</p>
      <button onClick={() => navigate('batting')}>Enter Batting Sandbox</button>
    </section>
  );
}
