import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation';
import PrimaryLink from '../Buttons/PrimaryLink';
import Footer from '../Footer/Footer';

import './Page404.scss';

const Page404 = () => {
    return (
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
            </header>
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
            <Footer />
        </div>

    )
}

export default Page404