import { useRouter } from 'next/router';

function Deploy() {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Deploying: {id}</h1>;
}

export default Deploy;