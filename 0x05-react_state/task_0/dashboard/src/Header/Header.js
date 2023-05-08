import logo from '../assets/holberton_logo.jpg';
import {StyleSheet, css} from 'aphrodite';

function Header(props) {
    return (
        <header className={css(HeaderStyle.Header)}>
            <img src={logo} className={css(HeaderStyle.logo)} alt="logo" />
            <h1>School dashboard</h1>
        </header>
    )
}

const HeaderStyle = StyleSheet.create({
    Header: {
        display: 'flex',
        color: '#de283f',
        gap: '1.2rem',
        alignItems: 'center',
        borderBottom: '3px solid #de283f',
        padding: '1rem',
        margin: '0 1rem',
    },
    logo: {
        width: '10vw',
    }
})

export default Header;