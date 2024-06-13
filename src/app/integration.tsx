import React from 'react'
import Image from 'next/image'
import fs from 'fs'
import Link from 'next/link'

const integration = async () => {
  'use server'
  // find svg that start with 'int-'
  const files = fs.readdirSync(process.cwd() + '/public')
  const integrations = files.filter(file => file.startsWith('int-'))

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-8 lg:gap-8">
      {integrations.map((integration, index) => (
        <div key={index} className="flex flex-col items-center text-center gap-4 max-w-sm hover:bg-purple-300 p-2 rounded-xl">

          <Link href={`/integrations/${integration.replace('int-', '').replace('.svg', '')}`} >
            <div className="flex flex-col items-center gap-4">
              <Image src={`/${integration}`} width={64} height={64} alt={integration} />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-primary font-semibold text-xl">{integration.replace('int-', '').replace('.svg', '').replace('-', ' ')} integration</h3>
                  <p className="text-tertiary font-normal text-lg">
                    Work faster and smarter by integrating directly with {integration.replace('int-', '').replace('.svg', '')}, right in the app.
                  </p>
                </div>
                <Link href={`/integrations/${integration.replace('int-', '').replace('.svg', '')}`} className="font-semibold text-base text-tertiary-bg">
                  View integration
                  <Image src="/arrow-right.svg" width={20} height={20} alt="arrow-right" className="inline" />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default integration
