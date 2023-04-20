import { useState } from 'react';
//redux
import { useAppDispatch } from '../../hooks/storeHooks';
import  { removeGroup } from '../../store/groups/groupsSlice';
//types
import { Group } from '../../types';
//components
import Card from '../Card/Card';
import ContextMenu from "../../components/ContextMenu/ContextMenu";
//utils
import { formatter } from '../../utils/utils';
//styles
import styles from './groupCard.module.scss';
import AddEditGroup from '../AddEditGroup/AddEditGroup';


type groupCardPropsType = {
  groupProps: Group
  
}

function GroupCard({ groupProps }: groupCardPropsType) {
	const [showContextMenu, setContextMenu] = useState(false);
	const [isShowingEditForm, setIsShowingEditForm] = useState(false);
	const dispatch = useAppDispatch()

	const editHandler = (): void => {
		// dispatch(editGroup(groupProps.id))
		setIsShowingEditForm(true)
	}

	const deleteHandler = (): void => {
		dispatch(removeGroup(groupProps.id))
	}

	const GroupContextMenu =  [ 
		{id: 'groupAddID', name: 'Agregar Miembro', handler: () => console.log('boton agregar') },
		{id: 'groupEditID', name: 'Editar', handler: editHandler },
		{id: 'groupDeleteID', name: 'Borrar', handler: deleteHandler },
	]

	const _startDate = formatter.format(new Date(groupProps.startDate));
	const _endDate = formatter.format(new Date(groupProps.endDate)); 


	//handlers
	const onShowOptionsContextHandler = () => setContextMenu( prevState => !prevState)

	const onHideEditModal = () => {
		setIsShowingEditForm(false);
		onShowOptionsContextHandler()
	}

  return (
    <>
    {isShowingEditForm && (<AddEditGroup onHideCreateGroup={onHideEditModal} editMode={true} groupId={groupProps.id}  />)}
      <Card className={styles.card}>
		{ showContextMenu && <ContextMenu options={GroupContextMenu} /> }
        <div className={styles.kanvan}>
				<div className={styles.header}>
					<div className={styles.groupName}>
						<span className={`material-icons-sharp ${styles.groupIcon}`} >group</span>
						<h3>{groupProps.groupName}</h3>
					</div>
					<span className={`material-icons-sharp ${styles.optionsIcon}`} onClick={onShowOptionsContextHandler}>more_horiz</span>
				</div>		
				
				<span><strong>Miembros</strong> {groupProps.members.length}</span>
				<span>Precio: {groupProps.price}</span>
				<span>Horario: {groupProps.schedule}</span>
				<span>Fecha de inicio: {_startDate}</span>
				<span>Fecha de finalización: {_endDate}</span>
			
        </div>
    </Card>
    </>
  )
}

export default GroupCard 