import map from './assets/avernus_map.bmp';
import Tile from './components/tile/Tile';
import './App.css';

var data = {
  1:{
    a:"a1",
    c:"c1",
    e:"e1",
    g:"g1",
    i:"i1",
  },
  15:{
    b:"b1",
    d:"d1",
    f:"f1",
    h:"h1",
    j:"j1",
  },
  2:{
    a:"a2",
    c:"c2",
    e:"e2",
    g:"g2",
    i:"i2",
  },
  25:{
    b:"b2",
    d:"d2",
    f:"f2",
    h:"h2",
    j:"j2",
  },
  3:{
    a:"a3",
    c:"c3",
    e:"e3",
    g:"g3",
    i:"i3",
  },
  35:{
    b:"b3",
    d:"d3",
    f:"f3",
    h:"h3",
    j:"j3",
  },
  4:{
    a:"a4",
    c:"c4",
    e:"e4",
    g:"g4",
    i:"i4",
  },
  45:{
    b:"b4",
    d:"d4",
    f:"f4",
    h:"h4",
    j:"j4",
  },
  5:{
    a:"a5",
    c:"c5",
    e:"e5",
    g:"g5",
    i:"i5",
  },
  55:{
    b:"b5",
    d:"d5",
    f:"f5",
    h:"h5",
    j:"j5",
  },
  6:{
    a:"a6",
    c:"c6",
    e:"e6",
    g:"g6",
    i:"i6",
  },
  65:{
    b:"b6",
    d:"d6",
    f:"f6",
    h:"h6",
    j:"j6",
  },
}



function App() {
  return (
    <div className="App">
      <div className='Outer-Container'>
        <img src={map} className="Map" alt="avernus_map" />
        <div className='Inner-Container'>
          <div className='Row1'>
            <Tile value={data[1].a}></Tile>
            <Tile value={data[1].c}></Tile>
            <Tile value={data[1].e}></Tile>
            <Tile value={data[1].g}></Tile>
            <Tile value={data[1].i}></Tile>
          </div>

          <div className='RowEven'>
            <Tile value={data[15].b}></Tile>
            <Tile value={data[15].d}></Tile>
            <Tile value={data[15].f}></Tile>
            <Tile value={data[15].h}></Tile>
            <Tile value={data[15].j}></Tile>
          </div>
          <div className='RowOdd'>
            <Tile value={data[2].a}></Tile>
            <Tile value={data[2].c}></Tile>
            <Tile value={data[2].e}></Tile>
            <Tile value={data[2].g}></Tile>
            <Tile value={data[2].i}></Tile>
          </div>
          <div className='RowEven'>
            <Tile value={data[25].b}></Tile>
            <Tile value={data[25].d}></Tile>
            <Tile value={data[25].f}></Tile>
            <Tile value={data[25].h}></Tile>
            <Tile value={data[25].j}></Tile>
          </div>
          <div className='RowOdd'>
            <Tile value={data[3].a}></Tile>
            <Tile value={data[3].c}></Tile>
            <Tile value={data[3].e}></Tile>
            <Tile value={data[3].g}></Tile>
            <Tile value={data[3].i}></Tile>
          </div>
          <div className='RowEven'>
            <Tile value={data[35].b}></Tile>
            <Tile value={data[35].d}></Tile>
            <Tile value={data[35].f}></Tile>
            <Tile value={data[35].h}></Tile>
            <Tile value={data[35].j}></Tile>
          </div>
          <div className='RowOdd'>
            <Tile value={data[4].a}></Tile>
            <Tile value={data[4].c}></Tile>
            <Tile value={data[4].e}></Tile>
            <Tile value={data[4].g}></Tile>
            <Tile value={data[4].i}></Tile>
          </div>
          <div className='RowEven'>
            <Tile value={data[45].b}></Tile>
            <Tile value={data[45].d}></Tile>
            <Tile value={data[45].f}></Tile>
            <Tile value={data[45].h}></Tile>
            <Tile value={data[45].j}></Tile>
          </div>
          <div className='RowOdd'>
            <Tile value={data[5].a}></Tile>
            <Tile value={data[5].c}></Tile>
            <Tile value={data[5].e}></Tile>
            <Tile value={data[5].g}></Tile>
            <Tile value={data[5].i}></Tile>
          </div>
          <div className='RowEven'>
            <Tile value={data[55].b}></Tile>
            <Tile value={data[55].d}></Tile>
            <Tile value={data[55].f}></Tile>
            <Tile value={data[55].h}></Tile>
            <Tile value={data[55].j}></Tile>
          </div>
          <div className='RowOdd'>
            <Tile value={data[6].a}></Tile>
            <Tile value={data[6].c}></Tile>
            <Tile value={data[6].e}></Tile>
            <Tile value={data[6].g}></Tile>
            <Tile value={data[6].i}></Tile>
          </div>
          <div className='RowEven'>
            <Tile value={data[65].b}></Tile>
            <Tile value={data[65].d}></Tile>
            <Tile value={data[65].f}></Tile>
            <Tile value={data[65].h}></Tile>
            <Tile value={data[65].j}></Tile>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
