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

function PersonalDisplay(props) {
  return (
    <table className="personal-stats">
      <tbody>
        <tr>
          <td>{props.name}</td>
        </tr>
        <tr>
          <td>{props.status}</td>
          <td>{props.wealth}</td>
        </tr>
      </tbody>
    </table>
  );
}

PersonalDisplay.propTypes = {
  name: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
  wealth: React.PropTypes.number.isRequired,
};

var PersonalDisplayContainer = React.createClass({
  getInitialState: function() {
    return {
      status: "",
      wealth: 0,
    };
  },

  render: function() {
    return (
      <PersonalDisplay />
    );
  }
});

function DailyPerformance() {
  return (
    <div className="perf-div">
      <h3>Daily Performance</h3>
      <div className="perf-selection">
        <div className="gem-selection gem-empty"></div>
        <div className="gem-selection gem-dark"></div>
        <div className="gem-selection gem-light"></div>
        <div className="gem-selection gem-bright"></div>
      </div>
    </div>
  );
}

var DailyPerformanceContainer = React.createClass({

  getInitialState: function() {
    return {
      selected: "",
      confirmation: false,
    };
  },

  onSelect: function(selection) {
    this.setState({
      selected: selection,
      confirmation: true,
    });
  },

  render: function() {
    return (
      <DailyPerformance />
    );
  },
});



