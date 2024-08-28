import PropTypes from 'prop-types';
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				placeholder="Поиск по заголовкам..."
				value={searchPhrase}
				onChange={onChange}
			/>
			<Icon inactive={true} id="fa-search" size="21px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	margin: 40px auto 0;
	width: 340px;
	height: 40px;

	& > input {
		padding-right: 32px;
	}

	& > div {
		position: absolute;
		right: 9px;
		top: 3px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
