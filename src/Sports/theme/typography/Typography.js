import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'

const TrainingVideo = ({ title, description, videoUrl }) => {
  return (
    <div className="mb-4">
      <h5>{title}</h5>
      <p>{description}</p>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={videoUrl}
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </div>
  )
}

const TrainingVideos = () => {
  const videoData = [
    {
      title: 'Training Video 1',
      description: 'Introduction to the basics of training.',
      videoUrl: 'https://www.youtube.com/embed/video1',
    },
    {
      title: 'Training Video 2',
      description: 'Advanced techniques in training.',
      videoUrl: 'https://www.youtube.com/embed/video2',
    },
    {
      title: 'Training Video 3',
      description: 'Mastering skills through practice.',
      videoUrl: 'https://www.youtube.com/embed/video3',
    },
    // Add more videos as needed
  ]

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Training Videos
        </CCardHeader>
        <CCardBody>
          {videoData.map((video, index) => (
            <TrainingVideo
              key={index}
              title={video.title}
              description={video.description}
              videoUrl={video.videoUrl}
            />
          ))}
        </CCardBody>
      </CCard>
    </>
  )
}

export default TrainingVideos
