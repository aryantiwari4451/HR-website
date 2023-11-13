import { useContext } from "react";
import { InterviewContext } from "@/context/interviewContext";

export default function useInterview() {
    return useContext(InterviewContext);
}