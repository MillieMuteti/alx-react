import {Component} from 'react';
import PropTypes from 'prop-types'
import BodySection from './BodySection';
import {StyleSheet, css} from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
    render() {
        return(
            <div className={css(BodySectionMargin.BodySectionWithMarginBottom)}>
            <BodySection{...this.props} />
        </div>
        )
    }
};
BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

const BodySectionMargin = StyleSheet.create({
    BodySectionWithMarginBottom: {
        position: 'relative',
        marginBottom: '40px'
    }
})

export default BodySectionWithMarginBottom