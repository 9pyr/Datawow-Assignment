import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material"
import React from "react"
import CommentInput from "../CommentInput"
import Link from "next/link"
import Form from "@/components/Form"
import useResponsive from "@/hooks/useResponsive"
import getCookie from "@/utils/getCookie"
import DesktopCommentInput from "../DesktopCommentInput"
import { CommentModel } from "@/app/(board)/feed/types"
import { isEmpty } from "lodash"
import { useModal } from "@/components/Modal"
import { FieldValues, SubmitHandler } from "react-hook-form"
import dayFormat from "@/utils/dayFormat"

interface CommentsProps {
  comments?: CommentModel[]
  addComment?: SubmitHandler<FieldValues>
}

const Comments = ({ comments, addComment }: CommentsProps) => {
  const { openModal } = useModal()

  const { isMobile } = useResponsive()

  const username = getCookie("username")

  return (
    <>
      {isMobile && !isEmpty(username) && (
        <Button
          onClick={() =>
            openModal({
              title: "Add Comments",
              body: <CommentInput />,
              onSubmit: addComment,
            })
          }
        >
          Add Comments
        </Button>
      )}
      {isEmpty(username) && (
        <Button LinkComponent={Link} href="/login">
          Add Comments
        </Button>
      )}
      {!isMobile && !isEmpty(username) && (
        <Form onSubmit={addComment}>
          <DesktopCommentInput />
        </Form>
      )}
      {comments?.map(({ id, author, message, updateDate }) => (
        <List key={id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={id} src="/images/avatar/2.png" />
            </ListItemAvatar>
            <ListItemText
              className="grid gap-[20px] text-black"
              primary={
                <>
                  <span className="text-sm font-medium">{author}</span>
                  <span className="text-[#939494] text-xs font-normal ml-[10px]">
                    {dayFormat(updateDate)}
                  </span>
                </>
              }
              secondary={message}
              slotProps={{
                secondary: { className: "!text-xs !text-inherit font-normal" },
              }}
            />
          </ListItem>
        </List>
      ))}
    </>
  )
}

export default Comments
