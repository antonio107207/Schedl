import React, { Component } from "react";
import ScheduleAside from "../../common/styled/grid/ScheduleAside.js";
import ScheduleCell from '../../common/styled/grid/ScheduleCell.js';
import ScheduleAsideCellTitle from "../../common/styled/grid/ScheduleAsideCellTitle.js";
import ScheduleAsideCellTime from "../../common/styled/grid/ScheduleAsideCellTime.js";
import ScheduleHeaderCell from "../../common/styled/grid/ScheduleHeaderCell.js";
import ScheduleHeaderCellFirstNameDay from "../../common/styled/grid/ScheduleHeaderCellFirstNameDay.js";
import ScheduleHeaderCellFirstData from "../../common/styled/grid/ScheduleHeaderCellFirstData.js";

class ScheduleAsideBlock extends Component {
	render() {
		const { lessons, day } = this.props;
		return (
			(lessons && day) ?
			<>
				<ScheduleAside>
					<ScheduleHeaderCell>
						<ScheduleHeaderCellFirstNameDay>{day.dayOfWeek}</ScheduleHeaderCellFirstNameDay>
						<ScheduleHeaderCellFirstData>{day.dayAndMonth}</ScheduleHeaderCellFirstData>
					</ScheduleHeaderCell>
					{Object.keys(lessons).map((key, index) => {
						return (
							<ScheduleCell key={index}>
								<div>
									<span>{key} ПАРА</span>
                                    <br/>
									<span>{lessons[key]}</span>
								</div>
							</ScheduleCell>
						)
					})}

				</ScheduleAside>
			</> : null
		)
	}
}

export default ScheduleAsideBlock
