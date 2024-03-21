import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignupCard from '../../common/SignupCard';
import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import ProfileUploadContent from '../stepsComponents/ProfileUploadContent';
import { useEffect } from 'react';
import { stepsInfo } from '.';

const ProfileUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProgress(50));
  }, []);
  const prev = () => navigate('/signup/info');
  const next = () => navigate('/signup/auth');

  const cardProps = { prev, next };
  const profileProps = stepsInfo.profileUpload;
  return (
    <SignupWrapper {...profileProps}>
      <SignupCard {...cardProps}>
        <ProfileUploadContent />
      </SignupCard>
    </SignupWrapper>
  );
};

export default ProfileUpload;
