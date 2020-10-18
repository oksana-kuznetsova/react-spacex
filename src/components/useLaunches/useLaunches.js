import { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const useLaunches = () => {
	const [data, setData] = useState([]);

	/* Хуки use... хороши в ФУНКЦИОНАЛЬНЫХ компонентах, вместо написания классов */

	useEffect(() => {
		fetchData.getLaunches()
			.then(launches => setData(state => [...launches]))
	}, []); // [] - пустой массив для ОСТАНОВКИ "внутренней" рекурсии

	const getLaunch = id => data.find(item => item.id === id)
	
	return { data, getLaunch }
};

export default useLaunches;