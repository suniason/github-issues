import GreenCircle from '../icon/greencircle'
import RedCircle from '../icon/redcircle'
import Tooltip from '../tooltip'

const StatusTag = ({ status }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <Tooltip name={status}>
        <div className="flex w-5 h-5">
          {status === 'open' ? <GreenCircle /> : <RedCircle />}
        </div>
      </Tooltip>
    </div>
  )
}

export default StatusTag
