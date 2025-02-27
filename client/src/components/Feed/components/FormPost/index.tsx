import { communityOptions } from "@/components/Feed/constants"
import Input from "@/components/Form/Input"
import Select from "@/components/Form/Select"
import { Grid2 } from "@mui/material"

const FormPost = () => {
  return (
    <Grid2 container rowGap="14px">
      <Select
        name="community"
        label="Choose a community"
        options={communityOptions}
        required
      />
      <Input name="title" placeholder="Title" required />
      <Input
        name="detail"
        placeholder="What’s on your mind..."
        multiline
        rows={8}
        required
      />
    </Grid2>
  )
}

export default FormPost
