import TableItem from './item'

const IssueGrid = ({ data, owner, name }) => {
  return (
    <ul>
      {data?.map((issue, index) => (
        <TableItem
          key={index}
          title={issue.title}
          id={issue.number}
          author={issue.user.login}
          dateinfo={issue.created_at}
          status={issue.state}
          labels={issue.labels}
          owner={owner}
          name={name}
        />
      ))}
    </ul>
  )
}

export default IssueGrid
