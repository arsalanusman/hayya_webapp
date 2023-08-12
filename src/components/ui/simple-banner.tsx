import Image from 'next/image'
import bannerImg from '../../../public/img/banner.jpg';

const SimpleBanner = () => {
  return (
    <div className="simple-banner">
        <Image src={bannerImg} className='w-full h-full' alt="banner" />
    </div>
  )
}

export default SimpleBanner