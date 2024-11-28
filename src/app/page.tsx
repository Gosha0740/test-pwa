"use client"

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <Button onClick={() => MSG()}>Button - 2</Button>
    </div>
  )
}

function MSG() {
  alert('Hello')
}