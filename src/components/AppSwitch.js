import React, { useState } from "react";
import Button from "./Button/Button";

const userStoriesInitState = {
    showStory1: false,
    showStory2: false,
    showStory3: false,
    showStory4: false,
    showStory5: false
};

function AppSwitch() {
    // Assim temos que fazer uma constante para cada US
    const [userStories, setUserStories] = useState(false);

    // Aqui temos um objeto com todos as us a falso
    const [userStoriesObj, setUserStoriesObj] = useState(userStoriesInitState);

    // função para mudar o state genérico de forma extensa
    const changeView = (key) => {
        const newObj = {...userStoriesObj};
        newObj[key] = !userStoriesObj[key];
        setUserStoriesObj(newObj);
    }

    //função para mudar o state genérico de forma curta
    const changeViewShort = (key) => {
        setUserStoriesObj({...userStoriesObj, [key]: !userStoriesObj[key]})
    }

    // função para colocar todas a false novamente
    const setStoriesFalse = () => {
        setUserStoriesObj(userStoriesInitState);
    }

    return(
        <div>
            {/* Aqui usando a primeira abordagem do state*/}
            <Button onClick={()=> {setUserStories(!userStories)}}>US1</Button>
            {/* ternário verifica se o state está como true, se sim, renderiza. tem que fazer um para cada uma das US */}
            {userStories? (<div>Aqui vai mostrar o componente</div>) : null}

            {/* segunda abordagem do state e passando uma arrowfunction (teria que repetir para todos) */}
            <Button onClick={()=> {setUserStoriesObj({...setUserStoriesObj, showStory2: !userStoriesObj.showStory2})}}>
                US2
            </Button>
            {userStoriesObj.showStory2? (<div>Aqui vai mostrar o componente</div>): null}

            {/* segunda abordagem de state e usando a função genérica de forma curta */}
            <Button onClick={() => {changeViewShort('showStory3')}}>
                US3
            </Button>

            {/* segunda abordagem de state, fazendo os botões sumirem e usando a função genérica de forma curta */}
            <Button onClick={() => {setStoriesFalse(); changeViewShort('showStory3')}}>
                US4
            </Button>
            <Button/>
            
        </div>
    )
}