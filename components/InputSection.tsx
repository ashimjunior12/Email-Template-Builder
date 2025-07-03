'use client'
import { useState } from "react";
import Welcome from "./Welcome";


const InputSection = () => {
 
 const [preview, setPreview] = useState(true)
 const [email,setEmail] = useState("")
 const [username,setUsername] = useState("")
 const [title,setTitle] = useState("")
 // const [message, setMessage] = useState("Hello username")
 const [mergeTags, setMergeTags] = useState<{ [key: string]: string }>({});
const [mergeInput, setMergeInput] = useState(
  '{"user":"Ram", "email":"ram@example.com"}'
);
 const [html,setHtml] = useState("<h1>Hello</h1>")
 const [styles, setStyles] = useState({
   padding: '0px',
   backgroundColor: '#FFFFFF',
   color: '#fff',
   
 });
 
 const handleSendEmail = async() =>{
  const response = await fetch("/api/send-mail", {
    method:"POST",
    body: JSON.stringify({
      email,
      username,
      title,
      html,
      styles,
      mergeTags
    }),
    headers: {
      "Content-Type": "application/json"
    },
  });
  const data = await response.json()
  console.log(data)
  if(data.success){
    alert("Email sent successfully")
  }else{
    alert("Failed to send email")
  }
 }


  return (
    <div className='flex gap-30  mb-20'>
      <section className='input-section flex-col flex gap-5 border rounded p-5 w-100'>
        <form className='max-w-sm w-full'>
          <div className='mb-5'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='name@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
            >
              Subject
            </label>
            <input
              type='text'
              id='title'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
            >
              HTML
            </label>
            <input
              type='text'
              id='html'
              value={html}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
              onChange={(e) => setHtml(e.target.value)}
            />
          </div> */}

          {/* textarea */}

          <label
            htmlFor='message'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            HTML
          </label>
          <textarea
            id='message'
            rows={5}
            className='block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5'
            placeholder='Write your thoughts here...'
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          ></textarea>

          {/* textarea */}

          {/* Merge Fields */}
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900'>
              Merge Tags (JSON)
            </label>
            <textarea
              rows={4}
              className='block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 mb-5'
              placeholder='{"user":"Ram","email":"ram@example.com"}'
              value={mergeInput}
              onChange={(e) => {
                setMergeInput(e.target.value);
                try {
                  const obj = JSON.parse(e.target.value);
                  setMergeTags(obj);
                } catch (err) {
                  console.error('Invalid JSON');
                }
              }}
            />
          </div>

          {/* Merge Fields */}

          {/* Range Slider */}

          <input
            id='default-range'
            type='range'
            value={parseInt(styles.padding)}
            className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-10'
            onChange={(e) =>
              setStyles({ ...styles, padding: e.target.value + 'px' })
            }
          />

          {/* Range Slider */}

          {/* Color */}
          <section className='color-section flex mb-10 gap-5'>
            <label
              htmlFor='hs-color-input'
              className='block text-sm font-medium mb-2'
            >
              Foreground Color
            </label>
            <input
              type='color'
              className='p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none'
              id='foreground-color'
              value={styles.color}
              title='Choose your color'
              onChange={(e) => setStyles({ ...styles, color: e.target.value })}
            />
            <label
              htmlFor='hs-color-input'
              className='block text-sm font-medium mb-2'
            >
              Background Color
            </label>
            <input
              type='color'
              className='p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none'
              id='hs-color-input'
              value={styles.backgroundColor}
              title='Choose your color'
              onChange={(e) =>
                setStyles({ ...styles, backgroundColor: e.target.value })
              }
            />
          </section>
          {/*  Color */}

          <div className='btn-container flex gap-4'>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none  outline-none cursor-pointer'
              onClick={() => setPreview(!preview)}
            >
              {preview ? 'Close' : 'Preview'}
            </button>
            <button
              type='button'
              className='focus:outline-none text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 outline-none dark:focus:ring-green-800 cursor-pointer'
              onClick={handleSendEmail}
            >
              Send Mail
            </button>
          </div>
        </form>
      </section>

      {/* preview section */}
      <section className='preview border h-fit p-3 rounded'>
        <h1 className='text-xl font-bold mb-5'>Preview</h1>
        <Welcome
          email={email}
          title={title}
          username={username}
          styles={styles}
          preview={preview}
          html={html}
          mergeTags={mergeTags}
        />
      </section>
      {/* preview section */}
    </div>
  );
}
export default InputSection