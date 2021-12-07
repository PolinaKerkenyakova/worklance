import PrimaryLink from '../Buttons/PrimaryLink';

import './Page404.css';

const Page404 = () => {
    return (
        <main className="flex container error-page">
            <div>
                <img src="/images/image-404.png" alt="404 error" />
            </div>
            <div className="error-text flow">
                <div>
                    <p>Ooopss...</p>
                    <p>Sorry, something went wrong :(</p>
                </div>
                <div>
                    <PrimaryLink link="/">Go Home</PrimaryLink>
                </div>
            </div>
        </main>
    )
}

export default Page404