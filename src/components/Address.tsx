import React from "react";
import { Icon } from "@iconify/react";
import { ErrorBoundary } from "react-error-boundary";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


interface AddressProps {
    place: string;
    position: [number, number];
}

const Address: React.FC<AddressProps> = ({ place, position }) => {
    const googleMapsUrl = new URL(`https://www.google.com/maps/search/?api=1`);

    googleMapsUrl.searchParams.set('query', place);

    return (
        <ErrorBoundary fallback={<div>Failed to render address on map</div>}>
            <div style={{ height: "100%", width: "100%" }}>
                <MapContainer
                    center={position}
                    zoom={16}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} title={place}>
                        <Popup>
                            <div className="flex items-center">
                                <Icon icon="lucide:building" className="h-12 w-12 text-primary-600 mr-4" />
                                <div>
                                    <a href={googleMapsUrl.toString()} className="w-full text-secondary-600" target="_blank" rel="noopener noreferrer">
                                        {place}
                                    </a>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </ErrorBoundary>
    );
};

export default Address;
