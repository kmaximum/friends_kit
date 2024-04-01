import jenna from '@/assets/images/jenna.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons';
import banner from '@/assets/images/default-profile-banner.png';

const UserProfileMinimal = () => {
  return (
    <>
      <header>
        <section
          className='mt-1 banner profile-cover h-[300px] bg-cover bg-center'
          style={{
            backgroundImage: `url(${banner})`,
            // backgroundPositionY: 'center'
          }}></section>
      </header>
      <div className='max-w-[1040px] mx-auto'>
        <div className='relative user-details'>
          <div className='user-info flex items-end  mt-5'>
            <div className='left min-w-[30%] min-h-[100%] px-5 flex-shrink-0'>
              <div className='user-avatar flex flex-col items-center'>
                <div className='absolute -top-1/2  border-[5px] border-[#f4f4f4] *:rounded-full rounded-full'>
                  <img
                    src={jenna}
                    className='h-[130px] w-[130px]'
                    alt='user-profile-pic'
                  />
                </div>
                <button className='inline-flex-center border border-gray-300 p-2 w-full font-medium gap-1 rounded-md hover:border-gray-400'>
                  <FontAwesomeIcon icon={faCamera} />
                  Update cover
                </button>
              </div>
            </div>
            <div className='right ps-5 w-full'>
              <div className='user'>
                <div className='head w-full flex items-center justify-between'>
                  <h1 className='user-name text-[1.4rem]'>Jenna Davis</h1>
                  <button className='min-w-32 bg-green-500 text-white p-2 rounded-md hover:bg-green-400'>
                    Follow
                  </button>
                </div>
                <div className='stats py-4 *:pr-8 *:text-sm *:text-gray-500'>
                  <span id='posts'>174 posts</span>
                  <span id='followers'>12k followers</span>
                  <span id='following'>104 following </span>
                </div>
                <div className='bio text-sm max-w-[480px]'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam enim
                    adesse poterit. Quis est tam dissimile homini. At ille pellit, qui
                    permulcet sensum voluptate. Vide, quaeso, rectumne sit. Primum quid tu
                    dicis breve?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='profile-grid'></div>
    </>
  );
};

export default UserProfileMinimal;
