import { ReactNode } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { masive } from '../../../types';

import styles from './select.module.scss';


type PropsTypes = {
    children: ReactNode,
    name: Path<masive>,
    id: Path<masive>,
    register: UseFormRegister<masive>

}

function Select({children, register, id, name}: PropsTypes) {
  return (
    <select className={styles.select} {...register(id)} id={id} name={name}>
        {children}
    </select>
  )
}

export default Select