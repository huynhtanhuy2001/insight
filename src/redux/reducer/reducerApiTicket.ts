interface State {
    tickets: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: State = {
    tickets: [],
    loading: false,
    error: null,
  };
  
  const reducerApiTicket = (state: State = initialState, action: any) => {
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
  
  export default reducerApiTicket;
  