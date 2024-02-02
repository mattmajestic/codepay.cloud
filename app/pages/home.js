import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <Link href="/">Go back to Index</Link>
        </div>
    );
}

export default Home;