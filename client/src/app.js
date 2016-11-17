class App extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <Header />
                <Sidebar />
                <ContentWrapper />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);