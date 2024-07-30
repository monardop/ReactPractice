export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing}) {
    console.log(isFollowing)
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src="https://www.w3schools.com/w3images/avatar5.png" 
                alt="Avatar de una persona" />
                <div className="tw-followCard-info">
                    <strong> {name} </strong>
                    <span> {formatUserName(userName)} </span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    Follow
                </button>
            </aside>
        </article>
    )
}