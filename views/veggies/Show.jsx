const React = require('react');
const Show = (props) => {
  return (
    <div>
      <h1> Show Page </h1>

      <p>
        The {props.veggies.name} is {props.veggies.color}
        {props.veggies.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
        </p>
    </div>
  )
}

module.exports = Show;