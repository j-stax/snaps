import './Comments.scss'

export default function Comments() {

    // TODO: PLUG IN API

    function CommentComponent() {
        return (
            <div>
                <hr className="comments__ruler" />
                <div className="comments__component-header">
                    <span>Casey Schmidt</span>
                    <span>08/29/2024</span>
                </div>
                <p className="comments__comment">The mood and atmosphere in this shot are beautiful.</p>
            </div>
        )
    }

    return (
        <section className="comments">
            <span className="comments__title">3 Comments</span>
            {CommentComponent()}
            {CommentComponent()}
        </section>
    )
}