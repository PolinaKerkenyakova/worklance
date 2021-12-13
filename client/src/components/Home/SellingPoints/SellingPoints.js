import './SellingPoints.css';

const SellingPoints = () => {
    return (
        <section className="section-selling-points">
            <div className="section-selling-points-wrapper container">
                <h2>A whole world of talents at your fingertips</h2>

                <div className="flex selling-points">
                    <article className="selling-points-text">
                        <div className="selling-point">
                            <h3>
                                <img src="/images/check-icon.svg" alt="Check icon" className="check-icon" />
                                The best for every budget</h3>
                            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                        </div>
                        <div className="selling-point">
                            <h3>
                                <img src="/images/check-icon.svg" alt="Check icon" className="check-icon" />
                                Quality work done quickly</h3>
                            <p>Find the right professional to begin working on your project within minutes.</p>
                        </div>
                        <div className="selling-point">
                            <h3>
                                <img src="/images/check-icon.svg" alt="Check icon" className="check-icon" />
                                24/7 support</h3>
                            <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                        </div>
                    </article>
                    <div className="selling-points-img-container">
                        <img src="/images/selling-point-img.jpg" alt="A woman using her computer" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SellingPoints;