import React, { Component } from 'react';

export class ProfileInputs extends Component {
  state = {
    age: 0,
    weight: 0,
    height: 0,
    bodyFat: 0,
    gender: '',
    activity: 1,
    regime: '',
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

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Profile Inputs</h1>
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
            <label htmlFor="weight">Height cm</label>
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
          <div value={this.state.gender}  className="radio">
            <label>
              <input onChange={this.handleGender.bind(this)} value="male" type="radio" name="optradio" />
              Male
            </label>
            <label>
              <input onChange={this.handleGender.bind(this)} value="female" type="radio" name="optradio" />
              Female
            </label>
          </div>
          <div>
            <select className="custom-select" defaultValue="0">
              <option value="0">-- Activity Level</option>
              <option value="1">Home Day</option>
              <option value="2">Work Day</option>
              <option value="3">Work + Gym Day</option>
            </select>
          </div>
          <div>
            <select className="custom-select">
              <option selected>-- Regime</option>
              <option value="1">Bulk</option>
              <option value="2">Cut</option>
              <option value="3">Maintain</option>
            </select>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
