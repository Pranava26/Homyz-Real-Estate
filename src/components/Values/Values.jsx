import React, { useRef } from 'react'
import './Values.css'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion'

const Values = () => {
    const classNameRef = useRef(null);
    return (
        <section className='v-wrapper'>
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left Side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                {/* Right Side */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Values</span>
                    <span className='primaryText'>Values We Give To You</span>
                    <span className='secondaryText'>
                        We are always ready to help by providing the best services for you.
                        <br />
                        We believe, a good place to live can make your life better.
                    </span>
                    <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='accordian'>
                        {
                            data.map((item, i) => {
                                const setClassName = (value) => {
                                    classNameRef.current = value;
                                };
                                return (
                                    <AccordionItem className={`accordianItem ${classNameRef.current}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordianButton'>
                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon"><MdOutlineArrowDropDown size={20} /></div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Values
