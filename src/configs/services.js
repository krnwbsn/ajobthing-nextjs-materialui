const API_URL = 'http://private-27298f-frontendtestmaukerja.apiary-mock.com';

const services = {
  GET_JOB_LIST: `${API_URL}/jobs`,
  CREATE_JOB_LIST: `${API_URL}/jobs`,
  GET_JOB_BY_ID: (id) => `${API_URL}/job/${id}`,
  UPDATE_JOB_BY_ID: (id) => `${API_URL}/job/${id}`,
  REMOVE_JOB: (id) => `${API_URL}/job/${id}`,
};

export default services;
