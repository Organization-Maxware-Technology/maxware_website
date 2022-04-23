import React from 'react'
import Icon1 from '../images/svg-4.svg'
import Icon2 from '../images/svg-5.svg'
import Icon3 from '../images/svg-6.svg'
import { ServicesContainer,
        ServicesH1,
        ServicesWrapper,ServicesIcon,
        ServicesCard,
        ServicesH2,
        ServicesP
        } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>ERP Development</ServicesH2>
                <ServicesP>Need an efficient tool to manage your business,
                 Odoo is the ideal solution for any size of business from the self-employed entrepreneur
                to small and medium-sized businesses.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Council</ServicesH2>
                <ServicesP>
                We offer tailor-made consulting services to companies from all sectors and in different situations. On a daily basis, we advise you on organizational and structural changes
                organizational and structural changes, 
                as well as in a variety of specialized areas such as financial and risk management.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Website creation</ServicesH2>
                <ServicesP>
                From a simple website presence to a custom development, 
                we have all the technical skills necessary to meet your needs.
                our teams are in permanent research of new best-practices in this field.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services