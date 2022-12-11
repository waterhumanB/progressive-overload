export interface IUserInputProps {
  label: string
  name: string
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  vail: boolean
  warning: string
  desc1?: string
  desc2?: string
}
