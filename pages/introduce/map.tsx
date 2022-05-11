import { useEffect } from 'react';
import { NAVER_MAP_CLIENT_ID } from '../../config/config';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      var mapOptions = {
        center: new naver.maps.LatLng(36.624904, 127.457856),
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      };

      var map = new naver.maps.Map('map', mapOptions);

      var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(36.624904, 127.457856),
        map: map,
      });
    };

    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <div id="map" />
    </>
  );
};

export default Map;
