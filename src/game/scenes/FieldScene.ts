import Phaser from 'phaser';

export class FieldScene extends Phaser.Scene {
  constructor() {
    super('field');
  }
  create() {
    const g = this.add.graphics();
    g.fillStyle(0x2f7849).fillRect(0, 0, 1280, 720);
    g.fillStyle(0xb98a55).fillTriangle(640, 170, 165, 650, 1115, 650);
    g.fillStyle(0x2f7849).fillTriangle(640, 215, 260, 650, 1020, 650);
    g.lineStyle(6, 0xf4ead2, 0.9).strokeTriangle(640, 170, 165, 650, 1115, 650);
    g.fillStyle(0xe6d2ae).fillEllipse(640, 420, 135, 48);
    g.fillStyle(0xf7f0df).fillRect(622, 413, 36, 8);
    g.fillStyle(0xf7f0df).fillPoints(
      [
        { x: 640, y: 625 },
        { x: 616, y: 646 },
        { x: 640, y: 668 },
        { x: 664, y: 646 },
      ],
      true,
    );
    this.add.text(32, 30, 'PLACEHOLDER FIELD', {
      fontFamily: 'monospace',
      fontSize: '22px',
      color: '#f4ead2',
    });
  }
}
