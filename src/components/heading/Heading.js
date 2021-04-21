import React from 'react'
import './heading.css'
import Button from '../button/Button'
import Typewriter from 'typewriter-effect'
import { useTranslation } from 'react-i18next';

const Heading = () => {
    const { t } = useTranslation();
    return (
        <div className='heading'>
            <h1>
               <span className='head-span-1'>{t('title')}</span> 
               <span>
                    <span className='head-span'> Ishita.</span>
               </span>
            </h1>
            <div className='underline'></div>
            <p className='tag'>
                <Typewriter 
                    options={{
                        strings: [t('tag1'),t('tag2'),t('tag3')],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50
                    }}
                />
            </p>
            <div className='buttons'>
                <Button 
                small='h-a-small' 
                color='bt-y-f' 
                label={t('hire')} 
                fill={true}
                internal={0}
                id='hire'
                />
                <Button 
                small='h-a-small' 
                color='bt-y-l' 
                label={t('work')} 
                fill={false}
                internal={0}
                id='project'/>
            </div>
        </div>
    )
}

export default Heading
