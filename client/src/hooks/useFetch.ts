import { useEffect, useState } from 'react';

interface State<T> {
   data?: T | null;
   isLoading?: boolean;
   hasError?: boolean;
}

export function useFetch<T = unknown>(url: string) {
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
         const resp = await fetch(url);
         const data = await resp.json();

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
   }, [url]);

   return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,
   };
}
