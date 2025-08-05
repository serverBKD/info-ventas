'use client'
import TagAdd from "@/components/v1/tag-add"
import TagsPool from "../components/v1/tags-pool"

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center mt-8">
      <h1>infoVentas</h1>
      <TagAdd/>
      <TagsPool/>
    </section>
  )
}
