const React = require('react');

const Index = (props) => {
  return (
    <div>
      <h1> Index </h1>


      <ul>
        {
          props.veggies.map((veggie, index) => {
            return (
              <li key={index}>
                The <a href={`/veggies/${veggie._id}`}>{veggie.name}</a> is {veggie.color}. {veggie.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

module.exports = Index;