import { useGlobalContext } from './Context';

const ThemeToggle = () => {
	const { hello } = useGlobalContext();
	console.log(hello);

	return <div>ThemeToggle</div>;
};

export default ThemeToggle;
