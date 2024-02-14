import { useRouter } from 'next/router'

const FilterOptions = ({ setStatusFilter, name, state, setPage }) => {
  const router = useRouter()

  const handleStatusFilter = () => {
    setStatusFilter(state)
    setPage(1)
    router.push({
      pathname: router.pathname,
      query: { ...router.query, state: state, page: '1' },
    })
  }
  return (
    <div
      className="px-3 py-2 w-full hover:bg-slate-700 cursor-pointer"
      onClick={handleStatusFilter}
    >
      {name}
    </div>
  )
}

export default FilterOptions
