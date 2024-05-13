import { count } from "console";
import { useEffect } from "react";

interface Props {
    count: number;
}
const TestComponent: React.FC<Props> = ({count}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
        }, 999999);
        console.log(`Timer = ${timer}`);
        () => {
            console.log(`Clear timer = ${timer}`);
            clearTimeout(timer);
        }
    }, [])
    useEffect(() => {
        console.log(`Run once.`)
    }, [count]);
    return <p>{count}</p>
}

export default TestComponent;
