//Componentes de react se adota a nomenclatura PascalCase
//App com as primeiras letras maiusculas
import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'


export function App(){
    return(
        //JSX só pode retornar um elemento, por isso que da erro se não deixar o h1 e o p dentro de uma div ( se você fizer <> voce cria um elemento vazio para ficar meno poluido)
        <>
            <Heading/>
            <p>Este testo esta presente dentro de um paragrafo no componente App.tsx e esta sendo chamado pelo import QualquerCoisa pois na hora de importar podemos dar o nome que agente quiser</p>
        </>

    ) 
}

export default App;