import LabelTag from '@/components/label/labeltag'
import StatusTag from '@/components/status/statustag'
import { formatDate } from '@/util/format'
import Link from 'next/link'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
const IssuePage = (props) => {
  const {
    title,
    user: { login: author },
    created_at,
    labels,
    number,
    body,
    state,
  } = props.data
  const { owner, name } = props.params

  return (
    <>
      <header>
        <Link href={`/issues/${owner}/${name}`}>
          <div className="flex group cursor-pointer w-fit text-lg">
            <div className="group-hover:-translate-x-2 transition-all">
              &#11164;
            </div>
            <div className="group-hover:underline mx-2">Go Back</div>
          </div>
        </Link>
        <div className="text-3xl my-2">
          {title}
          <span className="text-neutral-400">{` #${number}`}</span>
        </div>
        <div className="text-neutral-400 my-2">{`${author} - ${formatDate(
          created_at
        )}`}</div>
        <div className="flex gap-2 my-2">
          <StatusTag status={state} />
          <div className="flex mx-3">
            {labels?.map((label, index) => (
              <LabelTag key={index} name={label.name} color={label.color} />
            ))}
          </div>
        </div>
      </header>
      <hr className="my-5 border border-neutral-400" />
      <main className="w-11/12 m-auto ">
        <div className="text-lg font-semibold bg-slate-800 py-2 px-5 rounded-lg">
          {author}
        </div>
        <div className="p-5 border border-neutral-500 border-1 border-t-0 rounded-b-lg">
          <Markdown
            className="markdown prose-blue prose prose-invert"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {body}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { params } = context
  const { owner, name, id } = params
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${name}/issues/${id}`
  )
  const data = await response.json()
  return {
    props: {
      data,
      params,
    },
  }
}

export default IssuePage
