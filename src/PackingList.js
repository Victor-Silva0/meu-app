function Item({ name, isPacked}) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " "}
            </del>
        )
    }
}