import React from 'react'
import fs from 'fs'
import IconCard from './iconCard'

const integration = async () => {
  'use server'
  // find svg that start with 'int-'
  const files = fs.readdirSync(process.cwd() + '/public')
  const integrations = files.filter(file => file.startsWith('int-'))
  const cleanIntegrations = integrations.map(integration => integration.replace('int-', '').replace('.svg', '').replace(/-/g, ' '))
  return (
    // instead of a flex div I need a grid, 1 column mobile, 3 desktop
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {integrations.map((integration, index) => (
        <IconCard
          key={index}
          src={integration}
          alt={cleanIntegrations[index]}
          iconWidth={64}
          iconHeight={64}
          title={cleanIntegrations[index]}
          description={`Work faster and smarter by integrating directly with ${cleanIntegrations[index]} right in the app.`}
          buttonText="View Integration"
          buttonLink={`/integrations/${cleanIntegrations[index]}`}
        />
      ))}
    </div>
  )
}

export default integration
