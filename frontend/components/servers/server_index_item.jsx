import React from 'react';
import { Link } from 'react-router-dom';

const ServerIndexItem = ({ server }) => {
  // Placeholder for server image -- first letter
  const serverIcon = (
    <div>
      {server.name[0]}
    </div>
  )

  return (
    <li>
      <Link to={`/channels/${server.id}`} className="servers-nav-icon"> 
        {serverIcon}

        <div className="tooltip">
          {server.name}
        </div>
      </Link>
    </li>
  )
}

export default ServerIndexItem;