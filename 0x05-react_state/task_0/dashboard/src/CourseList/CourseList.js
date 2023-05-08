import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import {StyleSheet, css} from 'aphrodite';

function CourseList({ listCourses }) {
    return (
        <table id="CourseList" className={css(CourseStyle.table)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell='Available courses' />
                <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit' />
            </thead>
            <tbody>
                {!listCourses.length ?
                    <CourseListRow textFirstCell='No course available yet.' /> :
                    listCourses.map((val) => {
                        return <CourseListRow textFirstCell={val.name}
                            textSecondCell={String(val.credit)} key={val.id}
                        />;
                    })
                }
            </tbody>
        </table>
    );
}

const CourseStyle = StyleSheet.create({
    table: {
        display: 'table',
		border: '1px solid',
		borderCollapse: 'collapse',
		margin: '2rem auto 0 auto',
		width: '90%',
        alignText: 'center',
    }
})

CourseList.defaultProps = {
    listCourses: [],
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;