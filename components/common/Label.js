const Label = ({name}) => {
  return(
    <div className="px-6 py-4">
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{name}
      </div>
    </div>
  )
}

export default Label