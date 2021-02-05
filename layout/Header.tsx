export default function Header(props: any): JSX.Element{
   return (
     <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <svg width="63px" height="47px" viewBox="0 0 126 94" {...props}>
            <defs>
              <linearGradient
                x1="74.916705%"
                y1="42.4643507%"
                x2="18.2326755%"
                y2="84.4872346%"
                id="a"
              >
                <stop stopColor="#FFC300" offset="0%" />
                <stop stopColor="#FF9000" offset="100%" />
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <path
                d="M25.28 50.192l10.595-18.345 9.096 15.761-17.728 30.697h35.443L71.744 94H0l25.28-43.808zm15.375-26.64L49.39 8.418l49.425 85.58H81.311L40.655 23.552zM54.25 0h17.48L126 94h-17.502L54.25 0z"
                fill="url(#a)"
              />
              <path fill="#FFAF38" d="M0 94L72 94 62.9093796 78 27.3407196 78z" />
            </g>
          </svg>

        </div>
        <div className="flex flex-row items-center">
          <a href="#" className="flex flex-col items-center m-2 text-center">
            <CourseIcon/>
            Courses
          </a>
          <a href="#" className="flex flex-col items-center m-2 text-center">
            <TutorialIcon/>
            Tutorials
          </a>
          <a href="#" className="flex flex-col items-center m-2 text-center">
            Podcasts
          </a>
          <a href="#" className="flex flex-col items-center m-2 text-center">
            Blog
          </a>
        </div>
        <div className="flex flex-row items-center">

          <a href="#" className="m-2">Notification icon</a>
          <a href="#" className="m-2">Search icon</a>
          <a href="#" className="m-2">Sign In icon</a>
          <a href="#" className="m-2">Menu icon</a>
        </div>
     </div>
   )
       
}

const CourseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const TutorialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
