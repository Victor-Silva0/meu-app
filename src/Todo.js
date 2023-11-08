const person = {
    name: 'Adam Savage',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    }
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
            className="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Adam_Savage_by_Gage_Skidmore.jpg/330px-Adam_Savage_by_Gage_Skidmore.jpg"
            alt="Adam Savage"
            />
            <ul>
                <li>Explode a quarry</li>
                <li>Test if you can open a car door underwater</li>
                <li>Put a rocket engine in a car</li>
            </ul>
        </div>
    );
}