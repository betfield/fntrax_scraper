import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class AppSettingsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      selectFixture: '-- Select fixture --'
    }
  }

  submitForm = (fixture) => {
    console.log(fixture);

    this.setState({
      selectFixture: fixture.homeTeam.name + " vs " + fixture.awayTeam.name
    });
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  fixtureList = (fixtures) => {
    const result = [];
    console.log(fixtures);

    fixtures.forEach(fixture => {
      result.push(
        <DropdownItem key={fixture.id} onClick={() => this.submitForm(fixture)} >{fixture.homeTeam.name + " vs " + fixture.awayTeam.name}</DropdownItem>
      );
    })
    return result;
  }

  render() {

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>
        {this.state.selectFixture}
      </DropdownToggle>
      <DropdownMenu>
        {this.fixtureList(this.props.fixtures)}
      </DropdownMenu>
    </Dropdown>
    );
  }
}
