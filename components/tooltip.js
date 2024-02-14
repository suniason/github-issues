const Tooltip = ({ children, name }) => {
  return (
    <div className="relative w-fit group cursor-default">
      <div className="absolute -bottom-full text-xs hidden group-hover:flex bg-neutral-600 px-2 py-1 rounded-lg">
        {name}
      </div>
      {children}
    </div>
  )
}

export default Tooltip
