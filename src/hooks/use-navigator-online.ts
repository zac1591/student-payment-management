import { useState, useEffect } from 'react';

const getOnlinestatus = () => {
   if (navigator !== undefined && typeof navigator.onLine === 'boolean') {
      return navigator.onLine
   }
}

function useNavigatorOnline() {
   const [status, setStatus] = useState(getOnlinestatus())

   const setOnLine = () => setStatus(true)
   const setOffline = () => setStatus(false)

   useEffect(() => {
      window.addEventListener('online', setOnLine)
      window.addEventListener('offline', setOffline)

      return () => {
         window.removeEventListener('online', setOnLine);
         window.removeEventListener('offline', setOffline);
      };
   }, []);

   return status

}

export default useNavigatorOnline