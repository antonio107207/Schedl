import React, { Component } from "react";
import { connect } from 'react-redux';
import ContentContainer from '../../common/styled/grid/ContentContainer.js';
import MainSection from "./MainSection.js";
import AsideSection from "./AsideSection.js";
import { getInitData } from '../../../helpers/fetchHelper.js';

/*let isSyncScrollOne = false;
let isSyncScrollTwo = false;

const divOne = document.getElementById('scroll-one');
const divTwo = document.getElementById('scroll-two');


divOne.onscroll = function() {
	if (!isSyncScrollOne) {
		isSyncScrollTwo = true;
		divTwo.scrollLeft = this.scrollLeft;
	}
	isSyncScrollOne = false;
};

divTwo.onscroll = function() {
	if (!isSyncScrollTwo) {
		isSyncScrollOne = true;
		divOne.scrollleft = this.scrollLeft;
	}
	isSyncScrollTwo = false;
};*/


class Grid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			errors: [],
		}
	}

	async componentDidMount(){
		try{
			this.setState({ isLoading: true });

			await getInitData().then(initData => {
                console.log(initData);
                this.dispatchToStore(initData.data);
			});
			await 	this.setState({isLoading: false,})
		}
		catch(error) {
			this.setState({ errors: error });
		}
	}

	dispatchToStore(data) {
		 this.props.dispatch({
			type: 'ADD_LESSON_AND_BREAK_EVENT',
			payload: data.lessonAndBreakDuration,
		});
		 this.props.dispatch({
			type: 'ADD_ORGANIZATION_EVENT',
			payload: data.organization,
		});
		 this.props.dispatch({
			type: 'ADD_ROOM_EVENT',
			payload: data.rooms,
		});
		 this.props.dispatch({
			type: 'ADD_SCHEDULE_EVENT',
			payload: data.schedule,
		});
		 this.props.dispatch({
			type: 'ADD_SPEAKER_EVENT',
			payload: data.speakers,
		});
		 this.props.dispatch({
			type: 'ADD_SUBJECT_EVENT',
			payload: data.subjects,
		});
	};

	render() {
		return (
			<ContentContainer>
				< AsideSection />
				< MainSection />
			</ContentContainer>
		)
	}
}
const mapStateToProps = (state, props) => {
	return {
		store: state,
	}
};

export default connect(mapStateToProps)(Grid);
