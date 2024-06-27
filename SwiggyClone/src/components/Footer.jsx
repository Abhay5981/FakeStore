import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'


const  sections = [
    {
    title: 'Company',
    items: ['About', 'Careers', 'Team', 'Swiggy One', 'Swiggy Instamart','Swiggy Genie' ]
    },
    {
    title: 'Contact Us',
    items: ['Help & Support', 'Patner with us', 'Ride with us' ]
    },
    {
    title: 'Legal',
    items: ['Terms & ConditionS', 'Cookie Policy', 'Privacy Policy', 'Investor Relations']
    },
    {
    title: 'We Deliver to:',
    items: ['Bengaluru', 'Delhi-NCR', 'Noida', 'Gurgaon', 'Mumbai','HydraBad' ]
    }
    
]

const Social = [
    {
        name:'Facebook',
        icon: FaFacebook,
        link:
        'https://facebook.com/'
    },
    {
        name:'GitHub',
        icon: FaGithub,
        link: 'https://github.com/'
    },
    {
        name:'Instagram',
        icon: FaInstagram,
        link: 'https://instagram.com/'
    },
    {
        name:'Twitter',
        icon: FaTwitter,
        link: 'https://tiwitter.com/'
    }
]

function Footer() {
  return (
   <> 
    <div className='w-full mt-24 bg-slate-800 text-white py-2 px-2'>
        <div className='max-w-[1200px] mx-auto grid geid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>
            
            {sections.map((sec) => (
              <div >
                <ul className='flex flex-col'>
                <p className='mb-4 font-bold text-xl'>{sec.title}</p> 
                    {sec.items.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
              </div> 
            ))}
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>
                    Subscribe to our newsletter
                </p>
                <p className='py-4'>
                    The latest update, article and resources, snet to your inbox weekly

                </p>
                <form className='flex flex-col sm:flex-row'>
                    <input type="email" placeholder='Enter your email id' className='w-full p-2 ml-2 rounded-md mb-4'/>
                    <button className='p-2 mb-4'>
                        Subscribe
                    </button>

                </form>
            </div>
        </div>

    </div>

   </>
  )
}

export default Footer

