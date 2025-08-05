
export default function TagsPool() {
  const TAGS = [{"tag":"uno"},{"tag": "dos"},{"tag":"tres"},{"tag": "cuatro"}]
  return (
    <section className="w-full h-72 bg-cyan-400">
      {/* <h1 className="w-full py-4 text-center bg-cyan-400">tags-pool</h1> */}
      <article className="w-full pl-3 flex gap-x-1">
        { TAGS.map( (item,index) => (
          <span key={index}>{item.tag}</span>
        ))}
      </article>
    </section>
  )
}
