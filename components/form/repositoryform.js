import { useRouter } from 'next/router'
import { useState } from 'react'

const RepositoryForm = () => {
  const router = useRouter()
  const [repository, setRepository] = useState({ owner: '', name: '' })

  const handleClick = () => {
    const { owner, name } = repository
    router.push(`/issues/${owner}/${name}`)
  }
  return (
    <div className="w-full">
      <div className="w-1/3 m-auto bg-slate-900 p-10 rounded-lg">
        <div className="text-2xl font-bold text-center">Github Issues</div>
        <div className="my-4 w">
          <div>Repository Owner:</div>
          <input
            className="rounded-lg bg-slate-700 text-white my-2 w-full py-2 px-3"
            type="text"
            value={repository.owner}
            onChange={(e) =>
              setRepository({ ...repository, owner: e.target.value })
            }
          />
        </div>
        <div className="my-4">
          <div>Repository Name:</div>
          <input
            className="rounded-lg bg-slate-700 text-white my-2 w-full py-2 px-3"
            type="text"
            value={repository.name}
            onChange={(e) =>
              setRepository({ ...repository, name: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-green-700 text-white px-3 py-1 rounded-lg w-full my-2"
        >
          Find Repository
        </button>
      </div>
    </div>
  )
}

export default RepositoryForm
