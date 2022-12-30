type props = {
    name: string
    age: number
}

export const HelloWorld = ({ name, age }: props) => {
    return (
        <div>
            <p role='name-msg'>Welcome {name}</p>
            <p role='age-msg'>Your age is {age}</p>
        </div>
    )
}
