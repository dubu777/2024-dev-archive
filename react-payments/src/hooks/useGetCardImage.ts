import Visa from '../assets/image/Visa.png';
import Master from '../assets/image/Mastercard.png';
import { isMasterCard, isVisaCard } from '@/utils/checkCardType';
import { useMemo } from 'react';
import { InputName } from '@/types/input';

export default function useGetCardImage(cardInfo: Record<InputName, Record<string, string>>) {
  const getCardImage = () => {
    const cardBrandNumber = parseInt(cardInfo.cardNumber.cardNumber1.substring(0,2));
    if (isVisaCard(cardBrandNumber)) return Visa
    if (isMasterCard(cardBrandNumber)) return Master
  }

  const cardImage = useMemo(() => {
    if (cardInfo.cardNumber.cardNumber1 && cardInfo.cardNumber.cardNumber1.length >= 2) {
      return getCardImage()
    }
  }, [cardInfo.cardNumber.cardNumber1])

  return cardImage
}