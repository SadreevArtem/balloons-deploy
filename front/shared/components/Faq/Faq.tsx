import React, { FC } from 'react'
import { AppAccordionGroup } from '../AppAccordionGroup/AppAccordionGroup'
import { FaqType } from '@/shared/types'

type Props = {
    faqs: FaqType[],
    title: string
}

export const Faq: FC<Props> = ({faqs, title}) => {
  return (
    <div className='container '>
        <h2 className='text-[24px] mb-4'>{title}</h2>
        {faqs?.length !== 0 && (
          <AppAccordionGroup
            items={faqs || []}
            isFirstOpen={false}
            accordionContentSlot={(item) => (
              <>
                <p>{item.answer}</p>
              </>
            )}
          />
        )}
    </div>
  )
}
