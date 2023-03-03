import api from '../utils/api';

export default function useAuth() {
  const checkUserValidity = async email => {
    try {
      const res = await api.get(`/v1/sda/user/${email}`);
      console.log('useFileSelector', res);
      return res.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return {checkUserValidity};
}
