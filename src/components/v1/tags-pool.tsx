'use client'
import { useEffect,useState } from "react"
import { getTags } from '../../server/actions.ts'
import type { Tags } from "../../types/define"

export default function TagsPool() {
  const [ Tags, setTags ] = useState<Tags[] | undefined>( [] )

  useEffect( () => {
    async function getAllTags() {
      const rawTags = await getTags()
      const allTags: Tags[] | undefined = rawTags?.map(tag => ({
        ...tag,
        content: tag.content === null ? undefined : tag.content,
        links: tag.link === null ? undefined : tag.link, // if your interface uses 'links'
        createdAt: tag.createdAt?.toString(),
        updatedAt: tag.updatedAt?.toString(),
      }))
      setTags(allTags)
    }
    getAllTags()
},[])

  return (
    <section className="w-full h-72 bg-cyan-400">
      {/* <h1 className="w-full py-4 text-center bg-cyan-400">tags-pool</h1> */}
      <article className="w-full pl-3 flex gap-x-1">
        { Tags?.map( (item,index) => (
          <span key={index}>{item.content}</span>
        ))}
      </article>
    </section>
  )
}
