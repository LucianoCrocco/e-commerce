import { useEffect, useState } from 'react';

interface State<T> {
   data?: T | null;
   isLoading?: boolean;
   hasError?: boolean;
}

export function useGetFetch<T>(endpoint: string) {
   const [state, setState] = useState<State<T>>({
      data: null,
      isLoading: true,
      hasError: false,
   });

   const getFetch = async () => {
      try {
         setState({
            ...state,
            isLoading: true,
         });

         const resp = await fetch(`http://localhost:5000/api/${endpoint}`);
         const data = await resp.json();

         if (resp.status > 400) throw new Error(data);

         setState({
            data,
            isLoading: false,
            hasError: false,
         });
      } catch (e) {
         setState({
            data: null,
            isLoading: false,
            hasError: true,
         });
      }
   };

   useEffect(() => {
      getFetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [endpoint]);

   return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,
   };
}
