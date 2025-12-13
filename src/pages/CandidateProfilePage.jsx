import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';
import { fetchProfile } from '../store/profileSlice';
import { ProfileCard, DetailedResume } from '../components/profile';

const CandidateProfilePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { profile, loading, error } = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (id) {
      dispatch(fetchProfile(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="hira-profile-page">
        <div className="hira-profile-loading">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hira-profile-page">
        <div className="hira-profile-error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="hira-profile-page">
      {/* Header */}
      <div className="hira-profile-header">
        <div className="hira-profile-header-left">
          <h1>Profile Information</h1>
          <p>Candidate details and resume</p>
        </div>
        <button className="hira-view-analytics-btn">
          <span>View</span>
          <span>Analytics</span>
        </button>
      </div>

      {/* Profile Card */}
      <ProfileCard profile={profile} />

      {/* Detailed Resume */}
      <DetailedResume profile={profile} />
    </div>
  );
};

export default CandidateProfilePage;
