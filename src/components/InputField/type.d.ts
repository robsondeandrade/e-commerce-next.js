export interface InputFieldProps {
    type: string
    name?: string
    label: string
    value?: string
    error?: string
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
}
