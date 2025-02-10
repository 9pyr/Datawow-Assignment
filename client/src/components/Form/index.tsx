import React from "react"
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form"

interface FormProps extends UseFormProps {
  onSubmit?: SubmitHandler<FieldValues>
}

const Form = ({ children, onSubmit }: React.PropsWithChildren<FormProps>) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((...args) => {
          onSubmit?.(...args)
          methods.reset({})
        })}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
