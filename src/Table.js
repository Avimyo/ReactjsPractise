import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Foo",
          age: "20",
        },
        {
          id: 2,
          name: "Bar",
          age: "30",
        },
        {
          id: 3,
          name: "Foo",
          age: "40",
        },
        {
          id: 4,
          name: "Get",
          age: "50",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <TableRow key={i} data={person} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
export default Table;
