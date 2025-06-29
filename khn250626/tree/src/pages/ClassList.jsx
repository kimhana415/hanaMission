import React, { useState } from 'react'

export default function ClassList({ tree, level = 0 }) {
  const [open, setOpen] = useState(false);

  if (!tree) return;

  return (
    <div style={{
      marginLeft: level * 12,
      paddingLeft: 8,
      marginBottom: 8,
      marginTop: 4,
      borderLeft: level > 0 ? '1px solid #ccc' : 'none'
    }}>

      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        {tree.title}
      </div>

      {
        open && tree.children.map((child, i) => (
          <ClassList
            key={i}
            tree={child}
            level={level + 1}
          />
        ))
      }
    </div>
  )
}
