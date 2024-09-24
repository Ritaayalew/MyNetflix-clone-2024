import React from 'react'
import Row from '../Row/Row';
import requests from "../../../utils/requests"

function RowList (){
  return (
    <div>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="TV Shows" fetchUrl={requests.fetchTvShow} isLargeRow={true}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default RowList;