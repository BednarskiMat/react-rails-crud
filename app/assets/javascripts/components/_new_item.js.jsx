const NewFruit = (props) => {
  
    let formFields = {}
 
    return(
      <div>
        <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
        <input ref={input => formFields.description = input} placeholder='Enter a description' />
        <button className="btn waves-effect waves-light"
       onClick={ () => props.handleFormSubmit(formFields.name.value, formFields.description.value)}><i class="material-icons right">send</i>Submit</button>
      </div>
    )
}