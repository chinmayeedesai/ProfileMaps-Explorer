import React, { useState } from 'react';
import Profile from './Profile';
import profilesData from './profilesData';
import Navbar from './Navbar';

function App() {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProfiles, setFilteredProfiles] = useState(profilesData);

    
    const handleSearchInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        
        const filtered = profilesData.filter(profile =>
            profile.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProfiles(filtered);
    };

    return (
        <div>
            <Navbar handleSearchInputChange={handleSearchInputChange} />
            <div className="profiles-container">
                {filteredProfiles.map(profile => (
                    <Profile
                        key={profile.id}
                        name={profile.name}
                        photoUrl={profile.photoUrl}
                        description={profile.description}
                        address={profile.address}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
