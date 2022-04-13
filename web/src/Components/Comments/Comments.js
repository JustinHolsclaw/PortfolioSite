function Comments(props) {
    var comments = props.comments;
    return (
        <>
            {
                comments.map(comment => (
                    <div className="row">
                        <p>{comment.name}</p>
                        <p>{comment.text}</p>
                    </div>
                ))
            }
            <form>
                <input type={textarea} placeholder="add a comment"></input> 
            </form>
        </>
    )
}

export default Comment;