import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.scss'


export const SuperInputText: React.FC<SuperInputTextPropsType> = (props) => {
   const {
      type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
      onChange, onChangeText,
      onKeyPress, onEnter,
      error,
      className, spanClassName,

      ...restProps// все остальные пропсы попадут в объект restProps
   } = props
   const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange // если есть пропс onChange
      && onChange(e) // то передать ему е (поскольку onChange не обязателен)

      onChangeText && onChangeText(e.currentTarget.value)
   }
   const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyPress && onKeyPress(e)

      e.key === 'Enter' // если нажата кнопка Enter
      && onEnter // и есть пропс onEnter
      && onEnter() // то вызвать его
   }


   const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`

   const finalInputClassName = `${s.errorInputError} ${error ? s.errorInput : s.superInput} ` // need to fix with (?:) and s.superInput

   return (
      <>
         <input
            type={'text'}
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            className={finalInputClassName}

            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
         />
         {error && <span className={finalSpanClassName}>{error}</span>}
      </>
   )
}


//types
// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
   onChangeText?: (value: string) => void //setError
   onEnter?: () => void //showAlert
   error?: string // "error"
   spanClassName?: string
   supperInputClassName?: string
};
