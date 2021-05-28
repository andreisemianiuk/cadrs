import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'
import styles from './SuperButton.module.scss'


export const SuperButton: FC<SuperButtonPropsType> = (props) => {
   const {
      red, className,
      ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
   } = props

   const finalClassName = ` ${styles.btn} ${red ? styles.red : styles.default} ${className} `

   return (
      <button
         className={finalClassName}
         {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
      />
   )
}

//types
// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
   red?: boolean
}
