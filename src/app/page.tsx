"use client"

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <Button onClick={() => MSG()}>Button</Button>
    </div>
  )
}

function MSG() {
  alert('Hello')
}