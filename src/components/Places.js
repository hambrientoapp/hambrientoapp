import React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'

export default function Places() {
    return (
        <div id="places">
            <LeafletMap center={[-33.4465536, -70.6511887]} zoom={16}>
                <TileLayer
                    attribution='🍔 HAMBRIENTOapp &nbsp;'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                />
            </LeafletMap>
        </div>
    )
}