import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Featured from './components/Featured'
import UnderFeatured from './components/UnderFeatured'
import Map from './components/Map'
import Carrousel from './components/Carrousel';


export default () =>{




return (<div className='page'>


  <Featured className='featured' />
  <UnderFeatured className='underfeat' />
  <section className='middle--block'>
  <Map className='map'/>
  <Carrousel className='carrousel' />
  </section>

</div>
)
}
