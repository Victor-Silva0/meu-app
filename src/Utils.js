export function getImageUrl(person, size = 's') {
    return (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Adam_Savage_by_Gage_Skidmore.jpg/330px-Adam_Savage_by_Gage_Skidmore' +
        person.imageId +
        size +
        '.jpg'
    );
}