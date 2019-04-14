import React, { Component } from 'react';

export class ProfileInputs extends Component {
/*   state = {
    age: 0,
    weight: 0,
    height: 0,
    bodyFat: 0,
    gender: '',
    activity: 1,
    regime: '',
  } */

  state = {
    age: 25,
    weight: 75,
    height: 192,
    bodyFat: 12,
    gender: 'male',
    activity: 1.2,
    regime: 'maintain',
  }

  submit(e) {
    e.preventDefault();
    const profileData = this.transformUnits(this.state);
    this.props.submitProfileData(profileData);
  }

  transformUnits(state) {
    state.bodyFat = this.state.bodyFat / 100;
    return state;
  }

  handleAge(e) {
    this.setState({ age: e.target.value });
  }

  handleWeight(e) {
    this.setState({ weight: e.target.value });
  }

  handleHeight(e) {
    this.setState({ height: e.target.value });
  }

  handleBodyfat(e) {
    this.setState({ bodyFat: e.target.value });
  }

  handleGender(e) {
    this.setState({ gender: e.target.value });
  }

  handleActivity(e) {
    this.setState({ activity: e.target.value });
  }

handleRegime(e) {
    this.setState({ regime: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Profile Inputs</h2>
        <form>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              value={this.state.age}
              onChange={this.handleAge.bind(this)}
              type="number"
              className="form-control"
              id="age"
              placeholder="Age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight kg</label>
            <input
              value={this.state.weight}
              onChange={this.handleWeight.bind(this)}
              type="number"
              className="form-control"
              id="weight"
              placeholder="Weight"
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height cm</label>
            <input
              value={this.state.height}
              onChange={this.handleHeight.bind(this)}
              type="number"
              className="form-control"
              id="height"
              placeholder="Height"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bodyFat">Bodyfat %</label>
            <input
              value={this.state.bodyFat}
              onChange={this.handleBodyfat.bind(this)}
              type="number"
              className="form-control"
              id="bodyFat"
              placeholder="Bodyfat"
            />
          </div>
          <div value={this.state.gender} className="radio">
            <div>
              <label>Male &nbsp;</label>
              <input id='male' onChange={this.handleGender.bind(this)} value="male" type="radio" name="optradio" />
            </div>
            <div>
              <label>Female &nbsp;</label>
              <input onChange={this.handleGender.bind(this)} value="female" type="radio" name="optradio" />
            </div>
          </div>
          <br/>
          <div value={this.state.activity} onChange={this.handleActivity.bind(this)}>
            <select className="custom-select" defaultValue="1">
              <option value="0">-- Activity Level</option>
              <option value="1">Home Day</option>
              <option value="1.2">Work Day</option>
              <option value="1.5">Work + Gym Day</option>
            </select>
          </div>
          <br/>
          <div value={this.state.regime} onChange={this.handleRegime.bind(this)}>
            <select className="custom-select">
              <option defaultValue="maintain">-- Regime</option>
              <option value="bulk">Bulk</option>
              <option value="cut">Cut</option>
              <option value="maintain">Maintain</option>
            </select>
          </div>
          <br />
          <button onClick={this.submit.bind(this)} type="submit" className="btn btn-info">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
