import { Link } from "react-router-dom"

const Page404 = () => {

    return (
        <main className="flex">
            <div>
                <img src="/images/image-404.png" alt="Error"/>
            </div>
            <div>
                <p>Oooopsi...</p>
                <p>Sorry, something went wrong :(</p>
                <Link to="/">Go Home</Link>
            </div>
        </main>
    )
}

export default Page404