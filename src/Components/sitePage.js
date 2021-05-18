import '../App.css';

const SitePage = (props) => {
    let handleClick = () => {
        props.logout()
    }
    return (
            <div className="App">
                <button className="btn btn-outline-secondary button_site" onClick={handleClick}>
                        Log out
                </button>
                <div className="App-header">
                    Welcome back again.
                </div>
            </div>
    );
}

export default SitePage;