import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

function CourseListRow({ isHeader=false, textFirstCell, textSecondCell=null }) {
    const rowStyle = {
        backgroundColor: '#f5f5f5ab'
    }
    const headerStyle = {
        backgroundColor: '#deb5b545'
    }
    const selectStyle = isHeader ? headerStyle : rowStyle
    return (
        <tr style={selectStyle}>
            {isHeader ?
                <>
                    <th colSpan={textSecondCell == null ? 2 : 1} className={css(rowsStyles.thcenter)}>{textFirstCell}</th>
                    {textSecondCell !== null &&
                        <th  className={css(rowsStyles.th)}>{textSecondCell}</th>
                    }
                </> :
                <>
                    <td className={css(rowsStyles.td)}>{textFirstCell}</td>
                    <td className={css(rowsStyles.td)}>{textSecondCell}</td>
                </>
            }
        </tr>
    )
}
const rowsStyles = StyleSheet.create({
    thcenter: {
      borderBottom: '1px solid gray',
      margin: 0,
      padding: 0,
      textAlign: 'center'
    },
    th: {
      borderBottom: '1px solid gray',
      margin: 0,
      padding: 0,
      textAlign: 'left'
    },
    td: {
      paddingLeft: 3
    }
  });

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.string,
};

export default CourseListRow;