import { menuData } from '../assets/data/menuData';
import { restaurantData } from '../assets/data/restaurantData';
import { Card } from '../components/atoms/card/Card';
import { MenuCardItem } from '../components/molecules/menuCardItem/MenuCardItem';
import { ReviewCard } from '../components/molecules/reviewCard/ReviewCard';
import { SectionSelection } from '../components/molecules/sectionSelection/SectionSelection';
import { StoreHeader } from '../components/molecules/storeHeader/StoreHeader';
import { Header } from '../components/organisms/header/Header';

import './StorePage.scss';

export function StorePage() {
  return (
    <div>
      <Header />

      <div style={{ maxWidth: '50em', marginInline: 'auto' }}>
        <StoreHeader {...restaurantData} />

        <div
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: '20rem',
            gap: '1rem',
            overflowX: 'auto',

            overflowY: 'clip',
            paddingBottom: '0.5rem',
          }}
        >
          <ReviewCard.NewCard userName="John D." />
          <ReviewCard
            userName="John D."
            date="1/27/22"
            review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium earum maxime suscipit autem sint vero inventore et ex? Nobis animi recusandae ipsum quod veritatis hic corrupti enim earum ducimus. Hic!"
            rating="2"
          />

          <ReviewCard
            userName="John D."
            date="1/27/22"
            review="Lorem"
            rating="3"
          />
          <ReviewCard
            userName="John D."
            date="1/27/22"
            review="Lorem"
            rating="4"
          />
          <ReviewCard
            userName="John D."
            date="1/27/22"
            review="Lorem"
            rating="5"
          />
        </div>

        <div style={{ display: 'flex', overflowX: 'auto' }}>
          <Card size="sm">
            <Card.Body>
              <Card.Image src="https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photosV2/87fd9524-11c6-4c60-af23-4fa6cd64ae10-442ad679-a871-4d0e-a995-ca39309ee19d-retina-large.JPG " />
              <Card.Title>Weekender Breakfast</Card.Title>
              <Card.Text>CA$18.59</Card.Text>
              <Card.ActionButton>Add</Card.ActionButton>
            </Card.Body>
          </Card>
        </div>

        <div style={{ paddingInline: '0.5em' }}>
          <SectionSelection
            data={menuData}
            renderItem={(item) => <MenuCardItem {...item} />}
            keyExtractor={(item) => item.id}
            renderSectionTitle={(title) => <h2>{title}</h2>}
            itemsContainerClassName="menu-items__container"
          />
        </div>
      </div>
    </div>
  );
}
