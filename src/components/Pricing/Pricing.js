import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nuestros Servicios</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Agil</PricingCardPlan>
                <PricingCardCost>20 Horas </PricingCardCost>
                <PricingCardLength>Semanales</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Experiencia y interaccion con Ordenadores</PricingCardFeature>
                  <PricingCardFeature>Conocimiento de Circuitos Basicos</PricingCardFeature>
                  <PricingCardFeature>Aprendizaje Interno de Aparatos Electronicos</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary> Apply </Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Campus</PricingCardPlan>
                <PricingCardCost>20 Horas</PricingCardCost>
                <PricingCardLength>Semanales</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Conocimiento de lenguajes Frontend</PricingCardFeature>
                  <PricingCardFeature>Conocimiento de lenguajes Backend</PricingCardFeature>
                  <PricingCardFeature>Opcional: Conocimiento de Servicios Moodle</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Apply</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Desarollo</PricingCardPlan>
                <PricingCardCost>20 Horas</PricingCardCost>
                <PricingCardLength>Semanales</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Conocimiento completo de Desarollo Web</PricingCardFeature>
                  <PricingCardFeature>Conocimiento de servicios y librerias </PricingCardFeature>
                  <PricingCardFeature>conocimiento completo de servicios Git</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Apply</Button>
              </PricingCardInfo>
            </PricingCard>
            
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing; 