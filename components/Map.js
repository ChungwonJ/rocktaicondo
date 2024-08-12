import { useEffect } from 'react';

const Map = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_PUBLIC_KEY}-t63Vr-EPRww&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = function() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: props.lat, lng: props.lng },
        zoom: 15,
      });

      // const marker = new google.maps.Marker({
      //   position: { lat: props.lat, lng: props.lng },
      //   map,
      //   title: props.title,
      // });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '350px' }}></div>;
};

export default Map;
