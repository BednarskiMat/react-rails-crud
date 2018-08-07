class Fruit extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editable: false
        }

        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(){
        if(this.state.editable){
            let name = this.name.value
            let description = this.description.value
            let id = this.props.fruit.id
            let fruit = {id: id, name: name, description: description}
            this.props.handleUpdate(fruit)
          }
        this.setState({
            editable: !this.state.editable
        })
    }
    render(){
        let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.fruit.name}/>:<h3>{this.props.fruit.name}</h3>
        let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.fruit.description}/>:<p>{this.props.fruit.description}</p>
        return(
            <div>
                <div className="row">
                    <div className="col s4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                            <span className="card-title">{name}</span>
                            <p>{description}</p>
                            </div>
                            <div class="card-action">
                                <button className = 'waves-effect waves-light btn' onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
                                <button className = 'waves-effect waves-light btn' onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



