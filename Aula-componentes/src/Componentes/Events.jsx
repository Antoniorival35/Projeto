const Events = () => {
    const hundleClick = () => {
        console.log("Executou Clique")
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
        </div>
    );
};
export default Events;