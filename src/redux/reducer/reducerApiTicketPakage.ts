interface State {
    ticketpakage: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: State = {
    ticketpakage: [],
    loading: false,
    error: null,
  };
  
  const reducerApiTicketPakage = (state: State = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_TICKETS_START':
        return { ...state, loading: true, error: null };
      case 'FETCH_TICKETS_SUCCESS':
        return { ...state, loading: false, tickets: action.payload };
      case 'FETCH_TICKETS_ERROR':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default reducerApiTicketPakage;
  