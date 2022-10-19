import './Food.scss';

export default function Food({ bg, name, en_name, price, content_one, content_two }
  : { bg: string, name: string, en_name: string, price: string, content_one: string, content_two: string, }) {
  return (
    <div className="food-info">
      <div className="image">
        <img src={bg} alt="" />
      </div>
      <h4 className='name'>{name}</h4>
      <p className='en-name'>{en_name}</p>
      <p className='price'>{price}</p>
      <p className='content'>{content_one}</p>
      <p className='content'>{content_two}</p>
    </div>
  )
}