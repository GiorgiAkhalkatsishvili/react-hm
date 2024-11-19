import React from 'react'
import ProductsComponent from '../../components/ProductsComponent'
import { useSelector } from 'react-redux';


const HomePage = () => {

  const posts = useSelector((state) => state.posts.posts)

  const loading = useSelector((state) => state.posts.loading)

  return (
    <div>
      <ProductsComponent posts={posts} loading={loading}/>
    </div>
  )
}

export default HomePage;
