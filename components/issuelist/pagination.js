import { useRouter } from 'next/router'

const Pagination = ({ page, hasNext, hasPrev, setPage }) => {
  const router = useRouter()

  const handlePageChange = (newPage) => {
    setPage(newPage)
    if (newPage > page && hasNext) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      })
    } else if (newPage < page && hasPrev) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      })
    }
  }

  return (
    <div className="w-3/12 flex text-lg mb-10">
      <div className="flex gap-10 w-full justify-between p-5">
        <div
          className={`flex group cursor-pointer w-fit text-lg ${
            hasPrev ? '' : 'text-neutral-500'
          }`}
        >
          <div
            className={`${
              hasPrev ? 'group-hover:-translate-x-2' : ''
            } transition-all`}
          >
            &#11164;
          </div>
          <button
            className={`mx-2 ${
              hasPrev ? 'hover:underline hover:text-blue-500' : ''
            }
            `}
            disabled={!hasPrev}
            onClick={() => {
              handlePageChange(page - 1)
            }}
          >
            Previous
          </button>
        </div>
        <div className="flex group cursor-pointer w-fit text-lg ">
          <button
            className={`mx-2 ${
              hasNext ? 'hover:underline hover:text-blue-500' : ''
            }
            `}
            disabled={!hasNext}
            onClick={() => {
              handlePageChange(page + 1)
            }}
          >
            Next
          </button>{' '}
          <div
            className={`${
              hasPrev ? 'group-hover:translate-x-2' : ''
            } transition-all`}
          >
            &#11166;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
