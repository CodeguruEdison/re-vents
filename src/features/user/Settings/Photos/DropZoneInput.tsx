import React,{useCallback, FC} from 'react'
import {useDropzone} from 'react-dropzone';
import { Icon, Header } from 'semantic-ui-react';

export interface IDropZoneInputProps {
    
    setFiles:any
}
export const DropZoneInput:FC<IDropZoneInputProps> = (props) => {
    const {setFiles}=props;
    const onDrop = useCallback(acceptedFiles => {
        // console.log(acceptedFiles);
        setFiles(acceptedFiles.map((file:any)=>{
            return {...file,preview:URL.createObjectURL(file)}
        })) 
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({
          onDrop,
          multiple:false,
          accept:'image/*'
        })
    return (
        <div {...getRootProps()} className={'dropzone ' + (isDragActive && 'dropzone--isActive')}>
        <input {...getInputProps()} />
        <Icon name ='upload' size ="huge"/>
        <Header content ='Drop image here'/>
      </div>
    )
}

export default DropZoneInput
