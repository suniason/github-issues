import Link from 'next/link'

const Back = () => {
  return (
    <div className="flex group cursor-pointer w-fit text-lg my-5">
      <div className="group-hover:-translate-x-2 transition-all">&#11164;</div>
      <Link href={'/'}>
        <div className="group-hover:underline mx-2 ">Home</div>
      </Link>
    </div>
  )
}

export default Back
