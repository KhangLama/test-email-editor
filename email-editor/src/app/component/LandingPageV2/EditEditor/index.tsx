/* eslint-disable prettier/prettier */
'use client'
import React, { useEffect, useState } from 'react'
import EmailEditor from 'react-email-editor-teknix'
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

  let products = [
    {
      id: 1,
      image: 'https://img.thriftbooks.com/api/images/i/m/B4380A756292C0D50D92213A920E5A9E6C1DD713.jpg',
      title: 'The Great Believers',
      description: `    
        <form style="max-width: 24rem; margin: 0 auto; border: 1px solid #ccc; margin-top: 0.25rem; border-radius: 0.375rem; background-color: #E0E7FF;">
          <div style="padding: 0.75rem;">
            <div style="font-size: 1.125rem; font-weight: 600;">cád</div>
            <div style="font-size: 0.75rem; color: #6B7280; word-wrap: break-word; margin-bottom: 0.5rem;">ádc</div>
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
            <div style="font-size: 0.75rem; color: #6B7280; word-wrap: break-word; margin-bottom: 0.75rem;">qưedqw</div>
            <div style="display: flex; justify-content: center;">
              <button type="submit" style="color: #fff; background-color: #1D4ED8; font-weight: 500; border-radius: 0.5rem; font-size: 0.875rem; width: 100%; padding: 0.625rem 1.25rem; text-align: center;">ok</button>
            </div>
          </div>
        </form>
      `,
    },
    {
      id: 2,
      image: 'https://img.thriftbooks.com/api/images/i/m/F0836F0E91E904515A5A47078C555303CCC67351.jpg',
      title: 'The Hundred-Year House',
      description: `    
        <form style="max-width: 24rem; margin: 0 auto; border: 1px solid #ccc; margin-top: 0.25rem; border-radius: 0.375rem; background-color: #E0E7FF;">
          <div style="padding: 0.75rem;">
            <div style="font-size: 1.125rem; font-weight: 600;">cád</div>
            <div style="font-size: 0.75rem; color: #6B7280; word-wrap: break-word; margin-bottom: 0.5rem;">ádc</div>
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
            <div style="font-size: 0.75rem; color: #6B7280; word-wrap: break-word; margin-bottom: 0.75rem;">qưedqw</div>
            <div style="display: flex; justify-content: center;">
              <button type="submit" style="color: #fff; background-color: #1D4ED8; font-weight: 500; border-radius: 0.5rem; font-size: 0.875rem; width: 100%; padding: 0.625rem 1.25rem; text-align: center;">ok</button>
            </div>
          </div>
        </form>
      `,
    },
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const emailEditorOptions = {
        customJS: [
          window.location.protocol + "//" + window.location.host + "/custom.js"
        ],
        customCSS: [
          'https://examples.unlayer.com/examples/product-library-tool/productTool.css',
        ],
        appearance: {
          theme: 'modern_light',
        },
        projectId: 237985,
        tools: {
          "custom#product_tool": {
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
        }
      };
    }
  }, []);

  return (
    <div className={classes.templateEditor}>
      <div>
        <EmailEditor
          editorId="editor"
          ref={emailEditorRef}
          minHeight={1000}
        />
      </div>
    </div>
  )
}

export default EditorHTML
