import Form from '../Form/From';
import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';

const Login = () => {

    const inputs = (
        <>
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Password" name="password" />
        </>
    );

    return (
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main>
                <Form title='Sign In to worklance' inputs={inputs} memberText={'Not a member yet?'} sign={'Join now'} />
            </main>
        </>
    )
}

export default Login;