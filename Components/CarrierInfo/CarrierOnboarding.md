# CarrierOnboarding

This Component will be the second component on right which will show the details on carrier Onboarding it is designed in a way that backend check for the two parameters and sends two booleans checking isCarrierSetupWithCompany and isCarrierChaineVerified.

### Component Name - `<CarrierOnboarding />`

This Component will be child component and will accept props given below from CarrierInfo.

Props

```ts
interface IProps {
  onboarding: onboarding;
}
```

For Reference

```ts
Onboarding = {
  isCarrierSetupWithCompany: Boolean;
  isCarrierChaineVerified: Boolean;
};
```

Component Logic and props passing

```tsx
/*This Component is designed in way that props mainly have two boolean variables isCarrierSetupWithCompany and isCarrierChaineVerified but can surely plan like message and status if that is what is meant to be.
 */
export const CarrierOnboarding = (props: IProps) => {
  return (
    <div className="flex-column-big">
      <div className="heading">Carrier onboarding</div>
      <div className="flex-column-small">
        <div className="text secondary">
          {getIconBasedOnStatus(props.isCarrierSetupWithCompany)} This Carrier
          is {!props.isCarrierSetupWithCompany && "not"} setup with you company.
        </div>
        <div className="text secondary">
          {getIconBasedOnStatus(props.isCarrierChaineVerified)} This Carrier is{" "}
          {!props.isCarrierChaineVerified && "not"} verfied on chaine.
        </div>
      </div>
    </div>
  );
};
```

Utils

```ts
/*This function can also be defined as global function based on the choice that <TickIcon /> and <CrossIcon> from headerInfoPanel are same */
export const getIconBasedOnStatus = (isRecommended: Boolean) => {
  return isRecommended ? <SmallTickIcon /> : <SmallCrossIcon />;
};
```
