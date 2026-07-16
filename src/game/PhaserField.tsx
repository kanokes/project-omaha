import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { FieldScene } from './scenes/FieldScene';

export function PhaserField() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!host.current) return;
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: host.current,
      width: 1280,
      height: 720,
      backgroundColor: '#183f2c',
      scene: FieldScene,
      scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    });
    return () => game.destroy(true);
  }, []);
  return (
    <div
      className="field-frame"
      ref={host}
      role="img"
      aria-label="Placeholder baseball field viewed from behind the pitcher"
    />
  );
}
