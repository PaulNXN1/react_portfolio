import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen flex justify-center items-center p-4 bg-[#2b5390]'>
            <form method='POST' action="https://getform.io/f/d8050fba-5619-4f55-8926-2f211cc656f1" className='flex flex-col min-w-[600px] w-full'>

                <div className='pb-8'>
                    <p className='text-4xl font bold inline border-b-4 border-yellow-600 text-white'>Contact Me</p>
                </div>

                <input type="text" placeholder="Name" name='name' />
                <input className='my-4' type="text" placeholder="Email" name='email' />
                <textarea name='message' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-red-500 hover:border-blue-200 px-4 my-8 mx-auto flex items-center '>Submit</button>
            </form>

        </div>
    )  
}

export default Contact;