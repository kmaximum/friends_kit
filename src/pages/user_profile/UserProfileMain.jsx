import { useRef } from 'react';

import { profileProps } from '..';
import ProfileMenu from '@/components/ProfileMenu';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileSubHeader from '@/components/ProfileSubHeader';
import BannerUploadModal, { UploadFromPcModal } from '@/components/modals/banner_modals';

const UserProfileMain = ({ children }) => {
  const dialogTrigger = useRef();
  const dialogClose = useRef();
  const pcUploadTrigger = useRef();

  const triggerModal = () => {
    dialogTrigger.current.click();
  };

  const triggerPcUpload = () => {
    pcUploadTrigger.current.click();
    dialogClose.current.click();
  };

  return (
    <div {...profileProps}>
      <ProfileHeader triggerModal={triggerModal} />
      <ProfileMenu />
      <ProfileSubHeader />

      {/* modals */}
      <BannerUploadModal
        dialogTrigger={dialogTrigger}
        dialogClose={dialogClose}
        triggerPcUpload={triggerPcUpload}
      />
      <UploadFromPcModal pcUploadTrigger={pcUploadTrigger} />
      {children}
    </div>
  );
};

export default UserProfileMain;
