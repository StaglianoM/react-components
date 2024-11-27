import Card from './Card/Card.jsx'


export default function Main() {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="row">
                        {[1, 2, 3, 4].map((id) => (
                            <div key={id} className="col-6">
                                <Card />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
