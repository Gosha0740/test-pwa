"use client"

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <Button onClick={() => alert('Hello')}>Button 1 </Button>
    </div>
  )
}

