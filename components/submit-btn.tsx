import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitBtn() {
    const { pending } = useFormStatus();

  return (
    <button type="submit" 
    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
    disabled={pending}
    >{
        pending ? (
        <div className ="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div> 
        ): (
            <>
            Submit{" "}
            <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}
            </>
    )}
    
    </button>
    )
}
