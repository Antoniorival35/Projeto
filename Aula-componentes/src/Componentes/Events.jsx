const Events = () => {
    const hundleClick = () => {
        console.log("Executou Clique")
    }
    const renderSomething = (x) =>{
        if(x){
            return <h1>Processo em Renderizado!</h1>
        }else{
            return <h1>Processo Renderizado!</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>
                  Clique aqui
                </button>
            </div>

        <div>
            <button onClick={hundleClick}> Novo Clique</button>

         </div>
<div>
    {renderSomething(true)}
</div>
        </div>
    );
};
export default Events;