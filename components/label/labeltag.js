const LabelTag = ({ name, color }) => {
  return (
    <div
      className="text-white px-3 w-fit text-xs mx-1 rounded-full"
      style={{
        backgroundColor: `#${color}aa`,
        border: `3px solid #${color}`,
      }}
    >
      {name}
    </div>
  )
}

export default LabelTag
