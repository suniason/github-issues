import { formatDate } from '@/util/format'
import StatusTag from '../status/statustag'
import { useRouter } from 'next/router'
import LabelTag from '../label/labeltag'

const TableItem = ({
  title,
  id,
  author,
  dateinfo,
  status,
  labels,
  owner,
  name,
}) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/issues/${owner}/${name}/${id}`)
  }

  return (
    <li className="grid grid-cols-12 border outline-1 border-neutral-500 hover:bg-slate-900 p-3 my-2 rounded-lg">
      <div className="">
        <StatusTag status={status} />
      </div>
      <div className="col-span-10">
        <div className="flex">
          <div
            className="font-bold hover:text-blue-500 cursor-pointer w-fit"
            onClick={handleClick}
          >
            {title}
          </div>
          <div className="flex mx-3">
            {labels?.map((label, index) => (
              <LabelTag key={index} name={label.name} color={label.color} />
            ))}
          </div>
        </div>
        <div className="text-neutral-500 text-xs">{`#${id} ${formatDate(
          dateinfo
        )} by ${author}`}</div>
      </div>
    </li>
  )
}

export default TableItem
