import Navbar from "../Navbar/Navbar"
import QuickLinkBar from "../QuickLinkBar/QuickLinkBar"
import PromotionBanner from "../PromotionBanner/PromotionBanner"

const Header = () => {
  return (
    <div>
        <Navbar />
        <QuickLinkBar />
        <PromotionBanner promotionVisible={true} />
    </div>
  )
}

export default Header