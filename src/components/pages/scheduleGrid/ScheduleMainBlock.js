import React, { Component } from "react";
import ScheduleMain from "../../common/styled/grid/ScheduleMain";
import ScheduleCell from '../../common/styled/grid/ScheduleCell.js';
import ScheduleBodyRow from '../../common/styled/grid/ScheduleBodyRow.js';
import ScrollWrapper from '../../common/styled/grid/ScrollWrapper';
import ScheduleMainBlockCellTitle from '../../common/styled/grid/ScheduleMainBlockCellTitle.js';
import ScheduleHeaderCell from '../../common/styled/grid/ScheduleHeaderCell.js';
import ScheduleHeaderMain from '../../common/styled/grid/ScheduleHeaderMain.js'
import ScheduleHeaderCellFirstNameSpeaker from "../../common/styled/grid/ScheduleHeaderCellFirstNameSpeaker.js";

class ScheduleMainBlock extends Component {
	render() {
        const { speakerById , lessonById } = this.props;
        return (
			( speakerById.length && lessonById.length) ?
			<ScrollWrapper>
				<ScheduleMain>
					<ScheduleHeaderMain>
                            { speakerById.map((value, key) => {
                                return (
                                    <ScheduleHeaderCell key={key}>
                                        <ScheduleHeaderCellFirstNameSpeaker key={key}>
                                        {value.speaker_name}
                                        </ScheduleHeaderCellFirstNameSpeaker>
                                    </ScheduleHeaderCell>
                                )
                            })}
					</ScheduleHeaderMain>
					{lessonById.map((key) => {
						return (
							<ScheduleBodyRow key={key}>
								{speakerById.map((value, key) => {
									return (
										<ScheduleCell key={key}>
											<ScheduleMainBlockCellTitle key={key}>Назва предмету {key}</ScheduleMainBlockCellTitle>
										</ScheduleCell>
									)
								})}
							</ScheduleBodyRow>
						)
					})}
				</ScheduleMain>
			</ScrollWrapper> :
			null
		)
	}
}

export default ScheduleMainBlock;
