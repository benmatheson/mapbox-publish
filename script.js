mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubWF0aGVzb24iLCJhIjoiY2xranI1bWoxMHRhejNrbnI4ZXJiemM0eSJ9.j1-iyMOIWgRx7aKfVpRTGQ';

const map = new mapboxgl.Map({
  
  container: "map",
  style: 'mapbox://styles/benmatheson/clkokb81z008a01q25qr0249y',
  center: [-91.4,  16.5],
  
  zoom: 5  
})


map.on('load', ()=>{
  
  map.on('mouseenter', 'volcanoes_points', function(e){
    
 
    console.log(e.features[0])
    

    
    map.getCanvas().style.cursor = 'pointer';
    
    
  } )
  


  
})