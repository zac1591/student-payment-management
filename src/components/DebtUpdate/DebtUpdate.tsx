import styles from './debtUpdate.module.scss';

type DebtUpdateProps = {
    date: string,
    due: string,
    pastDue: string
}

function DebtUpdate({date, due, pastDue}: DebtUpdateProps) {
  return (
    <div className={styles.container}>
        <span className={styles.date}>
            {date}
        </span>
        <div className={styles.flexWrapper}>
            <span className={styles.due}>
                <small>No Vencido</small>
                <p>{due}</p>
            </span>
            <span className={styles.pastDue}>
                <small>Vencido</small>
                <p>{pastDue}</p>
            </span>
        </div>
    </div>
  )
}

export default DebtUpdate