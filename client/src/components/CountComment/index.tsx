import React from "react"
import ChatIcon from "@/icons/Chat"

interface CountCommentProps {
  count?: number
}

const CountComment = ({ count = 0 }: CountCommentProps) => {
  return (
    <div>
      <ChatIcon className="inline" />
      <span className="text-[#939494] text-xs ml-1 font-normal">
        {count} Comments
      </span>
    </div>
  )
}

export default CountComment
