import { createContext, useState } from "react";

export const InterviewContext = createContext({});

export function InterviewProvider({children, ...props}) {
    const [selectedAdd, setSelectedAdd] = useState(false);
    const [selectedUpdate, setSelectedUpdate] = useState(false);

    const interview = {
        selectedAdd,
        setSelectedAdd,
        selectedUpdate,
        setSelectedUpdate,
        ...props
    }

    return <InterviewContext.Provider value={interview}>{children}</InterviewContext.Provider>
}