import './ProductsComponent.css'
import { MoonLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { removePosts } from '../../Redux/postsSlice';

const ProductsComponent = ({ posts, loading}) => {
  
  const dispatch = useDispatch();

  const removePost = (id) => {
  dispatch(removePosts(id))
  }
   

  return (
    <div className='productsContainer'>
      <div className="input-container">
        <input type="text" />
         <div className="btn">
        <button>Search</button>
        </div>
        <select id="drop-down">
          <option value="">Cards</option>
          <option value="">APIS</option>
          <option value="">buttons</option>
        </select>
      </div>
      {
        loading ? <div className='loading'><MoonLoader/></div>: <div className="products">
        {
          posts.map((post) => (
            <div className='product' key={post.id}>
              <p>{post.body}</p>
              <h1>{post.title}</h1>
              <button onClick={()=> removePost(post.id)} className='btn'>Remove item</button>
            </div>
          ))
        }
      </div>
      }
    </div>
  )
}

export default ProductsComponent;
