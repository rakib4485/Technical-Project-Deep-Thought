import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Accordion from '../Accordion/Accordion';
import { FaCloudUploadAlt, FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';

const StructurePointer = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = {

    }
    const items = {
        title: 'Structure you pointers ',
        content: 'Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world. ',
    }

    const handleSave = () =>{
        toast.success("Save Successfully")
    }

    const handlePublish = () =>{
        toast.error("Fill The Require fill")
    }

    return (
        <div className='rounded-2xl h-[600px] border-2 my-12 shadow-md '>
            <Accordion
                items={items}
            />
            <div className='h-[400px] overflow-auto mx-5'>
                <div>
                    <label className='text-xl font-semibold'>Title</label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full mt-2" />
                </div>

                <div className='mt-5'>
                    <label className='text-xl font-semibold mt-5'>Content</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={20} // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={newContent => { }}
                        className="h-[350px] mt-3"
                    />
                </div>

                <div className='grid grid-cols-2 gap-6 mt-10'>
                    <div>
                    <label className='text-xl font-semibold mt-5'>Category</label>
                    <select className=" rounded-xl pl-2 mt-2 w-full h-10  bg-white border shadow">
                                <option disabled selected><small>Select Process</small></option>
                                <option><small>Question</small></option>
                                <option><small>Analogy</small></option>
                                <option><small>Sarcasm</small></option>
                                <option><small>Insight</small></option>
                                <option><small>Counter-Example</small></option>
                            </select>
                    </div>
                    <div>
                    <label className='text-xl font-semibold mt-5'>Sub Category</label>
                    <select className=" rounded-xl pl-2 mt-2 w-full h-10 bg-white border shadow">
                                <option disabled selected><small></small></option>
                                <option><small>Question</small></option>
                                <option><small>Analogy</small></option>
                                <option><small>Sarcasm</small></option>
                                <option><small>Insight</small></option>
                                <option><small>Counter-Example</small></option>
                            </select>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6 mt-10'>
                    <div>
                    <label className='text-xl font-semibold mt-5'>Thumbnail</label>
                    <input type="file" className="file-input file-input-bordered  w-full mt-2" />
                    </div>
                    <div>
                    <label className='text-xl font-semibold mt-5'>Thought Process</label>
                    <select className=" rounded-xl pl-2 mt-2 w-full h-10  bg-white border shadow">
                                <option disabled selected><small></small></option>
                                <option><small>Question</small></option>
                                <option><small>Analogy</small></option>
                                <option><small>Sarcasm</small></option>
                                <option><small>Insight</small></option>
                                <option><small>Counter-Example</small></option>
                            </select>
                    </div>
                </div>
                <div className='flex gap-2 justify-end my-10 mr-4'>
            <button onClick={handleSave} className="btn btn-sm bg-[#0029ff] hover:bg-[#0029ff] border-none"><FaSave className="text-xl mr-1" />Save draft</button>
            <button onClick={handlePublish} className="btn btn-sm bg-[#0029ff] hover:bg-[#0029ff] border-none"><FaCloudUploadAlt className="text-xl mr-3" />Publish</button>
            </div>
            </div>
            
        </div>
    );
};

export default StructurePointer;