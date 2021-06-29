import { useField } from 'formik'
import React from 'react'
import { Grid, Label, FormField, Input } from 'semantic-ui-react'

export default function HrmsDateMenu({ ...props }) {

    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error}>
            <Grid.Column width={8}>

                <Input
                    style={{ width: "100%" }}
                    type="date"
                    name
                    placeholder
                    {...field} {...props}
                />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}

            </Grid.Column>
        </FormField>
    )
}
