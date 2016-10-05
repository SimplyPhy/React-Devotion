//  Primary Functionality:
//    Ability to add new people, including starting wealth and status (default 0)
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
    status: "Ethereal",
    wealth: 65700,
    id: 1,
  },
  {
    name: "Brandon Sanderson",
    status: "Prismatic",
    wealth: 42250,
    id: 2,
  },
  {
    name: "Eric Phy",
    status: "Jade",
    wealth: 7560,
    id: 3,
  },
];

// ============================================================================================
// ============================================================================================

var addNewPerson = React.createClass({
  render: function() {
    return (
      <div></div>
    );
  }
});

// ============================================================================================
// ============================================================================================

function PersonalStatus(props) {
  return (
    <div className="status-container">
      <div className="status-header">
        <h2>Happy</h2>
      </div>
      <div className="status-body">
        <div className="status-gem-container">
          <div className="gem-crimson status-gem"></div>
        </div>
        <div className="status-devotion-container">
          <div className="devotion-div devotion-tier">Dull Crimson</div>
          <div className="devotion-div devotion-points">107</div>
        </div>
      </div>
    </div>
  );
}

PersonalStatus.propTypes = {
  name: React.PropTypes.string,
  gemClass: React.PropTypes.func,
  status: React.PropTypes.func,
  devotionCount: React.PropTypes.func,
};

// ============================================================================================
// ============================================================================================

function DailyPerformance(props) {
  return (
    <div className="perf-container">
      <div className="perf-header">
        <h3>Today's Devotion</h3>
      </div>
      <div className="perf-selection">
        <div className="gem-selection gem-empty" ></div>
        <div className="gem-selection gem-dark" ></div>
        <div className="gem-selection gem-light" ></div>
        <div className="gem-selection gem-bright" ></div>
        <div className="perf-confirmation">
          <div className="perf-msg">Confirm Selection?</div>
          <button className="perf-accept">Yes</button>
          <button className="perf-decline">No</button>
        </div>
      </div>
    </div>
  );
}

DailyPerformance.propTypes = {

};

// ============================================================================================
// ============================================================================================

function PersonalDisplay(props) {
  return (
    <div className="personal-display">
      <PersonalStatus />
      <DailyPerformance />
    </div>
  );
}

PersonalDisplay.propTypes = {

};

// =======================================================

var PersonalDisplayContainer = React.createClass({
  render: function() {
    return <PersonalDisplay />;
  }
});

// ============================================================================================
// ============================================================================================

var Application = React.createClass({
  propTypes: {
    initialPeople: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      initialPeople: PEOPLE,
    };
  },

  render: function() {
    return (
      <div className="app-container">
      {this.props.initialPeople.map(function(person, index) {
        return (
          <PersonalDisplayContainer />
        );
      }.bind(this))}
      </div>
    );
  }
});

// ============================================================================================
// ============================================================================================


ReactDOM.render(<Application initialPeople={PEOPLE}/>, document.querySelector('.app'));
