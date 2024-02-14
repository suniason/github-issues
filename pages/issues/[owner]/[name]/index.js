import RepositoryNotFound from '@/components/extras/notfound/repository'
import StatusFilter from '@/components/issuelist/filter/filter'
import Pagination from '@/components/issuelist/pagination'
import IssueGrid from '@/components/issuelist/table'
import { useState } from 'react'

const IssuesPages = (props) => {
  const { data, params, query, hasNext, hasPrev } = props
  const { owner, name } = params
  const { state, page } = query
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1)
  const [statusFilter, setStatusFilter] = useState(state || 'open')

  if (data?.message === 'Not Found' || !data) {
    return <RepositoryNotFound />
  }

  return (
    <div>
      <div>
        <div className="text-3xl font-bold">{name}</div>
        <div className="text-xl text-neutral-400  font-semibold">
          by {owner}
        </div>
      </div>
      <StatusFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        setPage={setCurrentPage}
      />
      <IssueGrid data={data} owner={owner} name={name} />
      <Pagination
        setPage={setCurrentPage}
        page={currentPage}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { params, query } = context
  const { owner, name } = params
  const { state, page } = query
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${name}/issues?state=${
      state || 'open'
    }&page=${page || 1}`
  )
  const data = await response.json()

  const linkHeader = response.headers.get('Link')
  const hasNext = linkHeader && linkHeader.includes('rel="next"')
  const hasPrev = linkHeader && linkHeader.includes('rel="prev"')
  return {
    props: {
      data,
      params,
      query,
      hasNext,
      hasPrev,
    },
  }
}

export default IssuesPages
