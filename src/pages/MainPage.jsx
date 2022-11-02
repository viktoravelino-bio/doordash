import { Header } from '../components/organisms/header/Header';
import { ProductSectionContainer } from '../components/molecules/productSectionContainer/ProductSectionContainer';
import { CuisineSelectionRowContainer } from '../components/molecules/cuisineSelectionRowContainer/CuisineSelectionRowContainer';
import { Filter } from '../components/molecules/filter/Filter';
import { AdsRow } from '../components/molecules/adsRow/AdsRow';
import { CarouselRow } from '../components/molecules/carouselRow/CarouselRow';
import walletFriendly from '../data/walletFriendly';
import offersForYou from '../data/offersForYou';

export function MainPage() {
  return (
    <div>
      <Header />
      <div style={{ maxWidth: '50rem', marginInline: 'auto' }}>
        <ProductSectionContainer />

        <CuisineSelectionRowContainer />

        <Filter />

        <AdsRow />

        <CarouselRow title="Offers for You" cardSize="sm" data={offersForYou} />
        <CarouselRow
          title="Wallet Friendly"
          data={walletFriendly}
          showTopDivider
        />

        <div style={{ height: '1000px', backgroundColor: 'white' }}></div>
      </div>
    </div>
  );
}
