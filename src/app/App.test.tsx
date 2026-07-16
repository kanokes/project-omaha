import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';
import { useAppStore } from './store';

vi.mock('../game/PhaserField', () => ({
  PhaserField: () => <div aria-label="Placeholder baseball field" />,
}));
describe('App navigation', () => {
  beforeEach(() => useAppStore.setState({ screen: 'title' }));
  it('moves from title to batting sandbox and back', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(
      screen.getByRole('button', { name: /enter batting sandbox/i }),
    );
    expect(
      screen.getByRole('heading', { name: 'Batting Sandbox' }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /back to title/i }));
    expect(
      screen.getByRole('heading', { name: 'Project Omaha' }),
    ).toBeInTheDocument();
  });
});
