const Game = (players = [{name:'Michael'}, {name:'Jacob'}, {name:'Mike'}]) => {
    [players, setPlayers] = useState(players);
    for (const [index, value] of players.entries()){

    }
    // this can't be the appropriate way to do this....
    playerDivs = players.map(p => `<div>${p.name}</div>`)
    return (
            <div>
                {playerDivs}
            </div>
    );
}
export default Game;