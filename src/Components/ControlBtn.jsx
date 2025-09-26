import styles from '../assets/styles/controlBtn.module.css';

// UpBtn Component
export function UpBtn({ onClick, name }) {
   return (
      <button className={`${styles.controlBtn} ${styles.UpBtn}`} onClick={onClick}>
         {name}
      </button>
   );
}

// DownBtn Component
export function DownBtn({ onClick, name }) {
   return (
      <button className={`${styles.controlBtn} ${styles.DownBtn}`} onClick={onClick}>
         {name}
      </button>
   );
}

// ResetBtn Component
export function ResetBtn({ onClick, name }) {
   return (
      <button className={`${styles.controlBtn} ${styles.ResetBtn}`} onClick={onClick}>
         {name}
      </button>
   );
}