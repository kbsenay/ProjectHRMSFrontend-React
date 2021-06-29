import React from 'react'
import { useField } from 'formik'
import { Dropdown, Label, FormField } from 'semantic-ui-react'

export default function HrmsDropdownMenu({ ...props }) {

    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error}>
            <Dropdown
                clearable
                item
                placeholder
                search
                selection
                options
                {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    )
}
