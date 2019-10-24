import React, { useState, useEffect } from 'react'
import L from 'leaflet'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'

const styles = {
    wrapper: {
        height: '50vh',
        display: 'flex'
    },
    map: {
        flex: 1
    }
}

export default function Places() {
    const [location, setLocation] = useState({
        lng: -33.4610432,
        lat: -70.680576,
        zoom: 16
    })
    
    let icon = L.icon({
        iconUrl: 'https://twemoji.maxcdn.com/v/12.1.3/72x72/1f60b.png',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    })
 
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocation({
                    lng: position.coords.longitude,
                    lat: position.coords.latitude,
                    zoom: 16
                })
            })
        }
    }, [])

    return (
        <div id="places" style={styles.wrapper}>
            <LeafletMap
                style={styles.map}
                center={[location.lng, location.lat]}
                zoom={location.zoom}
            >
                <TileLayer
                    attribution='🍔 HAMBRIENTOapp &nbsp;'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                />
                <Marker
                   position={[location.lng, location.lat]}
                   icon={icon} 
                >
                    <Popup>
                       You are here!
                    </Popup>
                </Marker>
            </LeafletMap>
        </div>
    )
}