import { useState, useEffect } from 'react';


function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<string | undefined>(value);

    useEffect(() => {
        console.info('Effect running inside custom hook')
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            console.info('CLEANING UP TIMER')
            clearTimeout(timer)
        }
    }, [value, delay])
    
    return debouncedValue
    
}

export default useDebounce

/*function useDebounce(value: string, delay:number) {
    const [debouncedValue, setDebouncedValue] = useState<string | undefined>(value);

    useEffect(() => {
        console.info('Effect running inside custom hook')
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            console.info('CLEANING UP TIMER')
            clearTimeout(timer)
        }
    }, [value, delay])

    

   return debouncedValue
}*/