import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function ThreeDotsLoader({
	color = 'rgb(255, 255, 255)',
	height = '1.5rem',
	width = '1.5rem',
}) {
	return (
		<Loader type='ThreeDots' color={color} height={height} width={width} />
	);
}
