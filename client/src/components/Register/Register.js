import Form from "../Form/From";
import PrimaryNavigation from "../Navigations/PrimaryNavigation/PrimaryNavigation";

const Register = () => {

    const inputs = (
        <>
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Password" name="password" />
            <input type="text" placeholder="Repeat password" rePass="rePass" />
        </>
    );

    return (
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main>
                <Form title='Join worklance' inputs={inputs} memberText={'Already a member?'} sign={'Sign In'} />
            </main>
        </>
    )
}
export default Register;