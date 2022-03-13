import appConfig from 'config'
import Image from 'next/image'
import { FC } from 'react'

interface IWorkDetail {
  workExperience: any
}

const WorkDetail: FC<IWorkDetail> = ({ workExperience }) => {
  return (
    <li className="flex items-start py-4">
      <div className="workImage">
        <Image
          src={workExperience.company.logo}
          alt={`${appConfig.global.fullName}'s work experience at ${workExperience.company.name}`}
          height={56}
          width={56}
          quality={80}
        />
      </div>
      <div className="ml-4">
        <p className="text-lg font-medium">{workExperience.role}</p>
        <h3 className="text-sm">
          {workExperience.company.name} - {workExperience.location}
        </h3>

        <div className="mt-1 text-sm text-primary-2">
          {workExperience.experience.from} - {workExperience.experience.to}
          {workExperience.experience.total ? ` • ${workExperience.experience.total}` : ''}
        </div>

        <div className="mt-2 text-sm">
          <ul className="list-disc">
            {workExperience.highlights.map((highlight: any, index: number) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="mt-1">
          {workExperience.company.urls.map((url: any, index: number) => (
            <a key={index} href={url.href} className="link mr-2 text-sm" target="_blank" rel="noopener noreferrer">
              {url.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  )
}

export default WorkDetail
