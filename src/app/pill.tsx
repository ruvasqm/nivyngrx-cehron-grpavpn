import React from 'react'

const pill = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full w-fit border py-1 px-3 border-utility-brand text-utility-brand text-sm font-medium">
      <span>{text}</span>
    </div>
  )
}

export default pill
