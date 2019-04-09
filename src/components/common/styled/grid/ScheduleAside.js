import styled from "styled-components";

export default styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	width: 187px;
	min-width: 187px;
	align-content: start;
	
	height: 100%;
    overflow-y: hidden;
	
	& > div:first-of-type {
		border-radius: 0;
		border-right: none;
		background: white;
	}
	
	& > div {
		border-radius: 20px 0 0 20px;
		border-right: 1.5px solid #dcdcdc;
		margin-bottom: 15px;
		background: #f8f8f8;
	}
	
`;