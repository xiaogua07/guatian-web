import { useEffect, useState } from "react";

function useIntervalUpdate(fn, delay) {
    const [_, forceUpdate] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            fn();
            forceUpdate({});
        }, delay);

        return () => clearInterval(timer);
    }, [fn, delay])
}

export default useIntervalUpdate;