# ProfileSection

This Component will be the left portion of the UI page which will have the details for authority,operating Status, specialties etc.
which is designed style in flex with row gap defined to achieve the same UI design.

### Component Name - `<ProfileSection />`

This component will be the parent component for below and will accept props from CompanyOverview Component:-

- ProfileSection
  - [HeaderInfoPanel](HeaderInfoPanel.md)
  - [RateCarrierCard](RateCarrierCard.md)
  - [ImageGallery](ImageGallery.md)
  - [Specialties](Specialties.md)
  - [Directory](Directory.md)
  - [Contacts](Contacts.md)

Typescript Types

```ts
interface IProps {
  lastBookingDate: Date;
  headerInfo: CompanyHeaderInfo;
  imageGallery: String[];
  specialties: String[];
  directory: Directory;
  contacts: Contacts[];
}
```

Component Logic and props passing

```tsx
export const ProfileSection = (props: IProps) => {
  return (
    <div className="overview-section">
      <HeaderInfoPanel headerInfo={props.headerInfo} />
      <RateCarrierCard lastBookingDate={props.lastBookingDate} />
      <ImageGallery imageGallery={props.imageGallery} />
      <Specialties specialties={props.specialties} />
      <Directory directory={props.directory} />
      <Contacts contacts={props.contacts} />
    </div>
  );
};
```
