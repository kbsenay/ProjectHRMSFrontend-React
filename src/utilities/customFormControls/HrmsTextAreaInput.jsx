import { useField } from 'formik'
import React from 'react'
import { FormField, Label, TextArea } from 'semantic-ui-react'

export default function HrmsTextAreaInput({...props}) {

    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error}>
            <TextArea
                placeholder
                error
                value
                name
                onChange
                onBlur
                {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    )
}
