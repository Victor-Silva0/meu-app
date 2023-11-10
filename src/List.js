import { people } from "./data";
import { getImageUrl } from "./Utils";

export default function List() {
    const chemists = people.filter(person => person.profession === 'chemist');
    const listItems = chemists.map(person =>
        <li>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                know for {person.accomplishment}
            </p>
        </li>
);
return <ul>{listItems}</ul>;
}