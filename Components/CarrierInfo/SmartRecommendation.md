# SmartRecommendation

This Component will be the top most right component which will show the smart recommendation based on the details of the company.

### Component Name - `<SmartRecommendation />`

This Component will be child component and will accept props given below from CarrierInfo.

Props

```ts
interface IProps {
  recommendation: Recommendation;
}
```

For Reference

```ts
Recommendation = {
  isRecommended: Boolean;
  description: String;
};
```

Component Logic and props passing

```tsx
/*Maybe the results from this are AI generated so this may take a up a another call like click to generate recommendation and then after fetching the data we will get the results.
 */
export const SmartRecommendation = (props: IProps) => {
  return (
    <div className="flex-column-big">
      <div className="heading">Smart recommendation</div>
      <div>
        <div className="flex-column-small">
          <div className="text secondary">Recommendation</div>
          <div>
            {getIconBasedOnRecommendation(props.recommendation.isRecommended)}
            {props.recommendation.isRecommended
              ? "Do use this carrier"
              : "Do not use this carrier"}
          </div>
        </div>
        <hr />
        <div className="flex-column-small">
          <div className="text secondary">
            Reason
            <p>{props.recommendation.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
```

Utils

```ts
/*This function can also be defined as global function based on the choice that <TickIcon /> and <CrossIcon> from headerInfoPanel are same */
export const getIconBasedOnRecommendation = (isRecommended: Boolean) => {
  return isRecommended ? <TickIcon /> : <CrossIcon />;
};
```