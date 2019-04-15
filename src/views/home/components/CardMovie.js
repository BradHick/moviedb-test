import React from 'react';

import { Card, Icon } from 'framework7-react';

const CardMovie = props => (
  <Card expandable>
    <div style={{ padding: 10, display: 'flex' }}>
      <img src={props.image} style={{ height: 150, borderRadius: 5 }} />
      <div style={{ paddingLeft: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{ flex: 1, margin: 0, color: '#404040', textAlign: 'left' }}>{props.title}</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: 22, color: '#D0D0D0', fontWeight: 'bold', marginRight: 5 }}>{props.vote}</span>
            <Icon
              f7='star_fill'
              color='yellow'
            />
          </div>
        </div>
        <p style={{ color: '#D1D1D1', margin: 0, textAlign: 'left' }}>Data de lançamento: {props.release}</p>
        <p className='block-with-text' style={{ color: '#919191', margin: 0, marginTop: 10, textAlign: 'left' }}>{props.description}</p>
        {props.adult && (
          <div style={{ backgroundColor: '#EF53504F', padding: 3, marginTop: 10, borderRadius: 5, width: 30, color: '#B71C1C', fontWeight: 'bold'  }}>
            +18
          </div>
        )}
      </div>
    </div>
  </Card>
);

export default CardMovie;