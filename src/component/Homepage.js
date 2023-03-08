function LogInButton(){
    return (
        <button>Log In</button>
    );
};

function LogoutButton(){
    return (
        <button>Log out</button>
    );
};

function LogInOutButton(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <LogoutButton />
    }else{
        return <LogInButton />
    }
}

function Homepage(){
    return (
        <div>
            <h1>Welcome to my site</h1>

            <LogInOutButton isLoggedIn={false} />
        </div>
        
    );
};

export default Homepage;