const Greeting = ({user}) =>{

    return(
        <p style={{backgroundColor: "#eee"}}>
            Helllo, my name is {user.name} and I'm {user.age} years old.
        </p>
    )
};

export default Greeting;