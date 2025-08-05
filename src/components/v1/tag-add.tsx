'use client'
import Modal from "./modal"
import { useState, useRef } from "react"


type Tags = {
  id: string
  tag: string[]
  createdAt?: string
}

export default function TagAdd() {
  const [ open, setOpen ] = useState( false )
  const [Tags, setTags] = useState<Tags>()

  // const Tags: Array<Tags> = []

  const InputRef = useRef<HTMLInputElement>( null )

  const handleClick = () => {
  //  if (!InputRef.current) return
  const rawValue = InputRef.current?.value || ""

  const newTags = rawValue
    .split(",")
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)

  const OTags: Tags = { id: String(Date.now()), tag: newTags, createdAt: "2025AGO05" }

  setTags(OTags)
  console.log(OTags)
  }


  return (
      <section className="w-full min-h-12 text-center bg-cyan-400">
        <input
          className="w-12 rounded-b-full font-bold text-3xl bg-gray-400 shadow shadow-cyan-700 hover:bg-orange-400 hover:cursor-pointer"
          type="button"
          value="+"
          onClick={() => setOpen(true)}
      />
      <span className="flex flex-col gap-y-4">{Tags?.tag}</span>
      <Modal isOpen={open} onClose={()=> setOpen(false)} title="new Tag">
        <div className="space-y-4">
          <label htmlFor="tags">
            <input type="text" className="border-2 border-orange-600 pl-3 mr-2 rounded-lg" ref={InputRef} />
          </label>
          <button
          className="border-2 border-orange-500 rounded-2xl px-2 py-0 bg-orange-400 hover:bg-orange-500 hover:cursor-pointer"
            onClick={ handleClick }>
            add
          </button>
        </div>
      </Modal>
      </section>
  )
}
