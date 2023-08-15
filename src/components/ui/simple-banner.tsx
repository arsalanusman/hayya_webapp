import Image from 'next/image'
import bannerImg from '../../../public/expo-img/AFC_banner.jpeg';

const SimpleBanner = () => {
  return (
    <div className="simple-banner">
        <Image src={bannerImg} className='w-full h-full' alt="banner" />
    </div>
  )
}

export default SimpleBanner