const RepositoryNotFound = () => {
  return (
    <div className="flex items-center justify-center py-32 rounded-lg bg-gray-900 my-10">
      <div className="text-center">
        <p className="text-5xl text-white font-bold mb-4">
          Repository Not Found
        </p>
        <p className="text-xl text-gray-400">
          The requested repository could not be found.
        </p>
      </div>
    </div>
  )
}

export default RepositoryNotFound
