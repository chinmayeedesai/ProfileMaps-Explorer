import React from 'react';

function Profile(props) {
    const { name, photoUrl, description, address } = props;

    const getGoogleMapsUrl = (address) => {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    };

    return (
        <div className="card bg-light text-dark d-inline-block mb-3 mx-3 px-2 py-2" style={{height: "220px"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={photoUrl} className="card-img" alt={name} style={{maxWidth:"200px", maxHeight:"200px", objectFit: "cover"}} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><strong>Address:</strong> <a href={getGoogleMapsUrl(address)} target="_blank" rel="noopener noreferrer">{address}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

