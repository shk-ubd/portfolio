import React from 'react'

export default function SectionHeading({
    text
}:{text: string}) {
  return (
    <h2 className='text-3xl text-center font-medium capitalize mb-8'>{text}</h2>
  )
}
