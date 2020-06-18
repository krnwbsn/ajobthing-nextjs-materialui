import services from '../../../configs/services';
import axios from 'axios';

export const getDataById = async (id) => {
  try {
    const response = await axios.get(`${services.GET_JOB_BY_ID(id)}`);
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
