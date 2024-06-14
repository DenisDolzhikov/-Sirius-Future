import styles from './Referal.module.scss';

import Button from '../button/Button';

const Referal = () => {
  return (
    <div className={styles.referalBlock}>
      <h4 className={styles.referalTitle}>Учитесь бесплатно</h4>
      <p className={styles.referalParagraph}>Приводите друзей с детьми заниматься в Sirius Future 
          и получайте подарки!
      </p>
      <Button 
        to='/referal'
        className={styles.button}
      >
        Узнать
      </Button>
    </div>
  )
}

export { Referal }