import React from 'react';
import LazyLoad from 'react-lazy-load';
import DesktopImage from '../img/alt_desktop_full.png';
import Header from './Header';
import Mobile from './Mobile';  
import '../scss/layout.scss';
import '../scss/disc.scss';
import { albums } from '../disc.json';

export default function Disc() {

  function renderBody() {
    return (
        <ul>
          {albums.map(album => (
            <li key={album.id}>

              {/* TRIGGER */}
              {/* <a href={`#${album.id}`} className="art-item"> */}
              <a href={`#${album.id}`} className="art-item">
                <div className="filler" />
                <LazyLoad height={120} width={120}>
                  <img alt={album.artist} src={`${process.env.PUBLIC_URL}/images/disc/${album.id}.jpg`} />
                </LazyLoad>
              </a>
              
              {/* SHOW INFO */}
              <div className="art-info" id={`${album.id}`}>
                <div className="sleeve"><img alt={album.artist} src={`${process.env.PUBLIC_URL}/images/disc/${album.id}.jpg`} /></div>
                
                <div className="art-copy">

                  <span className="artist">{album.artist}</span>
                  
                  <span className="title">{album.record}</span>
                  
                  <span className="label">{album.label}</span>
                  
                  <span className="year">{album.year}</span>
                  
                  <span className="credits">{album.credits}</span>
                  
                  
                  {/* <a target="new" className="artist" href={album.artist__URL}><span>Artist</span></a>
                  
                  <a target="new" className="discogs" href={album.discogs_URL}>Discogs</a> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
    );
  }

  return (
      // <main className="section-disc" style={{ backgroundImage: `url(${require("../img/alt_desktop_full.png")})` }}>
      <main className="section-disc">
        <LazyLoad>
          <img alt="Mountains - Alternate"
          
          sizes="(min-width: 800px) 800w, (min-width: 320px) 730w" 

          // srcset={DesktopImage + " 5456w," + MobileImage + " 730w,"}

          srcSet={DesktopImage}
          src={DesktopImage}  

          class="mountain" 
          
          />
		    </LazyLoad>
        
        <Header />
        <div className="spikes"></div>
          <section className="master-disc">
              <div className="wrapper">
              
              {renderBody()}
              </div>
          </section>
          <Mobile />
      </main>
  );
}
