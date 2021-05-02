/**
 * Desta forma os dados sao carregados depois q a pag eh exibida ao usuario pelo navegador dele
 */

import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        fetch('http://localhost:3333/episodes')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    return (<></>)
}