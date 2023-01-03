import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Link from 'next/link';

const Articles = (props: any) => {
  return (
    <Link href='#' className='flex justify-between border-b pb-5'>
        <p className='hover:text-greenColor text-mainColor'>{props.title}</p>
        <KeyboardArrowRightOutlinedIcon />
    </Link>
  )
}

export default Articles;