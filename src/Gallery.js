import Avatar from "./Avatar.js";

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Avatar
            size={200}
            person={{
                name: 'Adam Savage',
                imageId: 'YfeOqp2'
            }}
            />
        </Card>
    );
}
