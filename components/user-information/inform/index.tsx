import WestIcon from '@mui/icons-material/West';
import StackInform from './StackInform';
import StackInformTwo from './StackInformTwo';

const InformDivision = () => {
  return (
      <div className="w-[95%] bg-white rounded-2xl h-[90vh]">
          <span>
              مدیریت کاربران
          </span>
          <WestIcon />
          <span>
              اطلاعات کاربران
          </span>
          <StackInform />
          <StackInformTwo />
    </div>
  )
}

export default InformDivision