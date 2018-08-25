import { connect } from 'react-redux';
import Navigator from 'Components/Navigator';

const mapStateToProps = (state) => {
    return {
        views: state.sections
    };
};

export default connect(
    mapStateToProps,
    null
)(Navigator);