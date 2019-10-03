import React, { useState, useEffect } from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'

export default function Places() {
    const [location, setLocation] = useState({
        lat: -70.6511887,
        lng: -33.4465536,
        zoom: 16
    })

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords.latitude, position.coords.longitude)

                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    zoom: 16
                })
            })
        }
    }, [])

    return (
        <div id="places">
            <LeafletMap center={[location.lat, location.lng]} zoom={location.zoom}>
                <TileLayer
                    attribution='🍔 HAMBRIENTOapp &nbsp;'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                />
            </LeafletMap>
        </div>
    )
}