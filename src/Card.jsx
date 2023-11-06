
const Card = ({items}) => {
  return (
    <div>
        {items.map((item)=>{
      <div key={item.id}>
        <h2 > {item.title}</h2>
      <img width={'200px'} src={item.image} />
      <p>{item.description}</p>
      <button className="btn btn-primary">Add to Card</button>
      </div>
    })}

    </div>
  )
}

export default Card
