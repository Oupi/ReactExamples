import React from 'react';

export default class ContactList extends React.Component{
  
  componentDidMount(){
    this.props.updateList();  
  }

  render(){
    let temp;
    if(this.props.contactList.length === 0){
      temp = <p>No contacts on list</p>
    } else {
      let listItems = this.props.contactList.map((listItem)=>
      <tr key={listItem._id.toString()}>
        <td>{listItem.firstName}</td>
        <td>{listItem.lastName}</td>
        <td>{listItem.phone}</td>
        <td>{listItem.email}</td>
      </tr>
      );
      temp =
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Phone number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </table>
    }
    return(
      <div>
        <center>{temp}</center>
      </div>
    );
  }
}