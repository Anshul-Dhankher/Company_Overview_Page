# RateCarrierCard

This Component will be the second component in left side which will be a card asking for rating the carrier with positive and negative rating and `also shows when you last booked the carrier` and stored the feedback in database for further usage.

### Component Name - `<RateCarrierCard />`

This Component will be child component and will accept props given below from ProfileInfo.

Props

```ts
interface IProps {
  lastBookingDate: Date;
}
```

Component Logic and props passing

```tsx
export const RateCarrierCard = (props: IProps) => {
  return (
    <div className="rateCarrierCard info-card">
      <div className="flex-col-small">
        <div>Rate this carrier</div>
        <div>You booked this carrier {getTimeAgo(props.lastBookingDate)}</div>
      </div>
      /*These are button icons which can be api's calls to backend to save response
      for user can store the feedback in database. */
      <div className="flex-col-small">
        <ThumbsUpIcon />
        <ThumbsDownIcon />
      </div>
    </div>
  );
};
```

CSS

```css
.rateCarrierCard {
  display: grid;
  gap: 5px;
  grid-template-columns: 2fr 1fr;
}
```
