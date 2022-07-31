import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material';





export const Basic = () => {
    const [count, setCount] = useState(5);

    return (
      <div>
        <p>You clicked {count} times</p>
        <Button onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
  )
}

