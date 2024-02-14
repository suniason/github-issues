import FilterOptions from './options'

const StatusFilter = ({ setStatusFilter, statusFilter, setPage }) => {
  const status = [
    { name: 'All', state: 'all' },
    { name: 'Open', state: 'open' },
    { name: 'Closed', state: 'closed' },
  ]

  const selectedStatus = status.find((item) => item.state === statusFilter)

  return (
    <div className="flex gap-10 my-10">
      <div className="font-semibold py-2">Filter: </div>
      <div className="relative group cursor-pointer w-52">
        <div className=" bg-slate-800 px-3 py-2 rounded-lg w-full flex justify-between">
          {selectedStatus.name}
          <div>&#11206;</div>
        </div>
        <div className="absolute hidden group-hover:flex group-hover:flex-col bg-slate-800 overflow-hidden rounded-lg w-full">
          {status.map((item, index) => (
            <FilterOptions
              key={index}
              name={item.name}
              state={item.state}
              setStatusFilter={setStatusFilter}
              setPage={setPage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatusFilter
