import React, {useState} from 'react'

const CommentsForm = ({btnLabel, formSubmitHandler, formCancelHandler = null, initialText=''}) => {
    const [value, setvalue] = useState(initialText);
    const submitHandler = (e) => {
        e.preventDefault();
        formSubmitHandler(value);
        setvalue("");
    }
  return (
    <form onSubmit={submitHandler}>
      <div className='flex flex-col items-end border border-primary rounded-lg p-4'>
        <textarea className='w-full focus:outline-none bg-transparent' rows="5" placeholder='Lascia un commento ...' value={value} onChange={(e) => setvalue(e.target.value)}/>
        <div className='flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row'>
          {formCancelHandler && (
            <button onClick={formCancelHandler} className='px-6 py-2.5 rounded-lg border border-red-500 text-red-500'>
              Cancella
            </button>
          )}
          <button type='submit' className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold'>{btnLabel}</button>
        </div>
      </div>
    </form>
  )
}

export default CommentsForm
