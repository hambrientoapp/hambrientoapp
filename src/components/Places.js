import React, { useState, useEffect } from 'react'
import L from 'leaflet'
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet'

import places from '../data/places.js'

const styles = {
    wrapper: {
        height: '50vh',
        display: 'flex'
    },
    map: {
        flex: 1
    }
}

const geojsonMarkerOptions = {
    radius: 4,
    fillColor: '#ee4266',
    color: '#000',
    weight: 0,
    opacity: 1,
    fillOpacity: 0.4
}

function pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions)
}

export default function Places() {
    const [location, setLocation] = useState({
        lat: -70.6511887,
        lng: -33.4465536,
        zoom: 16
    })

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    zoom: 16
                })
            })
        }
    }, [])

    return (
        <div id="places" style={styles.wrapper}>
            <LeafletMap
                style={styles.map}
                center={[location.lat, location.lng]}
                zoom={location.zoom}
            >
                <TileLayer
                    attribution='🍔 HAMBRIENTOapp &nbsp;'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png"
                />
                <GeoJSON
                    data={places}
                    pointToLayer={pointToLayer}
                ></GeoJSON>
            </LeafletMap>
        </div>
    )
}