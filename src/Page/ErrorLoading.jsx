import styles from './itemPage.module.css';

import { BtnBack } from '../Todo-Item';

export const ErrorLonding = () => (
	<>
		<div className={styles.error}>Такой страницы не существует</div>
		<BtnBack />
	</>
);
