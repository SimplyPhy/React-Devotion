
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
    points: 17025,
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
      buttonBool: true,
    };
  },

  onNameChange: function(e) {
    this.setState({name: e.target.value});
    if (e.target.value.trim() != "") {
      this.setState({buttonBool: false});
    } else {
      this.setState({buttonBool: true});
    }
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
      <div className="new-person-container">
        <form className="new-person-form" onSubmit={this.onSubmit}>
          <input className="input-name" type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Name"/>
          <input className="input-points" type="number" value={this.state.points} onChange={this.onPointsChange} placeholder="Initial Points"/>
          <input className="input-button" type="submit" value="Add Person" disabled={this.state.buttonBool} />
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
      confirmBool: 'remove',
      points: 0,
      booster: 'unhappy-face',
    };
  },

  selectPerf: function(perf) {
    var newClass = ['hide','hide','hide','hide'];

    if (perf === 0) {
      newClass[0] = 'select-empty gem-selected';
      this.setState({
        gemBools: newClass,
      });
    } else if (perf === 1) {
      newClass[1] = 'select-dark gem-selected';
      this.setState({
        gemBools: newClass,
        points: 1
      });
    } else if (perf === 2) {
      newClass[2] = 'select-light gem-selected';
      this.setState({
        gemBools: newClass,
        points: 2
      });
    } else if (perf === 3) {
      newClass[3] = 'select-bright gem-selected';
      this.setState({
        gemBools: newClass,
        points: 3
      });
    }

    this.setState({
      confirmBool: 'fade-in',
    });

  },

  submit: function(confirm) {

    var newClass = ['hide','hide','hide','hide'];

    if (this.state.points === 0) {
      if (confirm) {
        newClass[0] = 'select-empty-confirm gem-selected';
        this.setState({gemBools: newClass, booster: 'plus-zero'});
      } else {
        newClass[0] = 'select-empty-decline gem-selected';
        this.setState({gemBools: newClass});
      }
    } else if (this.state.points === 1) {
      if (confirm) {
        newClass[1] = 'select-dark-confirm gem-selected';
        this.setState({gemBools: newClass, booster: 'plus-one'});
      } else {
        newClass[1] = 'select-dark-decline gem-selected';
        this.setState({gemBools: newClass});
      }
    } else if (this.state.points === 2) {
      if (confirm) {
        newClass[2] = 'select-light-confirm gem-selected';
        this.setState({gemBools: newClass, booster: 'plus-two'});
      } else {
        newClass[2] = 'select-light-decline gem-selected';
        this.setState({gemBools: newClass});
      }
    } else if (this.state.points === 3) {
      if (confirm) {
        newClass[3] = 'select-bright-confirm gem-selected';
        this.setState({gemBools: newClass, booster: 'plus-three'});
      } else {
        newClass[3] = 'select-bright-decline gem-selected';
        this.setState({gemBools: newClass});
      }
    }

    this.setState({confirmBool: 'fade-out'});

    window.setTimeout(function() {
      this.setState({
        confirmBool: 'remove',
        gemBools: ['fade-in','fade-in','fade-in','fade-in'],
      });
    }.bind(this), 750);

    window.setTimeout(function() {
      this.setState({
        booster: 'unhappy-face',
      });
    }.bind(this), 1500);

    if (confirm === true) {
      this.props.addPoints(this.state.points);
    }

    this.state.points = 0;
  },

  render: function() {
    return (
      <div className="perf-container">
        <div className="perf-header">
          <h3>Today's Performance</h3>
        </div>
        <div className="perf-selection">
          <div className={"gem-empty gem-selection " + this.state.gemBools[0]} onClick={function() {this.selectPerf(0)}.bind(this)}></div>
          <div className={"gem-dark gem-selection " + this.state.gemBools[1]} onClick={function() {this.selectPerf(1)}.bind(this)}></div>
          <div className={"gem-light gem-selection " + this.state.gemBools[2]} onClick={function() {this.selectPerf(2)}.bind(this)}></div>
          <div className={"gem-bright gem-selection " + this.state.gemBools[3]} onClick={function() {this.selectPerf(3)}.bind(this)}></div>
          <div className={"perf-confirmation " + this.state.confirmBool}>
            <div className="perf-msg">Confirm Selection?</div>
            <button className="perf-accept" onClick={function(){this.submit(true)}.bind(this)}>Yes</button>
            <button className="perf-decline" onClick={function(){this.submit(false)}.bind(this)}>No</button>
          </div>
        </div>
        <img className={"point-booster "+ this.state.booster} src={"./img/"+ this.state.booster +".png"} />
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
      return gemClass += "status-gem-lightless";
    } else if (points >= 100 && points < 300){
      devotionStatus = "Crimson";
      return gemClass += "status-gem-crimson";
    } else if (points >= 300 && points < 700){
      devotionStatus = "Ember";
      return gemClass += "status-gem-ember";
    } else if (points >= 700 && points < 1500){
      devotionStatus = "Sol";
      return gemClass += "status-gem-sol";
    } else if (points >= 1500 && points < 3100){
      devotionStatus = "Jade";
      return gemClass += "status-gem-jade";
    } else if (points >= 3100 && points < 6300){
      devotionStatus = "Cerulean";
      return gemClass += "status-gem-cerulean";
    } else if (points >= 6300 && points < 12700){
      devotionStatus = "Violet";
      return gemClass += "status-gem-violet";
    } else if (points >= 12700 && points < 25500){
      devotionStatus = "Prismatic";
      return gemClass += "status-gem-prismatic";
    } else if (points >= 25500 && points < 51100){
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

  addPoints: function(index, newPoints) {
    this.state.people[index].points += newPoints;
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
            addPoints={function(newPoints) {this.addPoints(index, newPoints)}.bind(this)}
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
