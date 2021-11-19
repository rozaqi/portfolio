import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function SaasKit() {
  return (
    <>
      <PageSEO
        title={`Achievements - ${siteMetadata.author}`}
        description={`Achievements - ${siteMetadata.author} - my experience and achievements`}
      />
        <div className="">
        <h1 className="text-center font-extrabold text-2xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">Achievements :</h1><br />
          <h1>
<ul className="list-disc flex justify-center">
  <li>Finalist Olimpiade Cyber Security dan IoT ARA ITS 2021</li>
  
</ul>
<h2 className="text-center">March 2021</h2>
          </h1><br />
          <h1>
<ul className="list-disc flex justify-center">
  <li>5th place Capture The Flag at KKS TNI-AD</li>
  
</ul>
<h2 className="text-center">November 2020</h2>
          </h1><br />
          <h1>
<ul className="list-disc flex justify-center">
  <li>Finalist Capture The Flag competition at Hology</li>
  
</ul>
<h2 className="text-center">November 2020</h2>
          </h1><br />
          <h1>
<ul className="list-disc flex justify-center">
  <li>4th National Cyber Security LKS</li>
  
</ul>
<h2 className="text-center">October 2020</h2>
          </h1><br />
    <h1>
<ul className="list-disc flex justify-center">
  <li>Finalist Capture The Flag competition at HackToday</li>
  
</ul>
<h2 className="text-center">August 2020</h2>
          </h1><br />
           <h1>
<ul className="list-disc flex justify-center">
  <li>4th place Capture The Flag competition at iCyption</li>
  
</ul>
<h2 className="text-center">July 2020</h2>
          </h1><br />
      </div>
    </>
  )
}
