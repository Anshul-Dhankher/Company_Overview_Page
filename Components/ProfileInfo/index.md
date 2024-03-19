# ProfileInfo

This Component will be the left portion of the UI page which will have the details for authority,operating Status, specialties etc.
which is designed style in flex with row gap defined to achieve the same UI design.

### Component Name - `<ProfileInfo />`

This component will be the parent component for below and will accept props from CompanyOverview Component:-

- ProfileInfo
  - [HeaderInfoPanel](HeaderInfoPanel.md)
  - [RateCarrierCard](RateCarrierCard.md)
  - [ImageGallery](ImageGallery.md)
  - [Specialties](Specialties.md)
  - [DirectoryInfo](Specialties.md)
  - [Contacts](Contacts.md)

Typescript Types

```ts
interface IProps {
  lastBookingDate: Date;
  headerInfo: CompanyHeaderInfo;
  imageGallery: String[];
  specialties: String[];
  directoryInfo: DirectoryInfo;
  contacts: Contacts[];
}
```

Component Logic and props passing

```tsx
export const ProfileInfo = (props: IProps) => {
  return (
    <div className="overview-item">
      <HeaderInfoPanel headerInfo={props.headerInfo} />
      <RateCarrierCard lastBookingDate={props.lastBookingDate} />
      <ImageGallery imageGallery={props.imageGallery} />
      <Specialties specialties={props.specialties} />
      <DirectoryInfo directoryInfo={props.directoryInfo} />
      <Contacts contacts={props.contacts} />
    </div>
  );
};
```
