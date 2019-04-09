import { connect } from 'react-redux';
import ScheduleMainBlock from './ScheduleMainBlock';
import { selectLessons, selectOneLesson } from "../../../selectors/lessonAndBreakDurationEventSelector";
import { selectSpeakersForEvents, selectSpeakerForEventById } from '../../../selectors/speakerEventSelector';

const mapStateToProps = (state) => ({
    // speakers: selectSpeakersForEvents(state),
    // lessons: selectLessons(state),
    speakerById: selectSpeakerForEventById(state),
    lessonById: selectOneLesson(state)
});

export default connect(mapStateToProps)(ScheduleMainBlock);
