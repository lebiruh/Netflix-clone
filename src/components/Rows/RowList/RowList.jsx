import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={false}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={false}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} isLargeRow={false}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies} isLargeRow={false}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow={false}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow={false}/>
      <Row title="TV shows" fetchUrl={requests.fetchTvShow} isLargeRow={false}/>

    </>
  )
}

export default RowList