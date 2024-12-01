import './notepad.css'
import arrow from './assets/arrow.jpeg';
import {useRef, useState} from 'react'



const Notepad = ()=>{

    const[wordsCount,setWordsCount] = useState(0);
    const[clickedSave,setclickedSave] = useState(false);
    const[fileName,setfileName] = useState('')
    const[typedContents,settypedContents] = useState('')
    const[fontStyle,setfontStyle] = useState('')
    const textareaRef = useRef(null)
    //count a words
    const wordsCounter = (event)=>{
        const typedWords = event.target.value
        settypedContents(typedWords)
        setWordsCount(typedWords.length)

    }
    //open a file
    const handleOpen =()=>{
        document.getElementById('filebox').click()
    }

    //read a file
    const fileReader =(event)=>{
        const file = event.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.readAsText(file)
            reader.onload=()=>{
                console.log(reader.result)
                document.getElementById('textarea').value = reader.result
            }
        }
    }
    //new file
    const newFile =()=>{
        document.getElementById('textarea').value = ''
        setWordsCount(0)
    
    }
    //save a docoment
    const saveFile = (event)=>{
        const typedfileName =  event.target.value
        setfileName(typedfileName)
        console.log(typedfileName)

    }
    //handle download
    const handleDownload = (note,fileName)=>{
        console.log(note)
        const blob = new Blob([note], {type:'text/plain'})
        
        const url = URL.createObjectURL(blob)
        const link= document.createElement('a')
        link.href = url
        link.download=`${fileName}.txt`
        link.click()
        setclickedSave(false)
        
    }
    //change Style 
    const handleStylechange = (styleName,typedContents)=>{
        setfontStyle(styleName)
        const text = textareaRef
        const start = textareaRef.current.selectionStart
        const end = textareaRef.current.selectionEnd
        const selectedText = textareaRef.current.value.substring(start,end)
        if (styleName==='courier'){
            const styledText= (
                <span style={{fontFamily :'arial, monospace'}}>{selectedText}</span>
            )
            console.log(styledText.props.children.toString())
        }
        
    }


    
    return(
        <div className="w-full box-border h-screen flex justify-center border border-black ">
            
            <div className="w-full m-24 mt-20 flex flex-col border border-black"> 
                <div className="w-full flex justify-center items-center bg-[rgba(204,199,192,0.836)] h-[50px]">Online Notepad</div>
                <div className="navbar1">
                    <ul className='flex m-0  border border-black h-[40px] '> 
                        <li className='relative group flex justify-center items-center p-2 border border-transparent hover:border-blue-500 hover:cursor-pointer'>File <img className='h-[30px] w-[30px]' src={arrow} alt="Arrow" />
                            <ul className='absolute hidden mt-[75px] group-hover:block left-0 w-full'>
                                <li className='bg-gray-500 hover:bg-blue-800'>New</li>
                                <li className='bg-gray-500 hover:bg-blue-800'>Open</li>
                                <li className='bg-gray-500 hover:bg-blue-800'>Save</li>

                            </ul>
                        </li>
                        <li className='relative group flex justify-center items-center p-2'>Edit<img className='h-[30px] w-[30px]' src={arrow}/>
                            <ul className='absolute hidden group-hover:block mt-[75px]'>
                                <li className='bg-gray-500 hover:bg-blue-800'>Cut</li>
                                <li className='bg-gray-500 hover:bg-blue-800'>Copy</li>
                                <li className='bg-gray-500 hover:bg-blue-800'>Paste</li>

                            </ul>
                        </li>
                        <li className='relative group flex justify-center items-center p-2'>Insert<img className='h-[30px] w-[30px]' src={arrow}/></li>
                        <li className='relative group flex justify-center items-center p-2'>View<img className='h-[30px] w-[30px]' src={arrow}/></li>
                        <li className='relative group flex justify-center items-center p-2'> Help<img className='h-[30px] w-[30px]' src={arrow}/></li>
                    </ul>
                </div>
                <div className="flex">
                    <ul >
                        <li onClick={()=>newFile()}>New</li>
                        <li onClick={()=>handleOpen()}>Open</li>
                        <li onClick={()=>setclickedSave(true)}>Save</li>
                        <li>Print</li>
                    </ul>
                    <ul>
                        <li>Cut</li>
                        <li >Copy</li>
                        <li>Paste</li>
                    </ul>
                    <ul>
                        <li>Undo</li>
                        <li>Redo</li>
                    </ul>
                    <ul>
                        <li className='relative group flex justify-center items-center'>Font-Family
                            <ul className='absolute hidden group-hover:block mt-[75px] '>
                                <li onClick={()=>handleStylechange('serif',typedContents)} className={`font-serif font-bold`}>Serif</li>  
                                <li onClick={()=>handleStylechange('courier')}culassName='font-courier'>Courier New</li>
                                <li onClick={()=>handleStylechange('bookantiqua')} className='font-bookantiqua'>Book Antiqua</li>
                            </ul>
                        </li>
                        <li>Font Sizes</li>
                    </ul>
                    <ul>
                        <li>FullScreen</li>
                    </ul>
                </div>
                <div>
                    <textarea ref={textareaRef} value= {typedContents} onChange= {wordsCounter}id='textarea' className={`h-[300px] w-full font-${fontStyle}`}></textarea>
                </div>
                <div className="h=[20px] border-t border-t-black flex justify-end pr-2 pt-2">
                    <h2>Words :{wordsCount}</h2>
                    <input onChange={fileReader} id='filebox'style ={{display:'none'}}type='file'></input>
                </div> 
            </div>
            {clickedSave&&(
                <div className="absolute flex justify-center items-center  w-full h-full border">
                <div className="flex flex-col justify-between border-2 w-[300px] h-[200px]">
                    <h1 className='flex items-center p-2 border h-[40px]'>Save As</h1>
                    <div className="m-5 flex gap-2">
                        <p className='text-black text-xl'>FileName: </p>
                        <input onChange={saveFile} className='w-full border-2 border-grey' type='text'></input>
                    </div>
                    <button onClick={()=>handleDownload(typedContents,fileName)}className='bg-slate-500'>Save</button>
                    <button onClick={()=>setclickedSave(false)}>Close</button>
                </div>
            </div>

            )
            }
            
        </div>
    )
}
export default Notepad;