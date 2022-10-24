import { Quill } from "react-quill";

// #1 import quill-image-uploader
import ImageUploader from "quill-image-uploader";
import ImageResize from 'quill-image-resize-module-react';




// #2 register module

Quill.register("modules/imageUploader", ImageUploader);
Quill.register('modules/imageResize', ImageResize);


  export const modules = {
 
    toolbar: [
  [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
  [{ size: [] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' },
  { 'indent': '-1' }, { 'indent': '+1' }],
  [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
  ['link', 'image', 'video'],
  ['clean']],
    
    imageUploader: {
      upload: file => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22",
            {
              method: "POST",
              body: formData
            }
          )
            .then(response => response.json())
            .then(result => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch(error => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      }
    },

    imageResize: {
     parchment: Quill.import('parchment'),
     modules: ['Resize', 'DisplaySize', 'Toolbar']
  },

  
 


  };

export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "imageBlot",
    "align"
  ];

  


