import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchTicketPakage = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: 'FETCH_TICKETS_START' });
    axios
      .get("http://localhost:8000/api/ticketpakage")
      .then(response => {
        const responseData = response.data;
        dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: responseData });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_TICKETS_ERROR', payload: error.message });
      });
  };
};
