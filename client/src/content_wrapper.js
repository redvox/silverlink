class ContentWrapper extends React.Component {
    render(){
        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Page Header <small>Optional description</small></h1>
                    <ol className="breadcrumb">
                        <li>
                            <a href="#"><i className="fa fa-dashboard"></i> Level</a>
                        </li>
                        <li className="active">Here</li>
                    </ol>
                </section>
                <section className="content">
                    Content
                </section>
            </div>
        )}
}