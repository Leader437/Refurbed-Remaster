import React from 'react'
import DeliveryStatus from '../../components/DeliveryStatus/DeliveryStatus'
import RecommendedForYou from '../../components/RecommendedForYou/RecommendedForYou'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const OrderTracking = () => {
  return (
    <>
    <DeliveryStatus/>
    <RecommendedForYou/>
    <NewsLetter/>
    </>
  )
}

export default OrderTracking