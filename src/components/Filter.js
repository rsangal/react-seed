import React, {Component} from 'react';

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
      showExtras: false,
    }
    this.neighborhoods = this.neighborhoods.bind(this)
    this.houseTypes = this.houseTypes.bind(this)
    this.beds = this.beds.bind(this)
    this.bathroom = this.bathroom.bind(this)
  }

  componentWillMount() {
    this.props.populateAction()
  }

  neighborhoods() {
    if(this.props.globalState.populateFormsData.neighborhoods !== undefined) {
      var {neighborhoods} = this.props.globalState.populateFormsData
      console.log(neighborhoods);
      return neighborhoods.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  houseTypes() {
    if(this.props.globalState.populateFormsData.houseTypes !== undefined) {
      var {houseTypes} = this.props.globalState.populateFormsData
      console.log(houseTypes);
      return houseTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  beds() {
    if(this.props.globalState.populateFormsData.beds !== undefined) {
      var {beds} = this.props.globalState.populateFormsData
      console.log(beds);
      return beds.map((item) => {
        return (
          <option key={item} value={item}>{item}+ br</option>
        )
      })
    }
  }

  bathroom() {
    if(this.props.globalState.populateFormsData.bathroom !== undefined) {
      var {bathroom} = this.props.globalState.populateFormsData
      console.log(bathroom);
      return bathroom.map((item) => {
        return (
          <option key={item} value={item}>{item}+ ba</option>
        )
      })
    }
  }

  // dropDown = () => {
  //   this.setState(prevState =>({
  //     showExtras: !prevState.showExtras,
  //   }))
  // }

render () {
  return (
    <section id="filter">
      <div className="inside">

        <div className='button-container'>
          <div className='inner-button-container'>
            <div className='container'>
              <div className='inner-neighborhood-container' style={{border:'1px solid black',borderRadius:'8px'}}>
                <select name="neighborhood" className="filter-neighborhood" onChange={this.props.change}>
                  <option value='All'>All Cities</option>
                  {this.neighborhoods()}
                </select>
              </div>
            </div>

            <div className='container'>
              <div className='inner-house-container' style={{border:'1px solid black',borderRadius:'8px'}}>
                <select name="houseType" className="filter-houseType" onChange={this.props.change}>
                  <option value='All'>All Types</option>
                    {this.houseTypes()}
                </select>
              </div>
            </div>

            <div className='container'>
              <div className='inner-bedrooms-container' style={{border:'1px solid black',borderRadius:'8px'}}>
                <select name="bedrooms" className=" filter-rooms" onChange={this.props.change}>
                  {this.beds()}
                </select>
              </div>
            </div>

            <div className='container'>
              <div className='inner-baths-container' style={{border:'1px solid black',borderRadius:'8px'}}>
                <select name="baths" className="filter-baths" onChange={this.props.change}>
                  {this.bathroom()}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div id="extra-filters" className="filter-extras">
          <div className='extras-wrapper'>
            <span className='filter-title'>Extras |</span>
            <label htmlFor="extras">
              <span style={{fontWeight:'300'}}>Pool</span>
                <input name='pool' value='pool' type='checkbox' onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span style={{fontWeight:'300'}}>Two Car Garage</span>
                <input name='two_car_garage' value='two_car_garage' type='checkbox' onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span style={{fontWeight:'300'}}>Finished Basement</span>
                <input name='finished_basement' value='finished_basement' type='checkbox' onChange={this.props.change}/>
            </label>
          </div>
        </div>

      </div>
    </section>
  );
}
}
export default Filter;
