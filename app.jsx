//  Primary Functionality:
//    Ability to add new people, including starting points and status (default 0)
//    Ability to select a daily performance marker, with confirmation message
//      Hovering over and selecting a performance marker cause it to gain full opacity (diff img)
//      Gemstone slides left when clicked, other gemstones disappear, and confirm msg appears to right
//      Confirming selection

// PersonalStatus and DailyPerformance are components inside PersonalDisplays,
// PersonalDisplays are contained within and take up most of Application,
// Application displays PersonalDisplays and [yet unmade] NewPersonInput

var PEOPLE = [
  {
    name: "Elon Musk",
    points: 65700,
    id: 1,
  },
  {
    name: "Brandon Sanderson",
    points: 42250,
    id: 2,
  },
  {
    name: "Eric Phy",
    points: 7560,
    id: 3,
  },
];

var devotionStatus = "lightless",
    nextId         = 4;

// ============================================================================================
// ============================================================================================

var AddPersonForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      name: "",
      points: "",
    };
  },

  onNameChange: function(e) {
    this.setState({name: e.target.value});
  },

  onPointsChange: function(e) {
    this.setState({points: parseInt(e.target.value)});
  },

  onSubmit: function(e) {
    e.preventDefault();

    this.props.onAdd(this.state.name, this.state.points);
    this.setState({name: "", points: ""});
  },

  render: function() {
    return (
      <div className="person-form">
        <form onSubmit={this.onSubmit}>
          <input className="input-name" type="text" value={this.state.name} onChange={this.onNameChange} />
          <input className="input-points" type="number" value={this.state.points} onChange={this.onPointsChange} />
          <input className="input-button" type="submit" value="Add Person" />
        </form>
      </div>
    );
  }
});

// ============================================================================================
// ============================================================================================

function PersonalStatus(props) {
  return (
    <div className="status-container">
      <div className="status-header">
        <h2>{props.name}</h2>
      </div>
      <div className="status-body">
        <div className="status-gem-container">
          <div className={props.gemClass}></div>
        </div>
        <div className="status-devotion-container">
          <div className="devotion-div devotion-tier">{props.status}</div>
          <div className="devotion-div devotion-points">{props.points}</div>
        </div>
      </div>
    </div>
  );
}

PersonalStatus.propTypes = {
  name: React.PropTypes.string.isRequired,
  gemClass: React.PropTypes.string,
  status: React.PropTypes.string,
  points: React.PropTypes.number,
};

// ============================================================================================
// ============================================================================================

var DailyPerformance = React.createClass({
  propTypes: {
    addPoints: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      gemBools: ['', '', '', ''], // empty, dark, light, bright
      confirmBool: '',
      points: 0,
    };
  },

  selectPerf: function(perf) {
    this.state.gemBools.forEach(function(gemBool){gemBool = 'fade-out'});

    if (perf === 0) {
      this.state.gemBools[0] = 'select-empty';
    } else if (perf === 1) {
      this.state.gemBools[1] = 'select-dark';
      this.state.points = 1;
    } else if (perf === 2) {
      this.state.gemBools[2] = 'select-light';
      this.state.points = 2;
    } else if (perf === 3) {
      this.state.gemBools[3] = 'select-bright';
      this.state.points = 3;
    }

    this.state.confirmBool = 'perf-selection-active';
    // this.setState();
  },

  submit: function(confirm) {

    var fadeIn = [0,1,2,3];

    if (this.state.points === 0) {
      if (confirm) {
        setState({gemBools[0]: 'select-empty-confirm'});
        //this.state.gemBools[0] = 'select-empty-confirm';
      } else {
        setState({gemBools[0]: ''});
        // this.state.gemBools[0] = '';
        fadeIn = [1,2,3];
      }
    } else if (this.state.points === 1) {
      if (confirm) {
        setState({gemBools[1]: 'select-dark-confirm'});
        // this.state.gemBools[1] = 'select-dark-confirm';
      } else {
        setState({gemBools[1]: 'select-dark-decline'});
        // this.state.gemBools[1] = 'select-dark-decline';
        fadeIn = [0,2,3];
      }
    } else if (this.state.points === 2) {
      if (confirm) {
        setState({gemBools[2]: 'select-light-confirm'});
        // this.state.gemBools[2] = 'select-light-confirm';
      } else {
        setState({gemBools[2]: 'select-light-decline'});
        // this.state.gemBools[2] = 'select-light-decline';
        fadeIn = [0,1,3];
      }
    } else if (this.state.points === 3) {
      if (confirm) {
        setState({gemBools[3]: 'select-bright-confirm'});
        // this.state.gemBools[3] = 'select-bright-confirm';
      } else {
        setState({gemBools[3]: 'select-bright-decline'});
        // this.state.gemBools[3] = 'select-bright-decline';
        fadeIn = [0,1,2];
      }
    }

    setState({confirmBool: 'perf-selection-inactive'});
    // this.state.confirmBool = 'perf-selection-inactive';

    // setTimeout(function() {
    //   this.state.confirmBool = 'display-none';
    //   this.fadeIn.forEach(function(gem){this.state.gemBools[gem] = 'fade-in'});
    // }, 750);

    // this.setState(this.state);

    // if (confirm === true) {
    //   this.props.addPoints(this.state.points);
    //   this.state.points = 0;
    // } else if (confirm === false) {
    //   this.state.points = 0;
    // }

    /*** I don't know if this should happen before or after setState ***/
    // setTimeout(function() {
    //   this.state.gemBools.forEach(function(gemBool){gemBool = 'fade-in'});
    //   this.state.confirmBool = 'display-none';
    // }, 750);

  },

  addPoints: function(points) {

  },

  decline: function(points) {

  },

  render: function() {
    return (
      <div className="perf-container">
        <div className="perf-header">
          <h3>Today's Performance</h3>
        </div>
        <div className="perf-selection">
          <div className={"gem-selection gem-empty " + this.state.gemBools[0]} onClick={this.selectPerf(0)}></div>
          <div className={"gem-selection gem-dark " + this.state.gemBools[1]} onClick={this.selectPerf(1)}></div>
          <div className={"gem-selection gem-light " + this.state.gemBools[2]} onClick={this.selectPerf(2)}></div>
          <div className={"gem-selection gem-bright " + this.state.gemBools[3]} onClick={this.selectPerf(3)}></div>
          <div className="perf-confirmation">
            <div className={"perf-msg " + this.state.confirmBool}>Confirm Selection?</div>
            <button className="perf-accept" onClick={this.submit(true)}>Yes</button>
            <button className="perf-decline" onClick={this.submit(false)}>No</button>
          </div>
        </div>
      </div>
    );
  }
});

