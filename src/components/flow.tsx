'use client';

import ReactFlow, { Background, Controls, Node } from 'reactflow';
import styles from '../app/page.module.css';
import 'reactflow/dist/style.css';

export default function Flow() {
  const nodes: Node[] = [
    {
      id: '1', // required
      position: { x: 0, y: 0 }, // required
      data: {},
    },
  ];

  return (
    <div className={styles.flow}>
      <ReactFlow nodes={nodes} style={{ flexGrow: 1 }}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
