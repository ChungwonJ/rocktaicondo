import { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD5BN9w9KIf9IVOOgnXpLy-t63Vr-EPRww&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = function() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.362, lng: 126.935 },
        zoom: 15,
      });

      const marker = new google.maps.Marker({
        position: { lat: 37.362, lng: 126.935 },
        map,
        title: '경아아파트',
      });

      marker.addListener('click', () => {
        alert('경아아파트를 클릭했습니다.');
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default Map;
