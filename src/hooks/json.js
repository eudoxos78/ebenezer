import { useEffect, useReducer } from 'react';

const IDLE = 'idle';
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

const reducer = (state, action) => {
  switch (action.type) {
    case PENDING:
      return { status: PENDING, data: null, error: null };
    case RESOLVED:
      return { status: RESOLVED, data: action.data, error: null };
    case REJECTED:
      return { status: REJECTED, data: null, error: action.error };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const useJson = (url) => {
  const urlStr = url.toString();
  const [state, dispatch] = useReducer(reducer, {
    status: IDLE,
    data: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const config = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    if (isMounted) {
      dispatch({ type: PENDING });
    }

    fetch(urlStr, config)
      .then((response) => { 
        if (response.ok) {
          return response.json();
        }
        
        throw new Error('Invalid response!!!');
      })
      .then((data) => {
        if (isMounted) {
          dispatch({ type: RESOLVED, data });
        }
      })
      .catch((error) => {
        if (isMounted) {
          dispatch({ type: REJECTED, error });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [dispatch, urlStr]);

  return state;
};

export const STATUS = {
  IDLE,
  PENDING,
  RESOLVED,
  REJECTED,
};
