import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: 40px;
	padding: 10px;
	border: 1px solid black;
	margin: 0 0 10px;
	font-size: 18px;
`;

Input.propTypes = {
	width: PropTypes.string,
};
