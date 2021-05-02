/**
 * Desta forma os dados sao carregados PELO SERVIDOR TODA vez q esta pag é acessada
 */

export default function Home(props) {
    return (
        <p> {JSON.stringify(props.episodes)}</p>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()
    return {
        props: {
            episodes: data
        }
    }
}