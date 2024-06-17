/* eslint-disable prettier/prettier */
'use client'
import React, { useEffect, useState } from 'react'
import EmailEditor, { EmailEditorProps } from 'react-email-editor-teknix'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import classes from './index.module.scss'



const EditorHTML: React.FC = () => {
  const emailEditorRef = React.useRef<any>(null)
  const [preview, setPreview] = React.useState(false)
  const [template, setTemplate] = React.useState<any>(null)
  const [exportedHtml, setExportedHtml] = React.useState('')
  const router = useRouter()
  const [isEditing, setIsEditing] = React.useState(false)
  const [templateName, setTemplateName] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [isSaving, setIsSaving] = React.useState(false)
  const collectionId = React.useRef('')
  const getIdImageRef = React.useRef('')
  const [forms, setForms] = useState([])

  // const exportHtmlAndSave = async () => {
  //   setStatus('Saving')
  //   setIsSaving(true)

  //   const editor = emailEditorRef.current.editor
  //   editor.exportHtml(async data => {
  //     const { html, design } = data
  //     setExportedHtml(html)
  //     const token = localStorage.getItem('token')
  //     if (!token) {
  //       toast.error('You are not logged in')
  //       setStatus('Error')
  //       setIsSaving(false)
  //       router.push('/')
  //       return
  //     }

  //     const content = document.getElementById('html-content')
  //     if (content) {
  //       const canvas = await html2canvas(content, { scale: 1, width: 800, height: 400 })
  //       const image = canvas.toDataURL('image/png')

  //       try {
  //         const imageResponse = await axios({
  //           method: collectionId.current ? 'patch' : 'post',
  //           url: collectionId.current ? `/api/media/update-image` : '/api/media/create-image',
  //           data: {
  //             id: getIdImageRef.current,
  //             image,
  //             alt: templateName,
  //             filename: templateName,
  //           },
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `accounts API-Key ${token}`,
  //           },
  //         })

  //         if (imageResponse.status === 200) {
  //           getIdImageRef.current = imageResponse.data.mediaId
  //           const response = await axios({
  //             method: collectionId.current ? 'patch' : 'post',
  //             url: collectionId.current
  //               ? `/api/store_templates/update-template`
  //               : '/api/store_templates/create-template',
  //             data: {
  //               id: collectionId.current,
  //               mediaId: getIdImageRef.current,
  //               campaignDetails: {
  //                 json: design,
  //                 html,
  //                 name: templateName,
  //               },
  //             },
  //             headers: {
  //               'Content-Type': 'application/json',
  //               Authorization: `accounts API-Key ${token}`,
  //             },
  //           })

  //           if (response.status === 200) {
  //             collectionId.current = response.data.campaignId
  //             setStatus('Saved')
  //             router.push('/api/email-templates/my-templates')
  //           }
  //         }
  //       } catch (error) {
  //         console.error('Error in API call:', error)
  //         toast.error(`Error: ${error.message}`)
  //         setStatus('Error')
  //         setIsSaving(false)
  //       }
  //     } else {
  //       console.error('Content not found or not yet rendered.')
  //       setStatus('Error')
  //       setIsSaving(false)
  //     }
  //   })
  // }

  let products = [
    {
      id: 1,
      image:
        'https://img.thriftbooks.com/api/images/i/m/B4380A756292C0D50D92213A920E5A9E6C1DD713.jpg',
      title: 'The Great Believers',
      description: `    
        <form style="max-width: 24rem; margin: 0 auto; border: 1px solid #ccc; margin-top: 0.25rem; border-radius: 0.375rem; background-color: #E0E7FF;">
        <div style="padding: 0.75rem;">
          <div style="font-size: 1.125rem; font-weight: 600;">
            cád
          </div>
          <div style="font-size: 0.75rem; color: #6B7280; word-wrap: break-word; margin-bottom: 0.5rem;">
            ádc
          </div>
          <div style="margin-bottom: 0.5rem;">
            <label style="display: block; margin-bottom: 0.125rem; font-size: 0.875rem; font-weight: 500; color: #1F2937;">cádcasc</label>
            <input type="email" id="email" style="height: 2rem; background-color: #F9FAFB; border: 1px solid #D1D5DB; color: #1F2937; font-size: 0.875rem; border-radius: 0.5rem; padding: 0.625rem; width: 100%;" placeholder="your-email@example.com" />
          </div>
          <div style="margin-bottom: 0.5rem;">
            <label style="display: block; margin-bottom: 0.125rem; font-size: 0.875rem; font-weight: 500; color: #1F2937;">tnrtyhnrt</label>
            <input type="text" id="phone" style="height: 2rem; background-color: #F9FAFB; border: 1px solid #D1D5DB; color: #1F2937; font-size: 0.875rem; border-radius: 0.5rem; padding: 0.625rem; width: 100%;" />
          </div>
          <div style="margin-bottom: 0.5rem;">
            <label style="display: block; margin-bottom: 0.125rem; font-size: 0.875rem; font-weight: 500; color: #1F2937;">"\ádasdc"</label>
            <input type="text" id="firstName" style="height: 2rem; background-color: #F9FAFB; border: 1px solid #D1D5DB; color: #1F2937; font-size: 0.875rem; border-radius: 0.5rem; padding: 0.625rem; width: 100%;" />
          </div>
          <div style="margin-bottom: 0.75rem;">
            <label style="display: block; margin-bottom: 0.125rem; font-size: 0.875rem; font-weight: 500; color: #1F2937;">qừqwfeqw</label>
            <input type="text" id="lastName" style="height: 2rem; background-color: #F9FAFB; border: 1px solid #D1D5DB; color: #1F2937; font-size: 0.875rem; border-radius: 0.5rem; padding: 0.625rem; width: 100%;" />
          </div>
          <div style="font-size: 0.75rem; color: #6B7280; word-wrap: break-word; margin-bottom: 0.75rem;">
            qưedqw
          </div>
          <div style="display: flex; justify-content: center;">
            <button type="submit" style="color: #fff; background-color: #1D4ED8; font-weight: 500; border-radius: 0.5rem; font-size: 0.875rem; width: 100%; padding: 0.625rem 1.25rem; text-align: center;">
              ok
            </button>
          </div>
        </div>
      </form>
      
      `,
    },
    {
      id: 2,
      image:
        'https://img.thriftbooks.com/api/images/i/m/F0836F0E91E904515A5A47078C555303CCC67351.jpg',
      title: 'The Hundred-Year House',
      description:`    
      <form style="max-width: 24rem; margin: 0 auto; border: 1px solid #ccc; margin-top: 0.25rem; border-radius: 0.375rem; background-color: #E0E7FF;">
      <div style="padding: 0.75rem;">
        <div style="font-size: 1.125rem; font-weight: 600;">
          cád
        </div>
        <div style="font-size: 0.75rem; color: #6B7280; word-wrap: break-word; margin-bottom: 0.5rem;">
          ádc
        </div>
        <div style="margin-bottom: 0.5rem;">
          <label style="display: block; margin-bottom: 0.125rem; font-size: 0.875rem; font-weight: 500; color: #1F2937;">cádcasc</label>
          <input type="email" id="email" style="height: 2rem; background-color: #F9FAFB; border: 1px solid #D1D5DB; color: #1F2937; font-size: 0.875rem; border-radius: 0.5rem; padding: 0.625rem; width: 100%;" placeholder="your-email@example.com" />
        </div>
        <div style="margin-bottom: 0.5rem;">
          <label style="display: block; margin-bottom: 0.125rem; font-size: 0.875rem; font-weight: 500; color: #1F2937;">tnrtyhnrt</label>
          <input type="text" id="phone" style="height: 2rem; background-color: #F9FAFB; border: 1px solid #D1D5DB; color: #1F2937; font-size: 0.875rem; border-radius: 0.5rem; padding: 0.625rem; width: 100%;" />
        </div>
        <div style="margin-bottom: 0.5rem;">
          <label style="display: block; margin-bottom: 0.125rem; font-size: 0.875rem; font-weight: 500; color: #1F2937;">"\ádasdc"</label>
          <input type="text" id="firstName" style="height: 2rem; background-color: #F9FAFB; border: 1px solid #D1D5DB; color: #1F2937; font-size: 0.875rem; border-radius: 0.5rem; padding: 0.625rem; width: 100%;" />
        </div>
        <div style="margin-bottom: 0.75rem;">
          <label style="display: block; margin-bottom: 0.125rem; font-size: 0.875rem; font-weight: 500; color: #1F2937;">qừqwfeqw</label>
          <input type="text" id="lastName" style="height: 2rem; background-color: #F9FAFB; border: 1px solid #D1D5DB; color: #1F2937; font-size: 0.875rem; border-radius: 0.5rem; padding: 0.625rem; width: 100%;" />
        </div>
        <div style="font-size: 0.75rem; color: #6B7280; word-wrap: break-word; margin-bottom: 0.75rem;">
          qưedqw
        </div>
        <div style="display: flex; justify-content: center;">
          <button type="submit" style="color: #fff; background-color: #1D4ED8; font-weight: 500; border-radius: 0.5rem; font-size: 0.875rem; width: 100%; padding: 0.625rem 1.25rem; text-align: center;">
            ok
          </button>
        </div>
      </div>
    </form>
    
    `},
  ]

  let data1 = []


  return (
    <div className={classes.templateEditor}>


      <div>
        <EmailEditor
          editorId="editor_container"
          ref={emailEditorRef}
          minHeight={1000}
          projectId={1071}
          tools={{
            "custom#product_tool": {
              data: {
                products,
              },
              properties: {
                productLibrary: {
                  editor: {
                    data: {
                      products,
                    },
                  },
                },
              },
            },
          }}
          options={{
            customJS: ['https://teknix-mail.teknix.dev/custom2.js'],
            customCSS: [
              'https://examples.unlayer.com/examples/product-library-tool/productTool.css',
            ],
            appearance: {
              theme: 'modern_light',
            },
          }}
        />
      </div>
    </div>
  )
}

export default EditorHTML
