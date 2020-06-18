import services from '../../../configs/services';
import axios from 'axios';

export const getData = async () => {
  try {
    const response = await axios.get(`${services.GET_JOB_LIST}`);
    const data = response.data.map((item) => ({
      ...item,
    }));

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteData = async (id) => {
  try {
    const data = await axios.delete(`${services.REMOVE_JOB(id)}`);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
