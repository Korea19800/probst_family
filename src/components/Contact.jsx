import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h2 className='my-10 text-center text-4xl'>Words of Gratitude</h2>
        <h3 className='my-10 text-center text-xl'>Thanks for inviting me to your house. I feel sorry that I did not prepare for the gift. So I made a little gift: a website. Also, I really enjoyed Chrsitmas at your house. It was one of the best Christmast I have ever had. Again, I greatly appreciate your invitation.</h3>

        {/* contact info

        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='#' className='border-b'>{CONTACT.email}</a>
        </div>

        */}
    </div>
  )
}

export default Contact
