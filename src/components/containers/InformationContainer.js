import InformationContainerStyle from './InformationContainerStyle';

export default function InformationContainer({
	firstColumn,
	secondColumn,
	onClick,
}) {
	return (
		<InformationContainerStyle onClick={onClick}>
			<span>{firstColumn}</span>
			<span>{secondColumn}</span>
		</InformationContainerStyle>
	);
}
