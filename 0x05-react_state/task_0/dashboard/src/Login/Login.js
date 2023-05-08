import {StyleSheet, css} from 'aphrodite';

function Login(props) {
    return (
        <div className={css(LoginStyles.LoginBody)}>
            <p>
                Login to access the full dashboard
            </p>
            <form className={css(LoginStyles.LoginForm)}>
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' name='email' />
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' name='password' />
                <button>OK</button>
            </form>
        </div>
    )
}

const LoginStyles = StyleSheet.create({
    LoginBody: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1.2rem 0 0 2.5rem',
        justifyContent: 'center',
        
    },
    LoginForm: {
        display: 'flex',
        gap: '.6rem',
        "@media(max-width: 900px)" : {
            display: 'flex',
            flexDirection: 'column',
        },
    },
})

export default Login;