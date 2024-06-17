'use client'
import React from 'react'
import { IoIosArrowDown, IoIosSearch, IoIosInformationCircle } from 'react-icons/io'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import classes from './index.module.scss'
import { FaTags } from 'react-icons/fa'
import EmptyPage from '../Empty'

const chunkArray = (arr, size) => {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

const LandingPageComponent = () => {
    const [campaigns, setCampaigns] = React.useState([])
    const [anchorEl, setAnchorEl] = React.useState(null)
    const pathName = useRouter()
    const [selectedTemplate, setSelectedTemplate] = React.useState(null)
  
    React.useEffect(() => {
      const campaign = async () => {
        const token = localStorage.getItem('token')
        if (token) {
          try {
            const response = await axios.get('/api/store_templates/get-templates', {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `accounts API-Key ${token}`,
              },
            })
            setCampaigns(response.data.docs)
          } catch (error: any) {
            console.error('Error:', error.response?.data || error.message)
          }
        } else {
          toast.info('You are not logged in', {
            onClose: () => {
              pathName.push('/')
              setTimeout(() => window.location.reload(), 500)
            },
          })
        }
      }
      campaign()
    }, [])
  
    const handleEditTemplateLId = (id: string, hasJson: boolean) => {
      const targetPath = hasJson
        ? `/api/email-templates/my-templates/design-email/${id}`
        : `/api/email-templates/my-templates/raw-html/${id}`
      pathName.push(targetPath)
    }
  
    const handleClick = (event, template) => {
      setAnchorEl(anchorEl ? null : event.currentTarget)
      setSelectedTemplate(template)
    }
  
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popper' : undefined
  
    const chunks = chunkArray(campaigns, 3)

  return (
    <div className={classes.Muicontainer}>
      <div className={classes.fVegNo}>
        <div className={classes.container}>
          <div className={classes.directionColumn}>
            <div className={classes.styledPaper}>
              <div className={classes.paperContainer}>
                <div className={classes.itemPaper}>
                  <div className={classes.hZDngK}>
                    <div className={classes.adornedStart}>
                      <IoIosSearch className={classes.searchIcon} />
                      <input
                        autoComplete="off"
                        placeholder="Search for templates"
                        type="text"
                        id={classes.searchTemplates}
                      />
                    </div>
                  </div>
                </div>

                <div className={classes.itemeem1230}>
                  <div className={classes.MuiPaperElevation}>
                    {campaigns.length > 0 ? (
                      <table className={classes.simpleTable}>
                        <thead className={classes.MuiTableHead}>
                          <tr className={classes.MuiTableRowHead}>
                            <th className={classes.MuiTableCellPaddingNone} scope="col"></th>
                            <th className={classes.MuiTableCell} scope="col">
                              <span className={classes.MuiTableSortLabel} aria-disabled="false">
                                <div className={classes.eem1220}>
                                  <span className={classes.eem1219}>
                                    <button className={classes.textSecondary} type="button">
                                      <span className={classes.MuiButtonLabel}>
                                        <span className={classes.iconSizeMedium}>
                                          <FaTags className={classes.iconML} />
                                        </span>
                                        Tags
                                      </span>
                                    </button>

                                    <span>
                                      <div className={classes.popoverWrapper}>
                                        <div
                                          className={classes.buttonWrapperPopover}
                                          typeof="noborder"
                                        >
                                          <button
                                            className={classes.templateTypePopoverButton}
                                            typeof="noborder"
                                          >
                                            <span className={classes.eem1271}>
                                              Type
                                              <span className={classes.iconSizeMedium}>
                                                <div
                                                  className={classes.iconWrapperCaretDownMaterial}
                                                >
                                                  <IoIosArrowDown />
                                                </div>
                                              </span>
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </span>

                                    <span>
                                      <div className={classes.popoverWrapper}>
                                        <div
                                          className={classes.buttonWrapperPopover}
                                          typeof="noborder"
                                        >
                                          <button
                                            className={classes.templateTypePopoverButton}
                                            typeof="noborder"
                                          >
                                            <span className={classes.eem1271}>
                                              Newest first
                                              <span className={classes.iconSizeMedium}>
                                                <div
                                                  className={classes.iconWrapperCaretDownMaterial}
                                                >
                                                  <IoIosArrowDown />
                                                </div>
                                              </span>
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </span>
                                  </span>
                                </div>
                              </span>
                            </th>
                            <th className={classes.MuiTableCell} scope="col">
                              <span
                                className={classes.MuiTableSortLabel}
                                aria-disabled="false"
                              ></span>
                            </th>
                            <th className={classes.MuiTableCell} scope="col">
                              <span
                                className={classes.MuiTableSortLabel}
                                aria-disabled="false"
                              ></span>
                            </th>
                            <th className={classes.MuiTableCellPaddingNone} scope="col"></th>
                          </tr>
                        </thead>
                        <tbody className={classes.MuiTableBody}>
                          <tr className={classes.MuiTableRow}>
                            <td className={classes.paddingNone}></td>
                            <td className={classes.alignLeft} colSpan={3}>
                              <div className={classes.eem4165}>
                                <div className={classes.tagsList}>
                                  <div className={classes.eem4166}>
                                    <div className={classes.root}>
                                      <div className={classes.eem4170}>
                                        <div className={classes.MuiAlert}>
                                          <div className={classes.MuiAlertIcon}>
                                            <IoIosInformationCircle className={classes.icon} />
                                          </div>

                                          <div className={classes.MuiAlertMessage}>
                                            <div className={classes.MuiTypography}>
                                              <div className={classes.typography}>
                                                You don’t have any tags. Please go to template
                                                options on editor screen to add them.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className={classes.paddingNone}></td>
                          </tr>
                          {chunks.map((chunk, chunkIndex) => (
                            <React.Fragment key={chunkIndex}>
                              <tr className={classes.eem1260}>
                                <td className={classes.paddingNoneEem1260}></td>
                                {chunk.map((camp, id) => (
                                  <td className={classes.alignLeftEem1260} key={id}>
                                    <div id={classes.row1}>
                                      <span className={classes.eem1285}>
                                        <button
                                          className={classes.template}
                                          onClick={() =>
                                            handleEditTemplateLId(camp.id, !!camp.json)
                                          }
                                        >
                                          <span className={classes.eem1281}></span>
                                          <div className={classes.imageWrapper}>
                                            <div className={classes.lazyloadWrapper}>
                                              {camp.image && camp.image.url ? (
                                                <Image
                                                  width={300}
                                                  height={157}
                                                  src={camp.image.url}
                                                  alt={camp.image.alt}
                                                  style={{ width: '100%' }}
                                                />
                                              ) : (
                                                <div>No Image Available</div>
                                              )}
                                            </div>
                                          </div>
                                          <div className={classes.eem1283}>
                                            <h4 className={classes.MuiTypographyh4}>
                                              {camp.name}...
                                            </h4>
                                          </div>
                                        </button>

                                        <span className={classes.eem1292}>
                                          <div className={classes.popoverWrapper}>
                                            <div className={classes.customWrapperPopover}>
                                              <button
                                                className={classes.textSecondaryButon}
                                                onClick={e => handleClick(e, camp)}
                                              >
                                                <span className={classes.labelMiu}>
                                                  <span className={classes.iconSizeMedium}>
                                                    <div className={classes.iconWrapperDots}>
                                                      <div className={classes.hoverBorderDots}>
                                                        <BsThreeDotsVertical />
                                                      </div>
                                                    </div>
                                                  </span>
                                                </span>
                                              </button>
                                              <Popper
                                                id={id?.toString()}
                                                open={open}
                                                anchorEl={anchorEl}
                                              >
                                                <Box
                                                  sx={{
                                                    border: 1,
                                                    p: 1,
                                                    bgcolor: 'background.paper',
                                                  }}
                                                >
                                                  <div
                                                    className={classes.popperContent}
                                                    style={{ display: 'grid' }}
                                                  >
                                                    <button className="max-w-full p-3.5 text-gray-600 font-mulish text-sm font-normal text-left leading-5 cursor-pointer">
                                                      Preview
                                                    </button>
                                                    <button className="max-w-full p-3.5 text-gray-600 font-mulish text-sm font-normal text-left leading-5 cursor-pointer">
                                                      Copy template
                                                    </button>
                                                    <button className="max-w-full p-3.5 text-gray-600 font-mulish text-sm font-normal text-left leading-5 cursor-pointer">
                                                      Create campaign
                                                    </button>
                                                    <button className="max-w-full p-3.5 text-gray-600 font-mulish text-sm font-normal text-left leading-5 cursor-pointer">
                                                      Edit as HTML
                                                    </button>
                                                    <button className="max-w-full p-3.5 text-gray-600 font-mulish text-sm font-normal text-left leading-5 cursor-pointer">
                                                      Set as default template
                                                    </button>
                                                    <button className="max-w-full p-3.5 text-gray-600 font-mulish text-sm font-normal text-left leading-5 cursor-pointer">
                                                      Share
                                                    </button>
                                                  </div>
                                                </Box>
                                              </Popper>
                                            </div>
                                          </div>
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                ))}
                                {chunk.length < 3 && (
                                  <>
                                    {[...Array(3 - chunk.length)].map((_, index) => (
                                      <td
                                        className={classes.alignLeftEem1260}
                                        key={`empty-${index}`}
                                      ></td>
                                    ))}
                                  </>
                                )}
                                <td className={classes.paddingNoneEem1260}></td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <>
                        <table className={classes.simpleTable}>
                          <thead className={classes.MuiTableHead}>
                            <tr className={classes.MuiTableRowHead}>
                              <th className={classes.MuiTableCellPaddingNone} scope="col"></th>
                              <th className={classes.MuiTableCell} scope="col">
                                <span className={classes.MuiTableSortLabel} aria-disabled="false">
                                  <div className={classes.eem1220}>
                                    <span className={classes.eem1219}>
                                      <button className={classes.textSecondary} type="button">
                                        <span className={classes.MuiButtonLabel}>
                                          <span className={classes.iconSizeMedium}>
                                            <FaTags className={classes.iconML} />
                                          </span>
                                          Tags
                                        </span>
                                      </button>

                                      <span>
                                        <div className={classes.popoverWrapper}>
                                          <div
                                            className={classes.buttonWrapperPopover}
                                            typeof="noborder"
                                          >
                                            <button
                                              className={classes.templateTypePopoverButton}
                                              typeof="noborder"
                                            >
                                              <span className={classes.eem1271}>
                                                Type
                                                <span className={classes.iconSizeMedium}>
                                                  <div
                                                    className={classes.iconWrapperCaretDownMaterial}
                                                  >
                                                    <IoIosArrowDown />
                                                  </div>
                                                </span>
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      </span>

                                      <span>
                                        <div className={classes.popoverWrapper}>
                                          <div
                                            className={classes.buttonWrapperPopover}
                                            typeof="noborder"
                                          >
                                            <button
                                              className={classes.templateTypePopoverButton}
                                              typeof="noborder"
                                            >
                                              <span className={classes.eem1271}>
                                                Newest first
                                                <span className={classes.iconSizeMedium}>
                                                  <div
                                                    className={classes.iconWrapperCaretDownMaterial}
                                                  >
                                                    <IoIosArrowDown />
                                                  </div>
                                                </span>
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      </span>
                                    </span>
                                  </div>
                                </span>
                              </th>
                              <th className={classes.MuiTableCell} scope="col">
                                <span
                                  className={classes.MuiTableSortLabel}
                                  aria-disabled="false"
                                ></span>
                              </th>
                              <th className={classes.MuiTableCell} scope="col">
                                <span
                                  className={classes.MuiTableSortLabel}
                                  aria-disabled="false"
                                ></span>
                              </th>
                              <th className={classes.MuiTableCellPaddingNone} scope="col"></th>
                            </tr>
                          </thead>
                          <tbody className={classes.MuiTableBody}>
                            <tr className={classes.MuiTableRow}>
                              <td className={classes.paddingNone}></td>
                              <td className={classes.alignLeft} colSpan={3}>
                                <div className={classes.eem4165}>
                                  <div className={classes.tagsList}>
                                    <div className={classes.eem4166}>
                                      <div className={classes.root}>
                                        <div className={classes.eem4170}>
                                          <div className={classes.MuiAlert}>
                                            <div className={classes.MuiAlertIcon}>
                                              <IoIosInformationCircle className={classes.icon} />
                                            </div>

                                            <div className={classes.MuiAlertMessage}>
                                              <div className={classes.MuiTypography}>
                                                <div className={classes.typography}>
                                                  You don’t have any tags. Please go to template
                                                  options on editor screen to add them.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className={classes.paddingNone}></td>
                            </tr>
                          </tbody>
                        </table>
                        <EmptyPage />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageComponent;