// ============================================================================================
// ============================================================================================

function PersonalDisplay(props) {
  return (
    <div className="personal-display">
      <PersonalStatus
        name={props.name}
        gemClass={props.gemClass}
        status={props.status}
        points={props.points} />
      <DailyPerformance addPoints={props.addPoints} />
    </div>
  );
}

PersonalDisplay.propTypes = {
  name: React.PropTypes.string.isRequired,
  gemClass: React.PropTypes.string,
  status: React.PropTypes.string,
  points: React.PropTypes.number,
  addPoints: React.PropTypes.func.isRequired,
};

// ============================================================================================
// ============================================================================================

var Application = React.createClass({

  propTypes: {
    initialPeople: React.PropTypes.array.isRequired,
  },

  getInitialState: function() {
    return {
      people: this.props.initialPeople,
    };
  },

  onPersonAdd: function(name, points) {
    this.state.people.push({
      name: name,
      points: points,
      id: nextId,
    });
    this.setState(this.state);
    nextId += 1;
  },

  getGemClass: function(points) {
    var gemClass = "status-gem ";

    if (points < 100 ) {
      return gemClass += "lightless";
    } else if (points >= 100 && points < 300){
      devotionStatus = "Crimson";
      return gemClass += "status-gem-crimson";
    } else if (points >= 301 && points < 700){
      devotionStatus = "Ember";
      return gemClass += "status-gem-ember";
    } else if (points >= 701 && points < 1500){
      devotionStatus = "Sol";
      return gemClass += "status-gem-sol";
    } else if (points >= 1501 && points < 3100){
      devotionStatus = "Jade";
      return gemClass += "status-gem-jade";
    } else if (points >= 3101 && points < 6300){
      devotionStatus = "Cerulean";
      return gemClass += "status-gem-cerulean";
    } else if (points >= 6301 && points < 12700){
      devotionStatus = "Violet";
      return gemClass += "status-gem-violet";
    } else if (points >= 12701 && points < 25500){
      devotionStatus = "Prismatic";
      return gemClass += "status-gem-prismatic";
    } else if (points >= 25501 && points < 51100){
      devotionStatus = "Ethereal";
      return gemClass += "status-gem-ethereal";
    } else if (points >= 51100){
      devotionStatus = "Eternal";
      return gemClass += "status-gem-eternal";
    }
  },

  getStatus: function(points) {
    var status = "Lightless",
        classes = [ 100, 300, 700, 1500, 3100, 6300, 12700, 25500 ];

    if (points < 100) {
      return "Lightless";
    }
    if (points >= 51100) {
      return devotionStatus;
    }

    classes.map(function(tier, index) {
      var tierPerc = 0.11;
      var currentValue = tier;
      var currentDiff = tier + 100;
      for (var i = 0; i < 9; i++) {
        if (i === 8) {tierPerc = 0.12} else {tierPerc = 0.11}
        if (points < currentValue + currentDiff*tierPerc && points >= currentValue) {
          if (i === 0) {
            status = ("Dull " + devotionStatus);
          } else if (i === 1) {
            status = ("Dim " + devotionStatus);
          } else if (i === 2) {
            status = ("Faint " + devotionStatus);
          } else if (i === 3) {
            status = ("Clear " + devotionStatus);
          } else if (i === 4) {
            status = ("Pure " + devotionStatus);
          } else if (i === 5) {
            status = ("Vivid " + devotionStatus);
          } else if (i === 6) {
            status = ("Lustrous " + devotionStatus);
          } else if (i === 7) {
            status = ("Radiant " + devotionStatus);
          } else if (i === 8) {
            status = ("Brilliant " + devotionStatus);
          }
        }
        currentValue = currentValue + currentDiff*tierPerc;
      }
    })
    return status;
  },

  addPoints: function(index, perf) {
    this.state.people[index].points += perf;
    this.setState(this.state);
  },

  render: function() {
    return (
      <div className="app-container">
      <AddPersonForm onAdd={this.onPersonAdd} />
      {this.props.initialPeople.map(function(person, index) {
        return (
          <PersonalDisplay
            name={person.name}
            gemClass={this.getGemClass(person.points)}
            status={this.getStatus(person.points)}
            points={person.points}
            addPoints={function(perf) {this.addPoints(index, perf)}.bind(this)}
            key={person.id}
          />
        );
      }.bind(this))}
      </div>
    );
  }
});

// ============================================================================================
// ============================================================================================


ReactDOM.render(<Application initialPeople={PEOPLE}/>, document.querySelector('.app'));
