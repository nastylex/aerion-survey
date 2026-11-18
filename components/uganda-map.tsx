'use client'

import { CircleMarker, MapContainer, TileLayer, Tooltip } from 'react-leaflet'
import type { RecordRow } from '@/lib/research-types'
import 'leaflet/dist/leaflet.css'

type UgandaMapProps = { records: RecordRow[]; expanded?: boolean }

export function UgandaMap({ records, expanded = false }: UgandaMapProps) {
  const locatedRecords = records.filter((record) => record.latitude != null && record.longitude != null)
  return (
    <div className={`uganda-map ${expanded ? 'uganda-map-expanded' : ''}`} aria-label="Map of Uganda showing consented research locations at approximate coordinates">
      <MapContainer
        className="leaflet-map"
        center={[1.3733, 32.2903]}
        zoom={expanded ? 7 : 6}
        minZoom={5}
        maxZoom={13}
        scrollWheelZoom={false}
        attributionControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors &middot; &copy; <a href="https://carto.com/attributions" target="_blank" rel="noreferrer">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />
        {locatedRecords.map((record) => (
          <CircleMarker
            key={record.id}
            center={[record.latitude!, record.longitude!]}
            radius={6}
            pathOptions={{ color: '#ff9a9e', weight: 1.5, fillColor: '#d7373f', fillOpacity: 0.86 }}
          >
            <Tooltip>{record.town ? `${record.town}, ` : ''}{record.district}</Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
      <div className="map-coordinate">UGANDA · EAST AFRICA</div>
      <div className="map-legend"><span><i className="legend-dot" /> Approximate research location</span></div>
      <span className="map-count">{locatedRecords.length.toLocaleString()} LOCATED {locatedRecords.length === 1 ? 'RESPONSE' : 'RESPONSES'}</span>
      {locatedRecords.length === 0 && <div className="map-empty-note">District-wide view · no exact participant locations</div>}
    </div>
  )
}
