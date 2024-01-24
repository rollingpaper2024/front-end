import { InputHTMLAttributes, ChangeEvent } from 'react'

// 라디오 버튼 옵션
export interface RadioBtnOption {
  name: string
  value: string
}

// RadioBtnGroup 컴포넌트의 props
export interface RadioBtnGroupProps {
  options: RadioBtnOption[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

// RadioBtn 컴포넌트의 props
export interface RadioBtnProps extends InputHTMLAttributes<HTMLInputElement> {}
