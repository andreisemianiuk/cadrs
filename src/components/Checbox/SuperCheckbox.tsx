import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.scss'


export const SuperCheckbox: FC<SuperCheckboxPropsType> = (props) => {
   const {
      onChange, onChangeChecked,
      className, spanClassName,
      type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
      children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
      ...restProps// все остальные пропсы попадут в объект restProps
   } = props
   const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      // сделайте так чтоб работал onChange и onChangeChecked
      onChange // если есть пропс onChange
      && onChange(e) // то передать ему е (поскольку onChange не обязателен)

      onChangeChecked && onChangeChecked(e.currentTarget.checked)
   }

   const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

   return (
      <label>
         <input
            type={'checkbox'}
            onChange={onChangeCallback}
            className={finalInputClassName}

            {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
         />
         {children && <span className={s.spanClassName}>{children}</span>}
      </label> // благодаря label нажатие на спан передастся в инпут
   )
}

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
   onChangeChecked?: (checked: boolean) => void
   spanClassName?: string
};